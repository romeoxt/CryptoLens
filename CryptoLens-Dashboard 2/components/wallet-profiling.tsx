'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function WalletProfiling() {
  const [address, setAddress] = useState('')
  const [profile, setProfile] = useState(null)

  const handleProfileSearch = async () => {
    // In a real implementation, this would call an API to fetch wallet profile data
    const response = await fetch(`/api/wallet-profile?address=${address}`)
    const data = await response.json()
    setProfile(data)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Profiling</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input 
            placeholder="Enter wallet address" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button onClick={handleProfileSearch}>Analyze</Button>
        </div>
        {profile && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Wallet Profile</h3>
            <p>Risk Score: {profile.riskScore}</p>
            <p>Total Transactions: {profile.totalTransactions}</p>
            <p>First Activity: {profile.firstActivity}</p>
            <p>Last Activity: {profile.lastActivity}</p>
            <h4 className="text-md font-semibold mt-4 mb-2">Behavior Analysis</h4>
            <ul>
              {profile.behaviorTags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

