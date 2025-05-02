"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import type { IncomeStream, TimePeriod } from "@/lib/types"
import { convertToUSD } from "@/lib/utils"

interface IncomeSummaryProps {
  incomeStreams: IncomeStream[]
  bitcoinPrice: number
  displayBtcAsSats: boolean
  onToggleBtcDisplay: (value: boolean) => void
}

export default function IncomeSummary({
  incomeStreams,
  bitcoinPrice,
  displayBtcAsSats,
  onToggleBtcDisplay,
}: IncomeSummaryProps) {
  // Calculate totals by time period and currency
  const totals = {
    daily: { usd: 0, btc: 0 },
    weekly: { usd: 0, btc: 0 },
    monthly: { usd: 0, btc: 0 },
    yearly: { usd: 0, btc: 0 },
  }

  // Calculate USD equivalent totals
  const usdTotals = {
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  }

  // Calculate totals for each time period and currency
  incomeStreams.forEach((stream) => {
    totals[stream.timePeriod][stream.currency] += stream.amount
    usdTotals[stream.timePeriod] += convertToUSD(stream.amount, stream.currency, bitcoinPrice)
  })

  // Convert between time periods for the grand total
  const grandTotalUSD = usdTotals.daily * 365 + usdTotals.weekly * 52 + usdTotals.monthly * 12 + usdTotals.yearly

  // Calculate BTC equivalent of grand total
  const grandTotalBTC = grandTotalUSD / bitcoinPrice

  const timePeriodsToShow: TimePeriod[] = ["daily", "weekly", "monthly", "yearly"]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch id="sats-display-toggle" checked={displayBtcAsSats} onCheckedChange={onToggleBtcDisplay} />
          <Label htmlFor="sats-display-toggle">Display Bitcoin as satoshis (sats)</Label>
        </div>
      </div>

      <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
        <h3 className="mb-2 font-medium">Total Annual Income</h3>
        <div className="grid gap-1">
          <div className="text-2xl font-bold">
            ${grandTotalUSD.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>
          <div className="text-sm text-muted-foreground">
            ≈{" "}
            {displayBtcAsSats
              ? `${(grandTotalBTC * 100000000).toLocaleString(undefined, { maximumFractionDigits: 0 })} sats`
              : `${grandTotalBTC.toFixed(8)} BTC`}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {timePeriodsToShow.map((period) => (
          <Card key={period}>
            <CardContent className="p-4">
              <h3 className="mb-2 text-sm font-medium capitalize">{period}</h3>
              <div className="space-y-1">
                <div className="font-medium">
                  ${usdTotals[period].toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                {totals[period].btc > 0 && (
                  <div className="text-xs text-muted-foreground">
                    {displayBtcAsSats
                      ? `${(totals[period].btc * 100000000).toLocaleString(undefined, { maximumFractionDigits: 0 })} sats`
                      : `${totals[period].btc.toFixed(8)} BTC`}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-md bg-muted p-3 text-center text-sm">
        <p>Bitcoin Price: ${bitcoinPrice.toLocaleString()}</p>
        <p className="text-xs text-muted-foreground">
          1 BTC = 100,000,000 sats | 1 sat = ${(bitcoinPrice / 100000000).toFixed(8)} USD
        </p>
      </div>
    </div>
  )
}
