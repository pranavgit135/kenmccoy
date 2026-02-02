import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'
import mongoose from 'mongoose'

// GET - Fetch single blog post by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid blog post ID' },
        { status: 400 }
      )
    }

    const post = await Blog.findById(id).lean()

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: {
        _id: post._id.toString(),
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        tags: post.tags,
        status: post.status,
        featuredImage: post.featuredImage,
        slug: post.slug,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString()
      }
    })
  } catch (error: any) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
}

// PUT - Update blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params
    const body = await request.json()
    const { title, content, tags, featuredImage, status } = body

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid blog post ID' },
        { status: 400 }
      )
    }

    const post = await Blog.findById(id)

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      )
    }

    // Update fields
    if (title !== undefined) {
      post.title = title
      // Regenerate slug when title changes
      let baseSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
      
      if (!baseSlug) {
        baseSlug = 'blog-post'
      }

      // Ensure slug is unique by appending a number if needed
      let slug = baseSlug
      let counter = 1
      let existing = await Blog.findOne({ slug, _id: { $ne: id } })
      
      while (existing) {
        slug = `${baseSlug}-${counter}`
        counter++
        existing = await Blog.findOne({ slug, _id: { $ne: id } })
      }
      
      post.slug = slug
    }
    if (content !== undefined) {
      post.content = content
      // Regenerate excerpt if content changed
      const textContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
      post.excerpt = textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent
    }
    if (tags !== undefined) post.tags = tags
    if (featuredImage !== undefined) post.featuredImage = featuredImage
    if (status !== undefined) post.status = status

    await post.save()

    return NextResponse.json({
      success: true,
      data: {
        _id: post._id.toString(),
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        tags: post.tags,
        status: post.status,
        featuredImage: post.featuredImage,
        slug: post.slug,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString()
      }
    })
  } catch (error: any) {
    console.error('Error updating blog post:', error)
    
    // Handle duplicate slug error
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'A blog post with this title already exists' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update blog post' },
      { status: 500 }
    )
  }
}

// DELETE - Delete blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid blog post ID' },
        { status: 400 }
      )
    }

    const post = await Blog.findByIdAndDelete(id)

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully'
    })
  } catch (error: any) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete blog post' },
      { status: 500 }
    )
  }
}
