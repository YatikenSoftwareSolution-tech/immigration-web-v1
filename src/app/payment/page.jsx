"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Payment = () => {
  return (
    <div className="mt-6 px-4 sm:px-10 py-8 sm:py-16 flex justify-center items-center bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="p-8 flex-1 text-dark">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Thanks for completing the form!
          </h2>
          <p className="mt-2 mb-6 ml-2 text-lg text-gray-600">
            Here’s a summary of your session and how to complete payment.
          </p>
          <h3 className="mb-4 text-2xl ml-2 font-semibold text-gray-800">
            Payment Details
          </h3>
          <div className="flex ml-2 items-baseline space-x-1">
            <span className="text-4xl font-medium">$</span>
            <span className="text-6xl font-extrabold">100</span>
            <span className="text-xl font-extrabold">+tax</span>
          </div>
          <ul className="space-y-4 ml-2 my-8">
            <li className="flex items-center">
              <svg
                className="shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="ml-3 text-base text-gray-700">
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
          <Link
            href="https://buy.stripe.com/00g7vjgm2ctV33W7ss"
            target="_blank"
            className="inline-block mt-6 w-full md:w-auto"
          >
            <span className="block w-full md:inline-block text-center px-8 py-4 font-medium rounded-lg shadow-lg bg-secondary/90 hover:bg-secondary text-white transition-transform transform hover:-translate-y-1">
              Pay Now &amp; Schedule  
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
