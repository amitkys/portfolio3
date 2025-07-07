"use client"

import { useState } from "react"
import { Copy, Check, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
	const [copied, setCopied] = useState(false)
	const email = "aamitkys@gmail.com"

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error("Failed to copy email:", err)
		}
	}

	return (
		<div className="w-full max-w-4xl mx-auto">
			<Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
				{/* Subtle background pattern */}
				<div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

				<CardContent className="relative p-8 space-y-6">
					{/* Status indicator */}
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
						<span className="text-sm text-muted-foreground">Available</span>
					</div>

					{/* Main content */}
					<div className="space-y-3">
						<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-muted-foreground">Let's work together</h2>
						<p className="text-muted-foreground leading-relaxed hidden">
							Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
						</p>
					</div>

					{/* Email section */}
					<div className="space-y-4">
						<div className="group relative">
							<div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-border/50 group-hover:border-primary/20 transition-colors">
								<Mail className="h-4 w-4 text-muted-foreground" />
								<span className="font-mono text-sm flex-1">{email}</span>
								<Button
									onClick={copyEmail}
									size="sm"
									variant="outline"
									className="h-8 w-8 p-0 transition-opacity"
								>
									{copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
								</Button>
							</div>
							{copied && (
								<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded animate-in fade-in slide-in-from-bottom-2 duration-200">
									Copied to clipboard!
								</div>
							)}
						</div>

					</div>

					{/* Response time */}
					<div className="text-center pt-2 border-t border-border/50">
						<p className="text-xs text-muted-foreground">Usually responds within 24 hours</p>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
