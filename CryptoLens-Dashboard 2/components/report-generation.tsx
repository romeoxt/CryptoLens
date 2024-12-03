'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface ReportGenerationProps {
  address: string
  network: string
}

export function ReportGeneration({ address, network }: ReportGenerationProps) {
  const [incidentType, setIncidentType] = useState('')
  const [incidentDate, setIncidentDate] = useState('')
  const [lossAmount, setLossAmount] = useState('')
  const [description, setDescription] = useState('')

  const handleGenerateReport = () => {
    // In a real application, this would generate a PDF or formatted report
    const reportData = {
      address,
      network,
      incidentType,
      incidentDate,
      lossAmount,
      description,
      // Add more data from the address analysis, transaction history, etc.
    }
    console.log('Generating report with data:', reportData)
    alert('Report generated successfully. In a real application, this would create a downloadable file.')
  }

  return (
    <Card className="bg-[#111111] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Generate Report for Authorities</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="incident-type" className="text-white">Incident Type</Label>
            <Select value={incidentType} onValueChange={setIncidentType}>
              <SelectTrigger id="incident-type" className="bg-[#222222] border-[#444444] text-white">
                <SelectValue placeholder="Select incident type" />
              </SelectTrigger>
              <SelectContent className="bg-[#222222] border-[#444444]">
                <SelectItem value="scam" className="text-white">Scam</SelectItem>
                <SelectItem value="theft" className="text-white">Theft</SelectItem>
                <SelectItem value="fraud" className="text-white">Fraud</SelectItem>
                <SelectItem value="other" className="text-white">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="incident-date" className="text-white">Incident Date</Label>
            <Input
              id="incident-date"
              type="date"
              value={incidentDate}
              onChange={(e) => setIncidentDate(e.target.value)}
              className="bg-[#222222] border-[#444444] text-white"
            />
          </div>
          <div>
            <Label htmlFor="loss-amount" className="text-white">Loss Amount</Label>
            <Input
              id="loss-amount"
              type="text"
              placeholder="Enter loss amount"
              value={lossAmount}
              onChange={(e) => setLossAmount(e.target.value)}
              className="bg-[#222222] border-[#444444] text-white"
            />
          </div>
          <div>
            <Label htmlFor="description" className="text-white">Incident Description</Label>
            <Textarea
              id="description"
              placeholder="Provide a detailed description of the incident"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-[#222222] border-[#444444] text-white h-32"
            />
          </div>
          <Button 
            type="button" 
            onClick={handleGenerateReport}
            className="bg-[#4A90E2] text-white hover:bg-[#357ABD]"
          >
            Generate Report
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

