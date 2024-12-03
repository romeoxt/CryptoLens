'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface NFTMarketAnalysisProps {
  address: string
  network: string
}

export function NFTMarketAnalysis({ address, network }: NFTMarketAnalysisProps) {
  const data = [
    { name: 'Jan', sales: 4000, volume: 2400 },
    { name: 'Feb', sales: 3000, volume: 1398 },
    { name: 'Mar', sales: 2000, volume: 9800 },
    { name: 'Apr', sales: 2780, volume: 3908 },
    { name: 'May', sales: 1890, volume: 4800 },
    { name: 'Jun', sales: 2390, volume: 3800 },
  ]

  return (
    <Card className="bg-[#111111] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white">NFT Market Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: 'none' }} />
            <Line type="monotone" dataKey="sales" stroke="#4A90E2" />
            <Line type="monotone" dataKey="volume" stroke="#82CA9D" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

