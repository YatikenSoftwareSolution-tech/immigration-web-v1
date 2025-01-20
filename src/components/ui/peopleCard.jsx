import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Partner1 from '../../assets/Partner1.png';
import FacebookLogo from '../../assets/facebookLogo.jpg';
import LinkedinLogo from '../../assets/linkedinLogo.jpg';
import InstagramLogo from '../../assets/instagramLogo.jpg';

const PeopleCard = ({ people }) => {
  const imageUrl = people?.image || Partner1;

  return (
<Card className="relative border-transparent cursor-pointer group bg-white shadow-lg hover:border-b-4 hover:border-red-500 hover:border-t-0 hover:border-l-0 hover:border-r-0">
<CardHeader className="relative mb-4">
        <Image
          src={imageUrl}
          alt={people?.name || 'Partner Image'}
          layout="responsive"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-5 hidden group-hover:flex flex-col gap-4 p-2">
          {people?.social1 && (
            <a href={people.social1} className="rounded-full shadow-md">
              <Image className='rounded-full' src={FacebookLogo} alt="Facebook" width={40} height={30} />
            </a>
          )}
          {people?.social2 && (
            <a href={people.social2} className="rounded-full shadow-md">
              <Image className='rounded-full' src={InstagramLogo} alt="Facebook" width={40} height={30} />
            </a>
          )}
          {people?.social3 && (
            <a href={people.social3} className="rounded-full shadow-md">
              <Image className='rounded-full' src={LinkedinLogo} alt="Facebook" width={40} height={30} />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle>{people?.name|| 'Ram Chandel'}</CardTitle>
        <CardDescription>{people?.designation || 'Full Stack Developer'}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PeopleCard;
