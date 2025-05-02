"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import type { IncomeStream, TimePeriod, Currency } from "@/lib/types"

interface IncomeStreamFormProps {
  onAddStream: (stream: IncomeStream) => void
}

export default function IncomeStreamForm({ onAddStream }: IncomeStreamFormProps) {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("monthly")
  const [currency, setCurrency] = useState<Currency>("usd")
  const [useSatsForInput, setUseSatsForInput] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !amount) return

    let finalAmount = Number.parseFloat(amount)

    // If user entered sats, convert to BTC for storage
    if (currency === "btc" && useSatsForInput) {
      finalAmount = finalAmount / 100000000
    }

    onAddStream({
      id: "",
      name,
      amount: finalAmount,
      timePeriod,
      currency,
      createdAt: new Date().toISOString(),
    })

    // Reset form
    setName("")
    setAmount("")
    setTimePeriod("monthly")
    setCurrency("usd")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Income Source Name</Label>
        <Input
          id="name"
          placeholder="e.g., Rental Property, Dividends, YouTube"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              step="any"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <RadioGroup
              id="currency"
              value={currency}
              onValueChange={(value) => setCurrency(value as Currency)}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="usd" id="usd" />
                <Label htmlFor="usd">USD</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="btc" id="btc" />
                <Label htmlFor="btc">BTC</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {currency === "btc" && (
          <div className="flex items-center space-x-2">
            <Switch id="sats-toggle" checked={useSatsForInput} onCheckedChange={setUseSatsForInput} />
            <Label htmlFor="sats-toggle">Enter amount in satoshis (sats)</Label>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="timePeriod">Time Period</Label>
        <Select value={timePeriod} onValueChange={(value) => setTimePeriod(value as TimePeriod)}>
          <SelectTrigger id="timePeriod">
            <SelectValue placeholder="Select time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">
        Add Income Stream
      </Button>
    </form>
  )
}
