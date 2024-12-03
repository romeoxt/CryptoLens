'use client'

import { useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import * as d3 from 'd3'

interface FundFlowVisualizationProps {
  address: string
  network: string
}

export function FundFlowVisualization({ address, network }: FundFlowVisualizationProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = 400
    const height = 300

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)

    svg.selectAll("*").remove()

    const data = {
      nodes: [
        { id: 'main', label: address.slice(0, 6) + '...' + address.slice(-4), value: 100 },
        { id: 'exchange1', label: 'Exchange 1', value: 50 },
        { id: 'exchange2', label: 'Exchange 2', value: 30 },
        { id: 'wallet1', label: 'Wallet 1', value: 20 },
        { id: 'wallet2', label: 'Wallet 2', value: 10 },
      ],
      links: [
        { source: 'main', target: 'exchange1', value: 50 },
        { source: 'main', target: 'exchange2', value: 30 },
        { source: 'main', target: 'wallet1', value: 20 },
        { source: 'exchange1', target: 'wallet2', value: 10 },
      ]
    }

    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id((d: any) => d.id))
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('center', d3.forceCenter(width / 2, height / 2))

    const link = svg.append('g')
      .selectAll('line')
      .data(data.links)
      .join('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', (d: any) => Math.sqrt(d.value))

    const node = svg.append('g')
      .selectAll('circle')
      .data(data.nodes)
      .join('circle')
      .attr('r', (d: any) => Math.sqrt(d.value) * 2)
      .attr('fill', (d: any) => d.id === 'main' ? '#4A90E2' : '#82CA9D')

    node.append('title')
      .text((d: any) => d.label)

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y)

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y)
    })
  }, [address, network])

  return (
    <Card className="bg-[#111111] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white">Fund Flow Visualization</CardTitle>
      </CardHeader>
      <CardContent>
        <svg ref={svgRef}></svg>
      </CardContent>
    </Card>
  )
}

