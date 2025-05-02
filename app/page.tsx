import PassiveIncomeTracker from "@/components/passive-income-tracker"
import BeamsBackground from "@/components/kokonutui/beams-background"

export default function Home() {
  return (
    <BeamsBackground intensity="strong">
      <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-start pt-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Passive Income Tracker</h1>
        <PassiveIncomeTracker />
      </div>
    </BeamsBackground>
  )
}
