import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';

const SubscribeToNewsletter = () => {
  return (
    <div className="w-[80%] mx-auto border relative mt-[-8%] mb-[-8%] z-10 bg-white py-20 px-6 md:px-20 flex justify-between">
      <div className='flex flex-col gap-2'>
        <h1>Subscribe to the free newsletter to receive latest news & offers! </h1>
        <div className='flex ' >
          <Input/>
          <Button>Subscribe</Button>
        </div>
      </div>
      <div>
        <Image/>
      </div>
    </div>
  );
}

export default SubscribeToNewsletter;
