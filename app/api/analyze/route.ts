import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.BITGET_API_KEY;
    const secretKey = process.env.BITGET_SECRET_KEY;
    const passphrase = process.env.BITGET_PASSPHRASE;
  try {
    const response = await fetch(
      "https://api.bitget.com/api/v2/spot/market/tickers?symbol=BTCUSDT"
    );

    if (!response.ok) {
      throw new Error("Bitget API request failed");
    }

    const result = await response.json();

    const ticker = result?.data?.[0];

    if (!ticker) {
      throw new Error("Ticker data unavailable");
    }

    const lastPrice = Number(ticker.lastPr);
    const change24h = Number(ticker.changeUtc24h);

    const bullish = change24h > 0;

    return NextResponse.json({
      success: true,

      market: {
        symbol: "BTCUSDT",
        price: lastPrice,
        change24h,
      },

      signal: {
        trend: bullish
          ? "BULLISH"
          : "BEARISH",

        confidence: bullish
          ? 78
          : 62,

        advice: bullish
          ? "Momentum remains positive. Consider waiting for pullbacks."
          : "Market pressure increasing. Risk-off approach recommended.",
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch market data",
      },
      {
        status: 500,
      }
    );
  }
}