'use client'

import { useState } from 'react'
import { Navigation } from './navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Transaction = {
  id: string
  from: string
  to: string
  amount: string
  timestamp: string
}

export function TransactionTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [address, setAddress] = useState('')

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would call an API to fetch transactions
    // For now, we'll just add a mock transaction
    const newTransaction: Transaction = {
      id: Math.random().toString(36).substr(2, 9),
      from: '0x' + Math.random().toString(36).substr(2, 40),
      to: address,
      amount: (Math.random() * 10).toFixed(4) + ' ETH',
      timestamp: new Date().toISOString(),
    }
    setTransactions(prev => [newTransaction, ...prev])
    setAddress('')
  }

  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Transaction Tracker</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Monitor Address</CardTitle>
              <CardDescription>Enter an Ethereum address to track its transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddressSubmit} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter Ethereum address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit">Track</Button>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Transaction Statistics</CardTitle>
              <CardDescription>Overview of tracked transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{transactions.length}</div>
              <div className="text-sm text-gray-400">Total Transactions</div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-medium">{tx.id}</TableCell>
                    <TableCell>{tx.from}</TableCell>
                    <TableCell>{tx.to}</TableCell>
                    <TableCell>{tx.amount}</TableCell>
                    <TableCell>{new Date(tx.timestamp).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </>
  )
}

