'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle, CheckCircle } from 'lucide-react'

export function SmartContractAnalysis() {
  const [contractAddress, setContractAddress] = useState('')
  const [analysisResult, setAnalysisResult] = useState<null | {
    securityScore: number
    vulnerabilities: string[]
    recommendations: string[]
  }>(null)

  const handleAnalysis = () => {
    // In a real-world scenario, this would call an API to perform the analysis
    // For this example, we'll use mock data
    setAnalysisResult({
      securityScore: 85,
      vulnerabilities: [
        'Potential reentrancy vulnerability in withdraw function',
        'Unchecked external call return value'
      ],
      recommendations: [
        'Implement checks-effects-interactions pattern in withdraw function',
        'Add return value checks for all external calls',
        'Consider using OpenZeppelin\'s SafeMath library for arithmetic operations'
      ]
    })
  }

  return (
    <Card className="bg-[#111111] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white">Smart Contract Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            placeholder="Enter smart contract address"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            className="bg-[#222222] border-[#444444] text-white"
          />
          <Button onClick={handleAnalysis} className="bg-[#4A90E2] text-white hover:bg-[#357ABD]">
            Analyze
          </Button>
        </div>
        {analysisResult && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2 text-white">Analysis Result</h3>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#222222] flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-white">{analysisResult.securityScore}</span>
              </div>
              <span className="text-lg text-white">Security Score</span>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-white">Potential Vulnerabilities</h4>
              <ul className="list-disc list-inside">
                {analysisResult.vulnerabilities.map((vulnerability, index) => (
                  <li key={index} className="text-red-400 flex items-start">
                    <AlertCircle className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{vulnerability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-white">Recommendations</h4>
              <ul className="list-disc list-inside">
                {analysisResult.recommendations.map((recommendation, index) => (
                  <li key={index} className="text-green-400 flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

