"use client"
import { useRouter } from "next/navigation";
import React from "react";

const PaymentPanel = ({ paymentComplete, children }) => {
    const router = useRouter();
  return !paymentComplete ? (
    <div className="w-full text-dark mt-6 max-w-sm p-4 bg-white border border-dark rounded-lg shadow-lg sm:p-8">
      <h5 className="mb-4 text-xl font-medium">Payment Details</h5>
      <div className="flex items-baseline">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">100</span>
        <span className="text-xl font-bold tracking-tight">+tax</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <svg
            className="shrink-0 w-4 h-4 text-blue-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ml-3">
            One-on-One consultation
          </span>
        </li>
        <li className="flex justify-between">
          <div className="flex">
            <span className="text-gray-600">Pay To:&nbsp;</span>
            <span className="text-gray-800 font-semibold">
              The Immigration Company
            </span>
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex">
            <span className="text-gray-600">Service:&nbsp;&nbsp;</span>
            <span className="text-gray-800 font-semibold">
              60 Min Consultation
            </span>
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex">
            <span className="text-gray-600">Amount:&nbsp;&nbsp;</span>
            <span className="text-gray-800 font-semibold">$105.00</span>
          </div>
        </li>
        <li className="flex justify-between">
          <div className="flex">
            <span className="text-gray-600">Currency:&nbsp;&nbsp;</span>
            <span className="text-gray-800 font-semibold">CAD</span>
          </div>
        </li>
      </ul>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        onClick={() => router.push("https://buy.stripe.com/00g7vjgm2ctV33W7ss")}
      >
        Pay Now
      </button>
    </div>
  ) : (
    <>{children}</>
  );
};

export default PaymentPanel;
