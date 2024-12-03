import { Metadata } from 'next'
import { PricingPage } from '@/components/pricing-page'

export const metadata: Metadata = {
  title: 'CryptoLens | Pricing',
  description: 'Choose the right plan for your blockchain analysis needs',
}

export default function Pricing() {
  return <PricingPage />
}

