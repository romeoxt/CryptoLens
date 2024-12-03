import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export function IntegrationDemo() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Integration Capabilities</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="api" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="export">Data Export</TabsTrigger>
          </TabsList>
          <TabsContent value="api">
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-semibold">RESTful API</h3>
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>
                  GET /api/v1/transactions?address=0x1234...&start_date=2023-01-01
                </code>
              </pre>
              <Button>View API Documentation</Button>
            </div>
          </TabsContent>
          <TabsContent value="webhooks">
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-semibold">Real-time Webhooks</h3>
              <p>Set up webhooks to receive real-time notifications for:</p>
              <ul className="list-disc list-inside">
                <li>New transactions</li>
                <li>Risk score changes</li>
                <li>Compliance alerts</li>
              </ul>
              <Button>Configure Webhooks</Button>
            </div>
          </TabsContent>
          <TabsContent value="export">
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-semibold">Flexible Data Export</h3>
              <p>Export your data in multiple formats:</p>
              <ul className="list-disc list-inside">
                <li>CSV</li>
                <li>JSON</li>
                <li>Excel</li>
              </ul>
              <Button>Start Export</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

