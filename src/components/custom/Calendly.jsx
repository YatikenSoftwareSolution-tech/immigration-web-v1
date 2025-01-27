"use client"

import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div className=" mt-14 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-xl font-semibold text-center">Book a mentorship session with our expert @ <span className='text-secondary'> The Immigration Company</span></h1>
        <InlineWidget url="https://calendly.com/ram8176970175" className="h-full border" />
      </div>
    </div>
  );
}

export default Calendly;
