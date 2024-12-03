interface TransactionHistoryProps {
  address: string
  network: string
}

export function TransactionHistory({ address, network }: TransactionHistoryProps) {
  return (
    <div>
      <p>Transaction history for {address} on {network} network would be displayed here.</p>
      {/* Implement actual transaction history component */}
    </div>
  )
}

