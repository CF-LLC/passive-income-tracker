export type TimePeriod = "daily" | "weekly" | "monthly" | "yearly"
export type Currency = "usd" | "btc"

export interface IncomeStream {
  id: string
  name: string
  amount: number
  timePeriod: TimePeriod
  currency: Currency
  createdAt: string
}
