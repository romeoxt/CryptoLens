'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bell } from 'lucide-react'

export function RealTimeAlerts() {
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    // In a real implementation, this would connect to a websocket or polling mechanism
    const fetchAlerts = async () => {
      // Simulated API call
      const response = await fetch('/api/alerts')
      const data = await response.json()
      setAlerts(data)
    }

    fetchAlerts()
    const interval = setInterval(fetchAlerts, 30000) // Poll every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="mr-2" />
          Real-time Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <p>No active alerts</p>
        ) : (
          <ul className="space-y-2">
            {alerts.map((alert, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{alert.message}</span>
                <Badge variant={alert.severity}>{alert.severity}</Badge>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

