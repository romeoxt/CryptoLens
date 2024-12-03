import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const pricingData = [
  { plan: 'Starter', price: '$99/mo', transactions: '10,000', users: '2', support: 'Email' },
  { plan: 'Pro', price: '$299/mo', transactions: '100,000', users: '5', support: 'Priority' },
  { plan: 'Enterprise', price: 'Custom', transactions: 'Unlimited', users: 'Unlimited', support: '24/7 Dedicated' },
]

export function PricingTable() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Flexible Pricing Options</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Plan</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Transactions/mo</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Support</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pricingData.map((plan) => (
              <TableRow key={plan.plan}>
                <TableCell className="font-medium">{plan.plan}</TableCell>
                <TableCell>{plan.price}</TableCell>
                <TableCell>{plan.transactions}</TableCell>
                <TableCell>{plan.users}</TableCell>
                <TableCell>{plan.support}</TableCell>
                <TableCell>
                  <Button variant="outline">Choose Plan</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

