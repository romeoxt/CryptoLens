import { Metadata } from 'next'
import { TransactionTracker } from '@/components/transaction-tracker'

export const metadata: Metadata = {
  title: 'CryptoLens | Transaction Tracker',
  description: 'Monitor and analyze real-time blockchain transactions across multiple chains with millisecond precision.',
}

export default function TransactionTrackerPage() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-[#f5f5eb]">
      <TransactionTracker />
    </div>
  )
}

