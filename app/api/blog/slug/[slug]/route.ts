import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Blog from '@/models/Blog'

// GET - Fetch blog post by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB()
    const { slug } = await params

    const post = await Blog.findOne({ 
      slug,
      status: 'published' 
    }).lean()

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
    console.error('Error fetching blog post by slug:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
}
