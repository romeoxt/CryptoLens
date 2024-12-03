import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Overview } from '@/components/overview'
import { RecentTransactions } from '@/components/recent-transactions'
import { TopAddresses } from '@/components/top-addresses'
import { AlertsList } from '@/components/alerts-list'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Overview />
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentTransactions />
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Top Addresses</CardTitle>
        </CardHeader>
        <CardContent>
          <TopAddresses />
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <AlertsList />
        </CardContent>
      </Card>
    </div>
  )
}

