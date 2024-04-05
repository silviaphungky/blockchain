'use client'

import { useEffect, useRef } from 'react'

// Define the type for the TradingView object
interface TradingViewType {
  widget: (options: any) => void
}

declare global {
  interface Window {
    TradingView: TradingViewType
  }
}

let tvScriptLoadingPromise: Promise<void> | null = null

declare const TradingView: any

export default function TradingViewWidget({ symbol }: { symbol: string }) {
  const onLoadScriptRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    onLoadScriptRef.current = createWidget

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script')
        script.id = 'tradingview-widget-loading-script'
        script.src = 'https://s3.tradingview.com/tv.js'
        script.type = 'text/javascript'
        script.onload = () => resolve() // Resolve with void

        document.head.appendChild(script)
      })
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    )

    return () => {
      onLoadScriptRef.current = null
    }

    function createWidget() {
      if (
        document.getElementById('tradingview_549e8') &&
        'TradingView' in window
      ) {
        new TradingView.widget({
          autosize: true,
          symbol: `COINBASE:${symbol}USD`,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'en',
          enable_publishing: false,
          allow_symbol_change: false,
          container_id: 'tradingview_549e8',
          hide_legend: true,
        })
      }
    }
  }, [symbol])

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: '25rem' }}
      data-testid="tradingViewContainer"
    >
      <div id="tradingview_549e8" style={{ height: '25rem' }} />
    </div>
  )
}
