"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Mic, MicOff, Send, FileUp, Volume2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LegalAssistant() {
  const [message, setMessage] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your LegalEase assistant. How can I help you with your legal questions today?",
    },
  ])

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // In a real implementation, this would start/stop voice recording
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: message }])
    setMessage("")

    // Simulate assistant response after a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I understand you're facing a legal issue. To provide the most accurate guidance, could you please share more details about your situation? For example, when did this happen, what documents do you have, and what specific help do you need?",
        },
      ])
    }, 1000)
  }

  return (
    <main className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Legal Assistant</h1>
          <div className="flex items-center gap-4">
            <Select defaultValue="english">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
                <SelectItem value="tamil">Tamil</SelectItem>
                <SelectItem value="telugu">Telugu</SelectItem>
                <SelectItem value="bengali">Bengali</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="chat">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Help</TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card className="border mb-4">
              <CardContent className="p-0">
                <div className="h-[500px] flex flex-col">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`flex gap-3 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                          <Avatar className={msg.role === "assistant" ? "bg-primary" : "bg-slate-300"}>
                            <AvatarFallback>{msg.role === "assistant" ? "AI" : "You"}</AvatarFallback>
                          </Avatar>
                          <div
                            className={`rounded-lg p-4 ${
                              msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <p>{msg.content}</p>
                            {msg.role === "assistant" && (
                              <Button variant="ghost" size="sm" className="mt-2 h-8 px-2">
                                <Volume2 className="h-4 w-4 mr-1" />
                                Listen
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t p-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="shrink-0">
                        <FileUp className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className={`shrink-0 ${isRecording ? "bg-red-500 text-white border-red-500" : ""}`}
                        onClick={toggleRecording}
                      >
                        {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                      </Button>
                      <Input
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleSendMessage()
                          }
                        }}
                      />
                      <Button onClick={handleSendMessage} disabled={!message.trim()}>
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-sm text-muted-foreground">
              <p>Try asking about:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Button variant="outline" size="sm" onClick={() => setMessage("What are my rights as a tenant?")}>
                  Tenant rights
                </Button>
                <Button variant="outline" size="sm" onClick={() => setMessage("How do I file an FIR?")}>
                  Filing an FIR
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMessage("What should I do if my employer hasn't paid my salary?")}
                >
                  Unpaid salary
                </Button>
                <Button variant="outline" size="sm" onClick={() => setMessage("How do I respond to a legal notice?")}>
                  Legal notices
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="emergency">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-bold text-red-800 mb-2">Emergency Legal Help</h2>
                  <p className="text-red-700 mb-4">
                    If you're in immediate danger, please contact emergency services at <strong>112</strong> first.
                  </p>
                  <p className="text-red-700">
                    This service provides urgent legal guidance for situations requiring immediate attention.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Select Emergency Type:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Button variant="outline" className="justify-start h-auto py-3 px-4">
                        Wrongful Detention/Arrest
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3 px-4">
                        Domestic Violence
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3 px-4">
                        Workplace Harassment
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3 px-4">
                        Eviction Threat
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3 px-4">
                        Accident/Injury
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3 px-4">
                        Other Emergency
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Or Describe Your Emergency:</h3>
                    <div className="flex gap-2">
                      <Input placeholder="Briefly describe your emergency situation..." />
                      <Button>Get Help</Button>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Emergency Resources:</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>National Legal Services Authority</span>
                        <Button variant="link" className="h-auto p-0">
                          1516
                        </Button>
                      </li>
                      <li className="flex justify-between">
                        <span>Women's Helpline</span>
                        <Button variant="link" className="h-auto p-0">
                          1091
                        </Button>
                      </li>
                      <li className="flex justify-between">
                        <span>Child Helpline</span>
                        <Button variant="link" className="h-auto p-0">
                          1098
                        </Button>
                      </li>
                      <li className="flex justify-between">
                        <span>Cyber Crime Helpline</span>
                        <Button variant="link" className="h-auto p-0">
                          1930
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
