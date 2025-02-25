import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import SubscribeBanner from '../../assets/SubscribeBanner.png';

const SubscribeToNewsletter = () => {
  return (
    <div className="relative w-full md:w-[85%] lg:w-[75%] xl:w-[65%] mx-auto p-4 sm:p-6 rounded-lg bg-white shadow-md flex flex-col md:flex-row justify-center items-center mt-10 sm:mt-16 md:mt-20 mb-16 sm:mb-24 md:mb-32">
      <div className="w-full md:w-2/5 mb-6 md:mb-0">
        <Image
          src={SubscribeBanner}
          alt="subscribe now"
          height={400}
          width={400}
          className="w-full h-auto rounded-lg hover:shadow-lg transition-shadow duration-300"
        />
      </div>

      <div className="flex flex-col gap-4 md:gap-6 lg:gap-10 justify-center w-full md:w-3/5 md:pl-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark">
            Subscribe to the free newsletter!
          </h1>
          <p className="text-gray text-xs sm:text-sm mt-2 font-semibold">Be the first to get all immigration and visa related news and offers!</p>
        </div>
        
        <div className="w-full py-2 md:py-4">
          <Input
            placeholder="Enter your email"
            className="w-full px-3 py-4 sm:px-4 sm:py-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 sm:mb-4"
          />
          <Button className="w-full py-3 sm:py-6 bg-secondary text-base sm:text-lg font-semibold text-white rounded-lg hover:bg-secondary/90 transition-all">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeToNewsletter;