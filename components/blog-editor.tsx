'use client'

import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Blockquote from '@tiptap/extension-blockquote'
import Youtube from '@tiptap/extension-youtube'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import { createLowlight } from 'lowlight'
import { useState, useCallback } from 'react'

// Create lowlight instance
const lowlight = createLowlight()

interface EditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

export default function BlogEditor({ content, onChange, placeholder = 'Start writing...' }: EditorProps) {
  const [isUploading, setIsUploading] = useState(false)

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        heading: {
          levels: [1, 2, 3],
        },
        bulletList: {
          HTMLAttributes: {
            class: 'bullet-list',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'ordered-list',
          },
        },
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline',
        },
        validate: (url) => {
          return /^https?:\/\/|^\/|^#|^mailto:|^tel:/.test(url) || url.length > 0
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Blockquote,
      Youtube.configure({
        controls: true,
        nocookie: true,
      }),
      HorizontalRule,
      Underline,
      Strike,
    ],
    content: content || '<p></p>',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onChange(html)
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none p-4 text-foreground',
        'data-placeholder': placeholder,
      },
    },
  })

  React.useEffect(() => {
    if (editor && content !== undefined) {
      const currentContent = editor.getHTML()
      const normalizedContent = content || '<p></p>'
      const normalizedCurrent = currentContent || '<p></p>'
      if (normalizedContent !== normalizedCurrent) {
        editor.commands.setContent(normalizedContent, false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content])

  const handleImageUpload = useCallback(async (file: File) => {
    if (!editor) return

    setIsUploading(true)
    try {
      const reader = new FileReader()
      reader.onloadend = () => {
        const dataUrl = reader.result as string
        editor.chain().focus().setImage({ src: dataUrl }).run()
        setIsUploading(false)
      }
      reader.onerror = () => {
        alert('Image upload failed. Please try again.')
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Image upload failed:', error)
      alert('Image upload failed. Please try again.')
      setIsUploading(false)
    }
  }, [editor])

  if (!editor) {
    return <div className="border rounded-lg p-4 bg-muted border-border text-foreground">Loading editor...</div>
  }

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <div className="border-b border-border bg-muted/50 p-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBold().run()
          }}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('bold') ? 'bg-accent text-accent-foreground' : 'bg-muted text-foreground hover:bg-muted/80'}`}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleItalic().run()
          }}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('italic') ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleUnderline().run()
          }}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('underline') ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
        >
          <u>U</u>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleStrike().run()
          }}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('strike') ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
        >
          <s>S</s>
        </button>
        <div className="w-px bg-border mx-1" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
        >
          H3
        </button>
        <div className="w-px bg-border mx-1" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBulletList().run()
          }}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('bulletList') ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
          title="Bullet List"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleOrderedList().run()
          }}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('orderedList') ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
          title="Numbered List"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBlockquote().run()
          }}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('blockquote') ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
        >
          &quot;
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().setHorizontalRule().run()
          }}
          className="px-3 py-1 rounded text-sm bg-muted text-foreground hover:bg-muted/80 transition-colors"
        >
          ─
        </button>
        <div className="w-px bg-border mx-1" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            const previousUrl = editor.getAttributes('link').href || ''
            const url = window.prompt('Enter URL:', previousUrl)
            if (url !== null) {
              if (url === '') {
                editor.chain().focus().unsetLink().run()
              } else {
                editor.chain().focus().setLink({ href: url }).run()
              }
            }
          }}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('link') ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
        >
          Link
        </button>
        <label className="px-3 py-1 rounded text-sm bg-muted text-foreground hover:bg-muted/80 cursor-pointer transition-colors">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleImageUpload(file)
            }}
            disabled={isUploading}
          />
          {isUploading ? 'Uploading...' : 'Image'}
        </label>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            const url = window.prompt('Enter YouTube URL:')
            if (url) {
              editor.chain().focus().setYoutubeVideo({ src: url }).run()
            }
          }}
          className="px-3 py-1 rounded text-sm bg-muted text-foreground hover:bg-muted/80 transition-colors"
        >
          YouTube
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
          }}
          className="px-3 py-1 rounded text-sm bg-muted text-foreground hover:bg-muted/80 transition-colors"
        >
          Table
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleCodeBlock().run()
          }}
          className={`px-3 py-1 rounded text-sm transition-colors ${editor.isActive('codeBlock') ? 'bg-accent text-accent-foreground' : 'bg-background text-foreground hover:bg-muted border border-border'}`}
        >
          {'</>'}
        </button>
        <div className="w-px bg-border mx-1" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().undo().run()
          }}
          disabled={!editor.can().chain().focus().undo().run()}
          className="px-3 py-1 rounded text-sm bg-muted text-foreground hover:bg-muted/80 disabled:opacity-50 transition-colors"
        >
          ↶
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().redo().run()
          }}
          disabled={!editor.can().chain().focus().redo().run()}
          className="px-3 py-1 rounded text-sm bg-muted text-foreground hover:bg-muted/80 disabled:opacity-50 transition-colors"
        >
          ↷
        </button>
      </div>
      <div className="max-h-[600px] overflow-y-auto border-t border-border">
        <EditorContent 
          editor={editor} 
          className="min-h-[400px] prose prose-lg max-w-none focus:outline-none p-4 blog-editor text-foreground" 
        />
      </div>
      <style jsx global>{`
        .blog-editor .ProseMirror {
          outline: none;
          color: var(--foreground);
          min-height: 400px;
          background: var(--card);
        }
        .blog-editor .ProseMirror p {
          color: var(--foreground);
          margin: 0.75em 0;
        }
        .blog-editor .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: var(--muted-foreground);
          pointer-events: none;
          height: 0;
        }
        .blog-editor .ProseMirror h1 {
          color: var(--primary);
          font-size: 2em;
          font-weight: bold;
          margin: 1em 0 0.5em 0;
          line-height: 1.2;
        }
        .blog-editor .ProseMirror h2 {
          color: var(--primary);
          font-size: 1.5em;
          font-weight: bold;
          margin: 1em 0 0.5em 0;
          line-height: 1.3;
        }
        .blog-editor .ProseMirror h3 {
          color: var(--accent);
          font-size: 1.25em;
          font-weight: bold;
          margin: 1em 0 0.5em 0;
          line-height: 1.4;
        }
        .blog-editor .ProseMirror h1:first-child,
        .blog-editor .ProseMirror h2:first-child,
        .blog-editor .ProseMirror h3:first-child {
          margin-top: 0;
        }
        .blog-editor .ProseMirror a {
          color: var(--accent);
          text-decoration: underline;
        }
        .blog-editor .ProseMirror a:hover {
          opacity: 0.8;
        }
        .blog-editor .ProseMirror ul,
        .blog-editor .ProseMirror ol {
          color: var(--foreground);
          margin: 0.75em 0;
          padding-left: 1.5em;
        }
        .blog-editor .ProseMirror li {
          margin: 0.25em 0;
          color: var(--foreground);
        }
        .blog-editor .ProseMirror blockquote {
          border-left: 3px solid var(--accent);
          padding: 1em 1.5em;
          margin: 1em 0;
          color: var(--muted-foreground);
          font-style: italic;
          background: var(--muted);
          border-radius: 0.5em;
        }
        .blog-editor .ProseMirror code {
          background-color: var(--muted);
          color: var(--accent);
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-size: 0.9em;
          font-family: 'Courier New', monospace;
        }
        .blog-editor .ProseMirror pre {
          background-color: var(--primary);
          color: var(--primary-foreground);
          padding: 1em;
          border-radius: 4px;
          overflow-x: auto;
          margin: 1em 0;
        }
        .blog-editor .ProseMirror pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
        }
        .blog-editor .ProseMirror table {
          border-collapse: collapse;
          margin: 1em 0;
          width: 100%;
          border-color: var(--border);
        }
        .blog-editor .ProseMirror th,
        .blog-editor .ProseMirror td {
          border: 1px solid var(--border);
          padding: 0.5em;
          text-align: left;
          color: var(--foreground);
        }
        .blog-editor .ProseMirror th {
          background-color: var(--muted);
          font-weight: bold;
          color: var(--primary);
        }
        .blog-editor .ProseMirror img {
          max-width: 100%;
          height: auto;
          margin: 1em 0;
          border-radius: 0.5em;
        }
        .blog-editor .ProseMirror hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 2em 0;
        }
      `}</style>
    </div>
  )
}

