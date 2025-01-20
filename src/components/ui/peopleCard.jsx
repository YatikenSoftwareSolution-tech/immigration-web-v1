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

const PeopleCard = ({ people }) => {
  const imageUrl = people?.image || Partner1;

  return (
    <Card className="relative group">
      <CardHeader className="relative">
        <Image
          src={imageUrl}
          alt={people?.name || 'Partner Image'}
          layout="responsive"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 hidden group-hover:flex flex-col space-y-2 p-2">
          {people?.social1 && (
            <a href={people.social1} className="bg-white p-2 rounded-full shadow-md">
              <Image src="/icons/social1.svg" alt="Social 1" width={24} height={24} />
            </a>
          )}
          {people?.social2 && (
            <a href={people.social2} className="bg-white p-2 rounded-full shadow-md">
              <Image src="/icons/social2.svg" alt="Social 2" width={24} height={24} />
            </a>
          )}
          {people?.social3 && (
            <a href={people.social3} className="bg-white p-2 rounded-full shadow-md">
              <Image src="/icons/social3.svg" alt="Social 3" width={24} height={24} />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{people?.name|| 'Ram Chandel'}</CardTitle>
        <CardDescription>{people?.designation || 'Full Stack Developer'}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PeopleCard;
