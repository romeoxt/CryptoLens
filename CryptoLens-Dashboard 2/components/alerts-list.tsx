import { Badge } from "@/components/ui/badge"

export function AlertsList() {
  const alertTypes = ['High Risk Transaction', 'Unusual Activity', 'Large Transfer', 'New Address', 'Pattern Detected']
  return (
    <div className="space-y-8">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center">
          <Badge variant={i % 2 === 0 ? "destructive" : "default"}>
            {alertTypes[i]}
          </Badge>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Alert #{1000 + i}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(Date.now() - i * 3600000).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

