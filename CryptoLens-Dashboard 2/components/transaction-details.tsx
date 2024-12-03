import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface Transaction {
  hash: string
  from: string
  to: string
  amount: string
  token: string
  usdEquivalent: string
  timestamp: string
  gasUsed: string
  gasPrice: string
  nonce: number
}

interface TransactionDetailsProps {
  transaction: Transaction
  onClose: () => void
}

export function TransactionDetails({ transaction, onClose }: TransactionDetailsProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-[#111111] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Transaction Details</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Transaction Hash</h3>
              <p className="text-sm break-all">{transaction.hash}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">From</h3>
              <p className="text-sm break-all">{transaction.from}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">To</h3>
              <p className="text-sm break-all">{transaction.to}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Amount</h3>
              <p className="text-sm">{transaction.amount} {transaction.token}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">USD Equivalent</h3>
              <p className="text-sm">{transaction.usdEquivalent}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Timestamp</h3>
              <p className="text-sm">{transaction.timestamp}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Gas Used</h3>
              <p className="text-sm">{transaction.gasUsed}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Gas Price</h3>
              <p className="text-sm">{transaction.gasPrice}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Nonce</h3>
              <p className="text-sm">{transaction.nonce}</p>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

