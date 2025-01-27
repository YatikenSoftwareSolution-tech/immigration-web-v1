import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import SubscribeBanner from '../../assets/SubscribeBanner.png';

const SubscribeToNewsletter = () => {
  return (
    <div className="absolute w-[75%] mx-auto p-6 rounded-lg bg-white bottom-0 left-0 right-0 mb-[-10%] flex justify-center items-center z-[20]">
      <div>
        <Image
          src={SubscribeBanner}
          alt="subscribe now"
          height={400}
          className="rounded-lg hover:shadow-lg transition-shadow duration-300"
        />
      </div>

      <div className="flex flex-col gap-10 justify-center w-[65%]">
        <h1 className="text-4xl  font-semibold text-dark mb-2">
          Subscribe to the free newsletter!
        <p className="text-gray text-sm mt-2 font-semibold">Be the first to get all immigration and visa related news and offers!</p>
        </h1>
        <div className="py-4">
          <Input
            placeholder="Enter your email"
            className="px-4 py-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <Button className="w-full py-6 bg-secondary text-lg font-semibold text-white rounded-lg hover:bg-secondary/90 transition-all">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeToNewsletter;
