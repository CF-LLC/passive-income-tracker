import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Currency } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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

export function convertToUSD(amount: number, currency: Currency, bitcoinPrice: number): number {
  switch (currency) {
    case "usd":
      return amount
    case "btc":
      return amount * bitcoinPrice
    default:
      return amount
  }
}

export function convertBetweenCurrencies(
  amount: number,
  fromCurrency: Currency,
  toCurrency: Currency,
  bitcoinPrice: number,
): number {
  // First convert to USD
  const usdAmount = convertToUSD(amount, fromCurrency, bitcoinPrice)

  // Then convert from USD to target currency
  switch (toCurrency) {
    case "usd":
      return usdAmount
    case "btc":
      return usdAmount / bitcoinPrice
    default:
      return amount
  }
}
