'use client'

import { useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import * as d3 from 'd3'

export function CrossChainAnalysis({ address }) {
  const svgRef = useRef(null)

  useEffect(() => {
    if (!svgRef.current) return

    const width = 600
    const height = 400

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)

    // Dummy data for cross-chain analysis
    const data = {
      nodes: [
        { id: 'ETH', group: 1 },
        { id: 'BSC', group: 2 },
        { id: 'Polygon', group: 3 },
        { id: address, group: 0 },
      ],
      links: [
        { source: address, target: 'ETH', value: 5 },
        { source: address, target: 'BSC', value: 3 },
        { source: address, target: 'Polygon', value: 2 },
      ]
    }

    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id(d => d.id))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))

    const link = svg.append('g')
      .selectAll('line')
      .data(data.links)
      .join('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', d => Math.sqrt(d.value))

    const node = svg.append('g')
      .selectAll('circle')
      .data(data.nodes)
      .join('circle')
      .attr('r', 10)
      .attr('fill', d => d.group === 0 ? '#ff0000' : '#1f77b4')

    node.append('title')
      .text(d => d.id)

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
    })
  }, [address])

  return (
    <Card className="bg-[#111111] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white">Cross-Chain Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <svg ref={svgRef}></svg>
      </CardContent>
    </Card>
  )
}

