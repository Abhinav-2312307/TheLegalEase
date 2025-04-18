"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, MicOff } from "lucide-react"

export function HeroSection() {
  const [isRecording, setIsRecording] = useState(false)
  const [query, setQuery] = useState("")

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // In a real implementation, this would start/stop voice recording
  }

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 md:py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">AI-Powered Legal Assistance for Everyone</h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10">
          Simplify legal documents, get answers to legal questions, and receive guidance for your specific situation.
        </p>

        <div className="w-full max-w-2xl mb-10">
          <div className="flex gap-2">
            <Input
              placeholder="Describe your legal issue or ask a question..."
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              variant="outline"
              size="icon"
              className={`${isRecording ? "bg-red-500 text-white border-red-500" : "bg-white/10 border-white/20 text-white"}`}
              onClick={toggleRecording}
            >
              {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
            <Button>Get Help</Button>
          </div>
          <p className="text-sm text-slate-400 mt-2">
            Try: "My landlord is threatening to evict me without notice" or "Help me understand this employment
            contract"
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" asChild>
            <Link href="/tools/document-simplifier">Simplify a Document</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/tools/document-generator">Generate a Legal Document</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/emergency">Emergency Help</Link>
          </Button>
        </div>

        <div className="mt-16 flex items-center gap-8 flex-wrap justify-center">
          <div className="flex items-center">
            <div className="bg-emerald-500 rounded-full h-10 w-10 flex items-center justify-center mr-3">
              <span className="font-bold">24/7</span>
            </div>
            <span className="text-slate-300">Always Available</span>
          </div>
          <div className="flex items-center">
            <div className="bg-emerald-500 rounded-full h-10 w-10 flex items-center justify-center mr-3">
              <span className="font-bold">10+</span>
            </div>
            <span className="text-slate-300">Languages</span>
          </div>
          <div className="flex items-center">
            <div className="bg-emerald-500 rounded-full h-10 w-10 flex items-center justify-center mr-3">
              <span className="font-bold">100%</span>
            </div>
            <span className="text-slate-300">Secure & Private</span>
          </div>
        </div>
      </div>
    </section>
  )
}
