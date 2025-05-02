type TimePeriod = "seconds" | "daily" | "weekly" | "monthly" | "yearly"
type Currency = "usd" | "btc"

interface IncomeStream {
  id: string
  name: string
  amount: number
  timePeriod: TimePeriod
  currency: Currency
  createdAt: string
}

// Format currency for display
export function formatCurrency(amount: number, currency: Currency, displayBtcAsSats = false): string {
  switch (currency) {
    case "usd":
      return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    case "btc":
      if (displayBtcAsSats) {
        // Convert BTC to sats for display
        const sats = amount * 100000000
        return `${sats.toLocaleString(undefined, { maximumFractionDigits: 0 })} sats`
      } else {
        return `${amount.toLocaleString(undefined, { minimumFractionDigits: 8, maximumFractionDigits: 8 })} BTC`
      }
    default:
      return `${amount}`
  }
}

// Calculate income per second based on all income streams
export function calculatePerSecondIncome(incomeStreams: IncomeStream[], bitcoinPrice: number): number {
  // Calculate per-second income directly
  return incomeStreams.reduce((total, stream) => {
    let amountInUSD = stream.amount
    if (stream.currency === "btc") {
      amountInUSD *= bitcoinPrice
    }

    // Convert to per-second rate
    switch (stream.timePeriod) {
      case "seconds":
        return total + amountInUSD // Already per second
      case "daily":
        return total + amountInUSD / 86400 // Seconds in a day
      case "weekly":
        return total + amountInUSD / 604800 // Seconds in a week
      case "monthly":
        return total + amountInUSD / 2592000 // Seconds in a month (30 days)
      case "yearly":
        return total + amountInUSD / 31536000 // Seconds in a year
      default:
        return total
    }
  }, 0)
}
