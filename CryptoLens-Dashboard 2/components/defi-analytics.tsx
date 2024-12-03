'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface DeFiAnalyticsProps {
  address: string
  network: string
}

export function DeFiAnalytics({ address, network }: DeFiAnalyticsProps) {
  const data = [
    { name: 'Uniswap', value: 4000 },
    { name: 'Aave', value: 3000 },
    { name: 'Compound', value: 2000 },
    { name: 'Curve', value: 2780 },
    { name: 'Balancer', value: 1890 },
  ]

  return (
    <Card className="bg-[#111111] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white">DeFi Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: 'none' }} />
            <Bar dataKey="value" fill="#4A90E2" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

