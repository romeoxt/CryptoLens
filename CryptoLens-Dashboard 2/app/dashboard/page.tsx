import { Metadata } from 'next'
import { DashboardContent } from '@/components/dashboard-content'

export const metadata: Metadata = {
  title: 'CryptoLens | Dashboard',
  description: 'Analyze blockchain transactions and visualize fund flows across multiple networks.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-[#f5f5eb]">
      <DashboardContent />
    </div>
  )
}

