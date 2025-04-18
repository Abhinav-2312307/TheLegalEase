"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { FileUp, FileText, Download, Copy, Check } from "lucide-react"

export default function DocumentSimplifier() {
  const [activeTab, setActiveTab] = useState("upload")
  const [isProcessing, setIsProcessing] = useState(false)
  const [hasResult, setHasResult] = useState(false)
  const [textInput, setTextInput] = useState("")
  const [copied, setCopied] = useState(false)

  const handleProcessDocument = () => {
    setIsProcessing(true)
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false)
      setHasResult(true)
    }, 2000)
  }

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Document Simplifier</h1>
          <p className="text-muted-foreground">
            Upload or paste a legal document to get a simplified explanation in plain language.
          </p>
        </div>

        <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="upload">Upload Document</TabsTrigger>
            <TabsTrigger value="paste">Paste Text</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload a Legal Document</CardTitle>
                <CardDescription>We support PDF, DOCX, and TXT files up to 10MB.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-12 text-center">
                  <div className="flex justify-center mb-4">
                    <FileUp className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="mb-4 text-muted-foreground">Drag and drop your file here, or click to browse</p>
                  <Button>Select File</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={isProcessing} onClick={handleProcessDocument}>
                  {isProcessing ? "Processing..." : "Simplify Document"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="paste">
            <Card>
              <CardHeader>
                <CardTitle>Paste Document Text</CardTitle>
                <CardDescription>Paste the text from your legal document below.</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste your legal text here..."
                  className="min-h-[200px]"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={isProcessing || !textInput.trim()} onClick={handleProcessDocument}>
                  {isProcessing ? "Processing..." : "Simplify Text"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {hasResult && (
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Simplified Document
                </CardTitle>
                <CardDescription>Here's your document explained in simple terms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Rental Agreement Summary</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">What this document is:</h4>
                      <p>
                        This is a rental agreement between you (the tenant) and the property owner (the landlord) for an
                        apartment at 123 Main Street, Mumbai.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold">Key terms:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>You will pay ₹25,000 per month in rent</li>
                        <li>The lease is for 11 months starting June 1, 2023</li>
                        <li>You paid a security deposit of ₹50,000</li>
                        <li>You must give 2 months notice before moving out</li>
                        <li>The landlord must give 3 months notice before asking you to leave</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold">Your rights:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>The landlord must make all structural repairs</li>
                        <li>The landlord cannot enter without 24 hours notice except in emergencies</li>
                        <li>You can have up to 2 guests stay for a maximum of 7 days</li>
                        <li>You can request essential repairs and the landlord must respond within 7 days</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold">Your responsibilities:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Pay rent by the 5th of each month</li>
                        <li>Pay for utilities (electricity, water, internet)</li>
                        <li>Keep the apartment clean and in good condition</li>
                        <li>Do not make structural changes without permission</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800">Important to know:</h4>
                      <p className="text-yellow-800">
                        This agreement has an automatic renewal clause. If you don't give notice, it will automatically
                        renew for another 11 months.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy to Clipboard
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </main>
  )
}
