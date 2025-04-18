"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Copy, Check, FileText } from "lucide-react"

export default function DocumentGenerator() {
  const [documentType, setDocumentType] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [hasResult, setHasResult] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerateDocument = () => {
    setIsGenerating(true)
    // Simulate processing delay
    setTimeout(() => {
      setIsGenerating(false)
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
          <h1 className="text-3xl font-bold tracking-tight mb-2">Document Generator</h1>
          <p className="text-muted-foreground">Create legal documents tailored to your specific situation.</p>
        </div>

        <Tabs defaultValue="common">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="common">Common Documents</TabsTrigger>
            <TabsTrigger value="complaints">Complaints & Notices</TabsTrigger>
            <TabsTrigger value="agreements">Agreements</TabsTrigger>
          </TabsList>

          <TabsContent value="common">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Select Document Type</CardTitle>
                <CardDescription>Choose the type of document you need to generate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className={`h-auto py-6 justify-start flex-col items-start ${documentType === "police-complaint" ? "border-primary" : ""}`}
                    onClick={() => setDocumentType("police-complaint")}
                  >
                    <div className="font-bold mb-1">Police Complaint</div>
                    <div className="text-sm text-muted-foreground text-left">
                      File a complaint with the police about a crime or incident
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className={`h-auto py-6 justify-start flex-col items-start ${documentType === "legal-notice" ? "border-primary" : ""}`}
                    onClick={() => setDocumentType("legal-notice")}
                  >
                    <div className="font-bold mb-1">Legal Notice</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Send a formal notice before taking legal action
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className={`h-auto py-6 justify-start flex-col items-start ${documentType === "rti" ? "border-primary" : ""}`}
                    onClick={() => setDocumentType("rti")}
                  >
                    <div className="font-bold mb-1">RTI Application</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Request information from a public authority
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className={`h-auto py-6 justify-start flex-col items-start ${documentType === "affidavit" ? "border-primary" : ""}`}
                    onClick={() => setDocumentType("affidavit")}
                  >
                    <div className="font-bold mb-1">Affidavit</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Create a sworn statement for legal purposes
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {documentType === "police-complaint" && (
              <Card>
                <CardHeader>
                  <CardTitle>Police Complaint</CardTitle>
                  <CardDescription>Fill in the details to generate a police complaint</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Your Address</Label>
                      <Input id="address" placeholder="Enter your address" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" placeholder="Enter your email address" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="police-station">Police Station</Label>
                    <Input id="police-station" placeholder="Enter the police station name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="incident-date">Date of Incident</Label>
                    <Input id="incident-date" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="incident-location">Location of Incident</Label>
                    <Input id="incident-location" placeholder="Enter where the incident occurred" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="complaint-details">Complaint Details</Label>
                    <Textarea
                      id="complaint-details"
                      placeholder="Describe the incident in detail..."
                      className="min-h-[150px]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled={isGenerating} onClick={handleGenerateDocument}>
                    {isGenerating ? "Generating..." : "Generate Police Complaint"}
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="complaints">
            <Card>
              <CardHeader>
                <CardTitle>Complaints & Notices</CardTitle>
                <CardDescription>Generate formal complaints and legal notices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto py-6 justify-start flex-col items-start">
                    <div className="font-bold mb-1">Consumer Complaint</div>
                    <div className="text-sm text-muted-foreground text-left">
                      File a complaint against a business for defective products or services
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto py-6 justify-start flex-col items-start">
                    <div className="font-bold mb-1">Workplace Harassment Complaint</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Report harassment or discrimination at your workplace
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto py-6 justify-start flex-col items-start">
                    <div className="font-bold mb-1">Landlord Notice</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Send a formal notice to your landlord regarding repairs or issues
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto py-6 justify-start flex-col items-start">
                    <div className="font-bold mb-1">Cheque Bounce Notice</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Send a legal notice for a dishonored cheque
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agreements">
            <Card>
              <CardHeader>
                <CardTitle>Agreements & Contracts</CardTitle>
                <CardDescription>Generate legally sound agreements and contracts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto py-6 justify-start flex-col items-start">
                    <div className="font-bold mb-1">Rental Agreement</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Create a rental agreement between landlord and tenant
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto py-6 justify-start flex-col items-start">
                    <div className="font-bold mb-1">Employment Contract</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Draft an employment agreement with standard terms
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto py-6 justify-start flex-col items-start">
                    <div className="font-bold mb-1">Freelance Agreement</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Create a contract for freelance or consulting work
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto py-6 justify-start flex-col items-start">
                    <div className="font-bold mb-1">Non-Disclosure Agreement</div>
                    <div className="text-sm text-muted-foreground text-left">
                      Draft an NDA to protect confidential information
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {hasResult && (
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Generated Police Complaint
                </CardTitle>
                <CardDescription>Your document has been generated based on the information provided</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-6 font-serif">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold uppercase">POLICE COMPLAINT</h3>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">To,</p>
                    <p>The Station House Officer,</p>
                    <p>Police Station Name</p>
                    <p>City, State</p>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2">Subject: Complaint regarding theft of personal property</p>
                  </div>

                  <div className="mb-4">
                    <p>Respected Sir/Madam,</p>
                    <p className="mt-4">
                      I, [Your Name], resident of [Your Address], would like to report a theft that occurred on [Date of
                      Incident] at approximately [Time] at [Location of Incident].
                    </p>
                    <p className="mt-4">
                      On the aforementioned date and time, I was at [specific location details] when I discovered that
                      my [item(s) stolen] was/were missing. The approximate value of the stolen item(s) is ₹[value]. I
                      have reason to believe that the theft occurred when [brief description of circumstances].
                    </p>
                    <p className="mt-4">
                      [Additional details about the incident, any witnesses, or suspects if available]
                    </p>
                    <p className="mt-4">
                      I request you to register an FIR regarding this matter and take appropriate action as per the law.
                      I am ready to cooperate with the investigation and provide any additional information that may be
                      required.
                    </p>
                  </div>

                  <div className="mb-4">
                    <p>Yours faithfully,</p>
                    <p className="mt-4">[Your Name]</p>
                    <p>Contact: [Your Phone Number]</p>
                    <p>Email: [Your Email Address]</p>
                    <p>Date: [Current Date]</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download as PDF
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
