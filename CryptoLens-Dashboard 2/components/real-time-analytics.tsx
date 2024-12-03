import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function getRandomTransaction() {
  const addresses = ['0x1234...', '0x5678...', '0x9abc...', '0xdef0...']
  const amounts = [0.1, 1.5, 5, 10, 50]
  return {
    from: addresses[Math.floor(Math.random() * addresses.length)],
    to: addresses[Math.floor(Math.random() * addresses.length)],
    amount: amounts[Math.floor(Math.random() * amounts.length)],
    timestamp: new Date().toISOString(),
  }
}

export function RealTimeAnalytics() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions(prev => [getRandomTransaction(), ...prev.slice(0, 4)])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Real-Time Transaction Feed
          <Badge variant="secondary" className="animate-pulse">Live</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {transactions.map((tx, index) => (
            <li key={index} className="bg-secondary p-2 rounded-md">
              <div className="flex justify-between">
                <span>{tx.from} → {tx.to}</span>
                <span>{tx.amount} ETH</span>
              </div>
              <div className="text-sm text-muted-foreground">{new Date(tx.timestamp).toLocaleTimeString()}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

