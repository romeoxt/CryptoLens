'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const initialWidgets = [
  { id: 'widget1', title: 'Transaction Volume', content: 'Transaction volume chart' },
  { id: 'widget2', title: 'Top Tokens', content: 'List of top tokens' },
  { id: 'widget3', title: 'Recent Transactions', content: 'Recent transactions list' },
]

export function CustomizableDashboard() {
  const [widgets, setWidgets] = useState(initialWidgets)

  const onDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(widgets)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setWidgets(items)
  }

  return (
    <Card className="bg-[#111111] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white">Customizable Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="widgets">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                {widgets.map((widget, index) => (
                  <Draggable key={widget.id} draggableId={widget.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-[#1a1a1a] p-4 rounded"
                      >
                        <h3 className="text-white font-bold mb-2">{widget.title}</h3>
                        <p className="text-gray-300">{widget.content}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Button className="mt-4 bg-[#4A90E2] text-white hover:bg-[#357ABD]">Add Widget</Button>
      </CardContent>
    </Card>
  )
}

