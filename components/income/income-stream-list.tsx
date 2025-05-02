"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import type { IncomeStream } from "@/lib/types"
import { formatCurrency, convertToUSD } from "@/lib/utils"

interface IncomeStreamListProps {
  incomeStreams: IncomeStream[]
  onDelete: (id: string) => void
  bitcoinPrice: number
  displayBtcAsSats: boolean
}

export default function IncomeStreamList({
  incomeStreams,
  onDelete,
  bitcoinPrice,
  displayBtcAsSats,
}: IncomeStreamListProps) {
  if (incomeStreams.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
        <p className="text-muted-foreground">No income streams for this time period</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {incomeStreams.map((stream) => (
        <Card key={stream.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-medium">{stream.name}</h3>
                <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                  <span>
                    {formatCurrency(stream.amount, stream.currency, displayBtcAsSats)} per {stream.timePeriod}
                  </span>
                  {stream.currency !== "usd" && (
                    <span className="text-green-600">
                      ≈ ${convertToUSD(stream.amount, stream.currency, bitcoinPrice).toFixed(2)} USD
                    </span>
                  )}
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => onDelete(stream.id)}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
