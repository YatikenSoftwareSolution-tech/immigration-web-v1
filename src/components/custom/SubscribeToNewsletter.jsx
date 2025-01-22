import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import SubscribeNowBanner from '../../assets/SubscribeNowBanner.png';

const SubscribeToNewsletter = () => {
  return (
    <div className="w-[75%] mx-auto rounded-lg shadow-xl relative mt-[-8%] mb-[-8%] z-10 bg-white py-10 px-10 flex justify-between items-center transition-transform transform hover:scale-105">
      <div className="flex flex-col gap-8 justify-center w-[65%]">
        <h1 className="text-3xl text-dark">Subscribe to the free newsletter to receive the latest immigration related news & offers!</h1>
        <div className="flex gap-6 ">
          <Input 
          placeholder="Enter your email"
          className="flex px-4 py-8 border border-gray rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <Button className="px-8 py-8 bg-secondary text-2xl text-white rounded-r-lg hover:bg-blue-700 transition-all">Subscribe</Button>
        </div>
      </div>
      <div>
        <Image
          src={SubscribeNowBanner}
          alt="subscribe now"
          width={400}
          className="rounded-lg hover:shadow-lg transition-shadow duration-300"
        />
      </div>
    </div>
  );
};

export default SubscribeToNewsletter;
