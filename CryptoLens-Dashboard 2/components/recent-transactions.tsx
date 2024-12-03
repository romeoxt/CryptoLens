import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Transaction #{1000 + i}</p>
            <p className="text-sm text-muted-foreground">
              {(Math.random() * 10).toFixed(4)} ETH
            </p>
          </div>
          <div className="ml-auto font-medium">
            {(Math.random() > 0.5 ? '+' : '-')}${(Math.random() * 1000).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}

