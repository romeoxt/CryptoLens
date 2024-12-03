'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface AddressData {
  address: string
  balance: string
  totalReceived: string
  totalSent: string
  transactionCount: number
  riskScore: number
}

interface Transaction {
  hash: string
  from: string
  to: string
  amount: string
  token: string
  timestamp: string
}

interface BalanceHistory {
  date: string
  balance: number
}

interface AddressAnalysisProps {
  address: string
  network: string
}

export function AddressAnalysis({ address, network }: AddressAnalysisProps) {
  const [addressData, setAddressData] = useState<AddressData | null>(null)
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([])
  const [balanceHistory, setBalanceHistory] = useState<BalanceHistory[]>([])

  useEffect(() => {
    // In a real application, these would be API calls
    const fetchAddressData = () => {
      setAddressData({
        address: address,
        balance: '10.5 ETH',
        totalReceived: '100.0 ETH',
        totalSent: '89.5 ETH',
        transactionCount: 150,
        riskScore: 25,
      })
    }

    const fetchRecentTransactions = () => {
      setRecentTransactions([
        { hash: '0x1234...5678', from: '0xabcd...ef01', to: address, amount: '1.5', token: 'ETH', timestamp: '2023-06-01 14:30:00' },
        { hash: '0x9876...5432', from: address, to: '0x2345...6789', amount: '100', token: 'USDT', timestamp: '2023-06-02 09:15:00' },
        { hash: '0xabcd...ef01', from: '0x3456...7890', to: address, amount: '50', token: 'UNI', timestamp: '2023-06-03 11:45:00' },
      ])
    }

    const fetchBalanceHistory = () => {
      setBalanceHistory([
        { date: '2023-05-01', balance: 5.2 },
        { date: '2023-05-15', balance: 7.8 },
        { date: '2023-06-01', balance: 10.5 },
      ])
    }

    fetchAddressData()
    fetchRecentTransactions()
    fetchBalanceHistory()
  }, [address, network])

  if (!addressData) {
    return <div className="text-white">Loading...</div>
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-white">Address Analysis</h2>
      
      <Card className="bg-[#111111] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Address Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-white">
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-sm break-all">{addressData.address}</p>
            </div>
            <div>
              <p className="font-semibold">Balance:</p>
              <p>{addressData.balance}</p>
            </div>
            <div>
              <p className="font-semibold">Total Received:</p>
              <p>{addressData.totalReceived}</p>
            </div>
            <div>
              <p className="font-semibold">Total Sent:</p>
              <p>{addressData.totalSent}</p>
            </div>
            <div>
              <p className="font-semibold">Transaction Count:</p>
              <p>{addressData.transactionCount}</p>
            </div>
            <div>
              <p className="font-semibold">Risk Score:</p>
              <p>{addressData.riskScore}/100</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#111111] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Balance History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={balanceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333333" />
                <XAxis dataKey="date" stroke="#999999" />
                <YAxis stroke="#999999" />
                <Tooltip contentStyle={{ backgroundColor: '#111111', border: 'none' }} />
                <Line type="monotone" dataKey="balance" stroke="#4A90E2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#111111] border-[#333333]">
        <CardHeader>
          <CardTitle className="text-white">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-700">
                <TableHead className="text-gray-400">Transaction Hash</TableHead>
                <TableHead className="text-gray-400">From</TableHead>
                <TableHead className="text-gray-400">To</TableHead>
                <TableHead className="text-gray-400">Amount</TableHead>
                <TableHead className="text-gray-400">Token</TableHead>
                <TableHead className="text-gray-400">Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((tx) => (
                <TableRow key={tx.hash} className="border-b border-gray-700">
                  <TableCell className="text-white">{tx.hash}</TableCell>
                  <TableCell className="text-white">{tx.from}</TableCell>
                  <TableCell className="text-white">{tx.to}</TableCell>
                  <TableCell className="text-white">{tx.amount}</TableCell>
                  <TableCell className="text-white">{tx.token}</TableCell>
                  <TableCell className="text-white">{tx.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

