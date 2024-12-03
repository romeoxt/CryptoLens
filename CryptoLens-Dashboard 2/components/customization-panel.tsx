import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function CustomizationPanel() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Dashboard Customization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="transaction-alerts">Transaction Alerts</Label>
            <Switch id="transaction-alerts" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="risk-threshold">Risk Threshold</Label>
            <Slider
              id="risk-threshold"
              min={0}
              max={100}
              step={1}
              defaultValue={[50]}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <Switch id="dark-mode" />
          </div>
          {/* Add more customization options here */}
        </div>
      </CardContent>
    </Card>
  )
}

