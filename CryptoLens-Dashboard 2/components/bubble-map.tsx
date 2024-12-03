interface BubbleMapProps {
  address: string
  network: string
}

export function BubbleMap({ address, network }: BubbleMapProps) {
  return (
    <div>
      <p>Bubble map visualization for {address} on {network} network would be displayed here.</p>
      {/* Implement actual bubble map visualization */}
    </div>
  )
}

