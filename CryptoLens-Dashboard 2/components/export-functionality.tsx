import React from 'react'
import { Button } from "@/components/ui/button"
import { DownloadCloud } from 'lucide-react'

export function ExportFunctionality({ data, type }) {
  const handleExport = (format) => {
    let exportData
    let fileName

    switch (format) {
      case 'csv':
        exportData = convertToCSV(data)
        fileName = `${type}_export.csv`
        break
      case 'json':
        exportData = JSON.stringify(data, null, 2)
        fileName = `${type}_export.json`
        break
      default:
        console.error('Unsupported export format')
        return
    }

    const blob = new Blob([exportData], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = fileName
    link.href = url
    link.click()
  }

  const convertToCSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray
    let str = `${Object.keys(array[0]).join(",")}\r\n`

    for (let i = 0; i < array.length; i++) {
      let line = ''
      for (let index in array[i]) {
        if (line !== '') line += ','
        line += array[i][index]
      }
      str += line + '\r\n'
    }
    return str
  }

  return (
    <div className="flex space-x-2">
      <Button onClick={() => handleExport('csv')} className="bg-[#4A90E2] text-white hover:bg-[#357ABD]">
        <DownloadCloud className="mr-2 h-4 w-4" /> Export CSV
      </Button>
      <Button onClick={() => handleExport('json')} className="bg-[#4A90E2] text-white hover:bg-[#357ABD]">
        <DownloadCloud className="mr-2 h-4 w-4" /> Export JSON
      </Button>
    </div>
  )
}

