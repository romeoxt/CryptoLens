import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface OffChainTransaction {
  id: string
  amount: string
  timestamp: string
  destination: string
}

interface OffChainTransactionsProps {
  address: string
  network: string
}

export function OffChainTransactions({ address, network }: OffChainTransactionsProps) {
  // This is mock data. In a real application, you would fetch this data based on the address and network.
  const mockOffChainTransactions: OffChainTransaction[] = [
    {
      id: 'OC001',
      amount: '5.0 ETH',
      timestamp: '2023-06-05 10:30:00',
      destination: 'Binance',
    },
    {
      id: 'OC002',
      amount: '10000 USDT',
      timestamp: '2023-06-06 14:45:00',
      destination: 'Coinbase',
    },
    {
      id: 'OC003',
      amount: '2.5 ETH',
      timestamp: '2023-06-07 09:15:00',
      destination: 'Unknown Exchange',
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Off-Chain Transactions</h2>
      <p className="mb-6 text-[#999999]">Showing off-chain movements for address: {address || 'Not specified'} on {network} network</p>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#333333]">
            <TableHead className="text-[#4A90E2]">Transaction ID</TableHead>
            <TableHead className="text-[#4A90E2]">Amount</TableHead>
            <TableHead className="text-[#4A90E2]">Timestamp</TableHead>
            <TableHead className="text-[#4A90E2]">Destination</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockOffChainTransactions.map((tx) => (
            <TableRow key={tx.id} className="border-b border-[#333333]">
              <TableCell className="text-white">{tx.id}</TableCell>
              <TableCell className="text-white">{tx.amount}</TableCell>
              <TableCell className="text-white">{tx.timestamp}</TableCell>
              <TableCell className="text-white">{tx.destination}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

