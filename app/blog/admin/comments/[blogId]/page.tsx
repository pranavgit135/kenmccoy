'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft,
  MessageCircle,
  Check,
  X,
  Mail,
  Calendar,
  Trash2,
  Loader2
} from 'lucide-react'

interface Comment {
  _id: string
  blogId: string
  name: string
  email: string
  message: string
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
}

interface BlogPost {
  _id: string
  title: string
  slug: string
}

export default function CommentsManagementPage({ params }: { params: Promise<{ blogId: string }> }) {
  const router = useRouter()
  const [blogId, setBlogId] = useState<string>('')
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [updating, setUpdating] = useState<string | null>(null)

  // Resolve params
  useEffect(() => {
    const initParams = async () => {
      const resolvedParams = await params
      setBlogId(resolvedParams.blogId)
    }
    initParams()
  }, [params])

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check-session', {
          credentials: 'include',
          cache: 'no-store'
        })
        const result = await response.json()

        if (result.success && result.authenticated) {
          setAuthenticated(true)
        } else {
          router.push('/blog/admin/login')
        }
      } catch (error) {
        console.error('Error checking auth:', error)
        router.push('/blog/admin/login')
      } finally {
        setCheckingAuth(false)
      }
    }

    checkAuth()
  }, [router])

  // Load blog and comments
  useEffect(() => {
    if (!authenticated || !blogId) return

    const loadData = async () => {
      setLoading(true)
      try {
        // Load blog post
        const blogResponse = await fetch(`/api/blog/${blogId}`)
        const blogResult = await blogResponse.json()

        if (blogResult.success && blogResult.data) {
          setBlog(blogResult.data)
        }

        // Load comments
        const commentsResponse = await fetch(`/api/comments?blogId=${blogId}&admin=true`)
        const commentsResult = await commentsResponse.json()

        if (commentsResult.success) {
          setComments(commentsResult.data)
        }
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [authenticated, blogId])

  // Update comment status
  const handleCommentStatus = async (commentId: string, status: 'approved' | 'rejected') => {
    setUpdating(commentId)
    try {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      const result = await response.json()

      if (result.success) {
        setComments(comments.map(comment =>
          comment._id === commentId
            ? { ...comment, status }
            : comment
        ))
      } else {
        alert('Failed to update comment: ' + result.error)
      }
    } catch (error) {
      console.error('Error updating comment:', error)
      alert('Error updating comment')
    } finally {
      setUpdating(null)
    }
  }

  // Delete comment
  const handleDeleteComment = async (commentId: string) => {
    if (confirm('Are you sure you want to delete this comment?')) {
      setUpdating(commentId)
      try {
        const response = await fetch(`/api/comments/${commentId}`, {
          method: 'DELETE',
        })

        const result = await response.json()

        if (result.success) {
          setComments(comments.filter(comment => comment._id !== commentId))
        } else {
          alert('Failed to delete comment: ' + result.error)
        }
      } catch (error) {
        console.error('Error deleting comment:', error)
        alert('Error deleting comment')
      } finally {
        setUpdating(null)
      }
    }
  }

  if (checkingAuth || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-muted border-t-accent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">
            {checkingAuth ? 'Checking authentication...' : 'Loading comments...'}
          </p>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog/admin">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Admin
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const pendingCount = comments.filter(c => c.status === 'pending').length
  const approvedCount = comments.filter(c => c.status === 'approved').length
  const rejectedCount = comments.filter(c => c.status === 'rejected').length

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Link href="/blog/admin">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Admin
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
                Comments Management
              </h1>
              <p className="text-muted-foreground text-lg">
                {blog.title}
              </p>
            </div>
            <Link href={`/blog/${blog.slug}`}>
              <Button
                variant="outline"
                className="bg-card border-border text-foreground hover:bg-muted"
              >
                View Blog Post
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="bg-card backdrop-blur-sm border-border">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{comments.length}</div>
              <div className="text-muted-foreground text-sm">Total Comments</div>
            </CardContent>
          </Card>
          <Card className="bg-card backdrop-blur-sm border-border">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                {pendingCount}
              </div>
              <div className="text-muted-foreground text-sm">Pending</div>
            </CardContent>
          </Card>
          <Card className="bg-card backdrop-blur-sm border-border">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                {approvedCount}
              </div>
              <div className="text-muted-foreground text-sm">Approved</div>
            </CardContent>
          </Card>
          <Card className="bg-card backdrop-blur-sm border-border">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
                {rejectedCount}
              </div>
              <div className="text-muted-foreground text-sm">Rejected</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Comments List */}
        {comments.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center py-16"
          >
            <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl text-foreground mb-2">No comments yet</h3>
            <p className="text-muted-foreground">This blog post has no comments.</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <motion.div
                key={comment._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Card
                  className={`bg-card border-border ${
                    comment.status === 'pending'
                      ? 'border-yellow-400/50 bg-yellow-500/5'
                      : comment.status === 'approved'
                      ? 'border-green-400/50 bg-green-500/5'
                      : 'border-red-400/50 bg-red-500/5'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-12 h-12 bg-[#F57433] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                          {comment.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-card-foreground text-lg">{comment.name}</h4>
                            <Badge
                              variant="outline"
                              className={
                                comment.status === 'pending'
                                  ? 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-400/30'
                                  : comment.status === 'approved'
                                  ? 'bg-green-500/20 text-green-700 dark:text-green-300 border-green-400/30'
                                  : 'bg-red-500/20 text-red-700 dark:text-red-300 border-red-400/30'
                              }
                            >
                              {comment.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4" />
                            {comment.email}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(comment.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap mb-4">
                      {comment.message}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {comment.status !== 'approved' && (
                        <Button
                          size="sm"
                          onClick={() => handleCommentStatus(comment._id, 'approved')}
                          disabled={updating === comment._id}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          {updating === comment._id ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <Check className="w-4 h-4 mr-2" />
                          )}
                          Approve
                        </Button>
                      )}
                      {comment.status !== 'rejected' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleCommentStatus(comment._id, 'rejected')}
                          disabled={updating === comment._id}
                          className="bg-red-500/10 border-red-400/30 !text-red-700 dark:text-red-300 hover:bg-red-500/20"
                        >
                          {updating === comment._id ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <X className="w-4 h-4 mr-2" />
                          )}
                          Reject
                        </Button>
                      )}
                      {comment.status === 'approved' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleCommentStatus(comment._id, 'pending')}
                          disabled={updating === comment._id}
                          className="bg-yellow-500/10 border-yellow-400/30 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-500/20"
                        >
                          {updating === comment._id ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : null}
                          Set Pending
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteComment(comment._id)}
                        disabled={updating === comment._id}
                        className="bg-destructive/10 border-destructive/30 !text-destructive hover:bg-destructive/20 ml-auto"
                      >
                        {updating === comment._id ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4 mr-2" />
                        )}
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

