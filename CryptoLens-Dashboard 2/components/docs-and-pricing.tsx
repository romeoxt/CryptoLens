'use client'

import { useState } from 'react'
import { Navigation } from './navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Basic',
    price: '$99',
    description: 'Essential tools for blockchain analysis',
    features: [
      'Multi-chain transaction tracking',
      'Basic address analysis',
      'Transaction history visualization',
      'Standard API access',
      '5 team members',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '$299',
    description: 'Advanced features for professional investigators',
    features: [
      'All Basic features',
      'Advanced pattern recognition',
      'Off-chain transaction tracking',
      'Customizable risk scoring',
      'Priority API access',
      '15 team members',
      'Phone & email support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-suite solution for large organizations',
    features: [
      'All Pro features',
      'AI-powered anomaly detection',
      'Custom integration services',
      'Dedicated account manager',
      'On-premise deployment option',
      'Unlimited team members',
      '24/7 premium support'
    ]
  }
]

export function DocsAndPricing() {
  const [activeTab, setActiveTab] = useState('documentation')

  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-5xl font-bold mb-8 text-center text-white">Documentation & Pricing</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>
          <TabsContent value="documentation">
            <Card>
              <CardHeader>
                <CardTitle>CryptoLens Documentation</CardTitle>
                <CardDescription>Learn how to use CryptoLens effectively</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <section>
                    <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
                    <p>Learn the basics of using CryptoLens for blockchain analysis.</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Setting up your account</li>
                      <li>Navigating the dashboard</li>
                      <li>Running your first analysis</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-2xl font-bold mb-2">Advanced Features</h2>
                    <p>Dive deep into CryptoLens' powerful analysis tools.</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Multi-chain transaction tracking</li>
                      <li>Pattern recognition algorithms</li>
                      <li>Off-chain transaction analysis</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-2xl font-bold mb-2">API Documentation</h2>
                    <p>Integrate CryptoLens into your own applications.</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Authentication</li>
                      <li>Endpoints overview</li>
                      <li>Rate limits and best practices</li>
                    </ul>
                  </section>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Full Documentation</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="pricing">
            <div className="grid gap-8 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <Card key={plan.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-4xl font-bold mb-4">{plan.price}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}

