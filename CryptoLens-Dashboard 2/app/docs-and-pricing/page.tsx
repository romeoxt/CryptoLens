import { Metadata } from 'next'
import { DocsAndPricing } from '@/components/docs-and-pricing'

export const metadata: Metadata = {
  title: 'CryptoLens | Documentation & Pricing',
  description: 'Learn about CryptoLens features and choose the right plan for your needs.',
}

export default function DocsAndPricingPage() {
  return (
    <div className="min-h-screen bg-[#0e1015] text-[#f5f5eb]">
      <DocsAndPricing />
    </div>
  )
}

