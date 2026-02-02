import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IBlog extends Document {
  title: string
  content: string
  excerpt: string
  tags: string[]
  status: 'published' | 'draft'
  featuredImage: string | null
  slug: string
  createdAt: Date
  updatedAt: Date
}

const BlogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: [500, 'Excerpt cannot exceed 500 characters'],
    },
    tags: {
      type: [String],
      default: [],
      validate: {
        validator: function(v: string[]) {
          return v.length <= 10
        },
        message: 'Cannot have more than 10 tags',
      },
    },
    status: {
      type: String,
      enum: ['published', 'draft'],
      default: 'draft',
      required: true,
    },
    featuredImage: {
      type: String,
      default: null,
    },
    slug: {
      type: String,
      required: false, // Will be auto-generated in pre-save hook
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
)

// Generate slug from title before saving
BlogSchema.pre('save', async function (next) {
  try {
    // Always generate slug if it doesn't exist or if title changed
    if (!this.slug || this.isModified('title') || this.isNew) {
      if (!this.title) {
        return next(new Error('Title is required to generate slug'))
      }
      
      let baseSlug = this.title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
      
      // If baseSlug is empty after processing, use a default
      if (!baseSlug) {
        baseSlug = 'blog-post'
      }
      
      // Ensure slug is unique by appending a number if needed
      let slug = baseSlug
      let counter = 1
      const BlogModel = this.constructor as Model<IBlog>
      let existing = await BlogModel.findOne({ slug, _id: { $ne: this._id } })
      
      while (existing) {
        slug = `${baseSlug}-${counter}`
        counter++
        existing = await BlogModel.findOne({ slug, _id: { $ne: this._id } })
      }
      
      this.slug = slug
    }
    next()
  } catch (error: any) {
    next(error)
  }
})

// Generate excerpt from content if not provided
BlogSchema.pre('save', function (next) {
  if (this.isModified('content') && !this.excerpt) {
    const textContent = this.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
    this.excerpt = textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent
  }
  next()
})

// Index for faster queries
BlogSchema.index({ slug: 1 })
BlogSchema.index({ status: 1 })
BlogSchema.index({ createdAt: -1 })
BlogSchema.index({ tags: 1 })

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema)

export default Blog

