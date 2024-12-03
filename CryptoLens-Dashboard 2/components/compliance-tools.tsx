'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ComplianceToolsProps {
  address: string
  network: string
}

export function ComplianceTools({ address, network }: ComplianceToolsProps) {
  const [riskScore, setRiskScore] = useState<number | null>(null)

  const handleCheck = () => {
    // Simulating an API call to check compliance
    setTimeout(() => {
      setRiskScore(Math.floor(Math.random() * 100))
    }, 1000)
  }

  return (
    <Card className="bg-[#111111] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white">Compliance Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={address}
              readOnly
              className="bg-[#222222] border-[#444444] text-white"
            />
            <Button onClick={handleCheck} className="bg-[#4A90E2] text-white hover:bg-[#357ABD]">
              Check Compliance
            </Button>
          </div>
          {riskScore !== null && (
            <div className="flex items-center space-x-2">
              <span>Risk Score:</span>
              <Badge variant={riskScore > 70 ? "destructive" : riskScore > 30 ? "warning" : "success"}>
                {riskScore}
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

