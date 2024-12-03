import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TopAddresses() {
  return (
    <div className="space-y-8">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{String.fromCharCode(65 + i)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">0x{Math.random().toString(16).substr(2, 40)}</p>
            <p className="text-sm text-muted-foreground">
              Risk Score: {(Math.random() * 100).toFixed(2)}
            </p>
          </div>
          <div className="ml-auto font-medium">
            ${(Math.random() * 1000000).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}

