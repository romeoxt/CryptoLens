import { Metadata } from 'next'
import { DashboardHeader } from '@/components/dashboard-header'
import { DashboardShell } from '@/components/dashboard-shell'
import { DashboardContent } from '@/components/dashboard-content'

export const metadata: Metadata = {
  title: 'CryptoLens Dashboard',
  description: 'Enterprise-grade blockchain forensics solution',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <DashboardShell>
        <DashboardContent />
      </DashboardShell>
    </div>
  )
}

