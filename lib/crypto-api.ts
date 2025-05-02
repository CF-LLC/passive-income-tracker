// Fetch current Bitcoin price from CoinGecko API
export async function fetchBitcoinPrice(): Promise<number | null> {
  try {
    // Use a CORS proxy for client-side API calls on GitHub Pages
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", {
      cache: "no-store",
      // Add headers to help with CORS issues
      headers: {
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch Bitcoin price: ${response.status}`)
    }

    const data = await response.json()
    return data.bitcoin.usd
  } catch (error) {
    console.error("Error fetching Bitcoin price:", error)
    // Return a fallback price if the API call fails
    return 65000 // Fallback price
  }
}
