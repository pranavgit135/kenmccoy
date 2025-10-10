"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestStylesPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary">Style Test Page</h1>
        
        {/* Color Tests */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-primary text-primary-foreground rounded-lg">
            Primary
          </div>
          <div className="p-4 bg-accent text-accent-foreground rounded-lg">
            Accent
          </div>
          <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
            Secondary
          </div>
          <div className="p-4 bg-muted text-muted-foreground rounded-lg">
            Muted
          </div>
        </div>

        {/* Button Tests */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Button Tests</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Custom Accent
            </Button>
          </div>
        </div>

        {/* Card Tests */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Card Tests</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">This is a default card with proper styling.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-primary">Gradient Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">This card has a gradient background.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gradient Tests */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Gradient Tests</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="h-32 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-lg flex items-center justify-center">
              <span className="text-primary font-semibold">Primary to Accent Gradient</span>
            </div>
            <div className="h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-primary font-semibold">Accent to Primary Gradient</span>
            </div>
          </div>
        </div>

        {/* Font Tests */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Font Tests</h2>
          <div className="space-y-2">
            <h1 className="font-red-hat-display text-3xl text-primary">Red Hat Display Font Test</h1>
            <p className="font-ubuntu text-lg text-muted-foreground">Ubuntu Font Test</p>
            <p className="text-foreground/80">Text with opacity test</p>
          </div>
        </div>
      </div>
    </div>
  )
}
