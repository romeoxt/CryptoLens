import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AdvancedFiltering({ onFilter }) {
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    amountMin: '',
    amountMax: '',
    transactionType: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFilters(prev => ({ ...prev, transactionType: value }))
  }

  const handleFilter = () => {
    onFilter(filters)
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Input
          type="date"
          name="dateFrom"
          value={filters.dateFrom}
          onChange={handleChange}
          placeholder="From Date"
          className="bg-[#222222] border-[#444444] text-white"
        />
        <Input
          type="date"
          name="dateTo"
          value={filters.dateTo}
          onChange={handleChange}
          placeholder="To Date"
          className="bg-[#222222] border-[#444444] text-white"
        />
      </div>
      <div className="flex space-x-4">
        <Input
          type="number"
          name="amountMin"
          value={filters.amountMin}
          onChange={handleChange}
          placeholder="Min Amount"
          className="bg-[#222222] border-[#444444] text-white"
        />
        <Input
          type="number"
          name="amountMax"
          value={filters.amountMax}
          onChange={handleChange}
          placeholder="Max Amount"
          className="bg-[#222222] border-[#444444] text-white"
        />
      </div>
      <Select value={filters.transactionType} onValueChange={handleSelectChange}>
        <SelectTrigger className="bg-[#222222] border-[#444444] text-white">
          <SelectValue placeholder="Transaction Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="incoming">Incoming</SelectItem>
          <SelectItem value="outgoing">Outgoing</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleFilter} className="w-full bg-[#4A90E2] text-white hover:bg-[#357ABD]">
        Apply Filters
      </Button>
    </div>
  )
}

