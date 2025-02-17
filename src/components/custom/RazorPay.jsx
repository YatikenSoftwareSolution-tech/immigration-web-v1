import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const RazorPay = () => {
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onError={() => console.error('Failed to load Razorpay script')}
      />
      <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Amount to add (₹)
            </label>
            <Input
              id="amount"
              type="number"
              min="1"
              step="1000"
              className="w-full"
            />
          </div>
          <Button
              type="button"
              className="w-full text-lg py-6"
            >
              Add ₹{amount.toFixed(2)}
            </Button>
      </>


  )
}

export default RazorPay
