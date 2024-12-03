'use client'

import { useState } from 'react'
import { Navigation } from './navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Check } from 'lucide-react'

const plans = {
  individual: [
    {
      name: 'Basic',
      price: { monthly: 99, yearly: 79 },
      badge: '',
      description: 'Essential tools for blockchain analysis',
      features: [
        'Multi-chain transaction tracking',
        'Basic address analysis',
        'Transaction history visualization',
        'Standard API access (1000 calls/day)',
        '5 team members',
        'Community support'
      ]
    },
    {
      name: 'Pro',
      price: { monthly: 299, yearly: 239 },
      badge: 'POPULAR',
      description: 'Advanced features for professional investigators',
      features: [
        'All Basic features',
        'Advanced pattern recognition',
        'Off-chain transaction tracking',
        'Customizable risk scoring',
        'Priority API access (10,000 calls/day)',
        '15 team members',
        'Priority support'
      ]
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      badge: 'FLEXIBLE',
      description: 'Full-suite solution for large organizations',
      features: [
        'All Pro features',
        'AI-powered anomaly detection',
        'Custom integration services',
        'Dedicated account manager',
        'Unlimited API access',
        'Unlimited team members',
        '24/7 premium support'
      ]
    }
  ],
  team: [
    {
      name: 'Team',
      price: { monthly: 499, yearly: 399 },
      badge: '',
      description: 'For small investigation teams',
      features: [
        'All Pro features',
        'Team collaboration tools',
        'Shared dashboards',
        'Role-based access control',
        'Advanced reporting',
        'Up to 25 team members',
        'Priority team support'
      ]
    },
    {
      name: 'Organization',
      price: { monthly: 999, yearly: 799 },
      badge: 'ADVANCED',
      description: 'For large investigation units',
      features: [
        'All Team features',
        'Organization-wide analytics',
        'Custom training sessions',
        'Dedicated success manager',
        'Custom API limits',
        'Up to 100 team members',
        '24/7 premium support'
      ]
    },
    {
      name: 'Government',
      price: { monthly: 'Custom', yearly: 'Custom' },
      badge: 'SECURE',
      description: 'For government agencies',
      features: [
        'All Organization features',
        'On-premise deployment',
        'Custom security features',
        'Compliance certification',
        'Unlimited API access',
        'Unlimited team members',
        'Dedicated support team'
      ]
    }
  ]
}

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [planType, setPlanType] = useState<'individual' | 'team'>('individual')

  return (
    <div className="min-h-screen bg-[#0e1015]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white">
            Find the right plan
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-400 font-light">
            for your needs
          </h2>
        </div>

        <div className="flex flex-col items-center mb-12">
          <Tabs defaultValue="individual" className="w-full max-w-3xl" onValueChange={(value) => setPlanType(value as 'individual' | 'team')}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-[400px] grid-cols-2">
                <TabsTrigger value="individual">INDIVIDUAL PLANS</TabsTrigger>
                <TabsTrigger value="team">TEAM PLANS</TabsTrigger>
              </TabsList>
            </div>

            <div className="flex justify-center items-center gap-4 mb-12">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <Switch
                checked={billingCycle === 'yearly'}
                onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
              />
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-blue-400">(Save up to 20%)</span>
              </span>
            </div>

            <TabsContent value="individual" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-3">
                {plans.individual.map((plan) => (
                  <Card key={plan.name} className="relative bg-[#1a1a1a] border-gray-800">
                    {plan.badge && (
                      <Badge className="absolute top-4 right-4" variant="secondary">
                        {plan.badge}
                      </Badge>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        {typeof plan.price[billingCycle] === 'number' ? (
                          <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-white">${plan.price[billingCycle]}</span>
                            <span className="text-gray-400 ml-2">/mo</span>
                          </div>
                        ) : (
                          <div className="text-4xl font-bold text-white">Contact us</div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant={plan.badge === 'POPULAR' ? 'default' : 'outline'}>
                        {plan.price[billingCycle] === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="team" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-3">
                {plans.team.map((plan) => (
                  <Card key={plan.name} className="relative bg-[#1a1a1a] border-gray-800">
                    {plan.badge && (
                      <Badge className="absolute top-4 right-4" variant="secondary">
                        {plan.badge}
                      </Badge>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        {typeof plan.price[billingCycle] === 'number' ? (
                          <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-white">${plan.price[billingCycle]}</span>
                            <span className="text-gray-400 ml-2">/mo</span>
                          </div>
                        ) : (
                          <div className="text-4xl font-bold text-white">Contact us</div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant={plan.badge === 'ADVANCED' ? 'default' : 'outline'}>
                        {plan.price[billingCycle] === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Need something different?</h3>
          <p className="text-gray-400 mb-8">
            Contact our sales team for custom pricing options. We can tailor a plan specifically for your organization's needs.
          </p>
          <Button size="lg" variant="outline">Contact Sales</Button>
        </div>
      </main>
    </div>
  )
}

