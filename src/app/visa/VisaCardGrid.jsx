import React from 'react';
import { ArrowRight, GraduationCap, Users, FileText, Briefcase, PlaneTakeoff, Plane } from 'lucide-react';
import Card1 from "../../assets/Card1.svg";
import Card2 from "../../assets/Card2.svg";
import Card3 from "../../assets/Card3.svg";
import Card4 from "../../assets/Card4.svg";
import Card5 from "../../assets/Card5.svg";
import Card6 from "../../assets/Card6.svg";
import Image from 'next/image';

const VisaCardGrid = () => {
  const services = [
    {
     
      image: Card1,
      icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: 'Student Visa',
    },
    {
    
      
      image: Card2,
      icon: <Users className="w-8 h-8 text-red-600" />,
      textColor: "text-red-600",
      title: 'Student Visa',
    },
    {

 
      image: Card3,
      icon: <FileText className="w-8 h-8 text-red-600" />,
      textColor: "text-red-600",
      title: 'Student Visa',
    },
    {
   
  
      image: Card4,
      icon: <Briefcase className="w-8 h-8 text-red-600" />,
      textColor: "text-red-600",
      title: 'Student Visa',
    },
    {
 

      image: Card5,
      icon: <PlaneTakeoff className="w-8 h-8 text-red-600" />,
      textColor: "text-red-600",
      title: 'Student Visa',
    },
    {
  
      
      image: Card6,
      icon: <Plane className="w-8 h-8 text-red-600" />,
      textColor: "text-red-600",
      title: 'Student Visa',
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <div key={index} className="relative group overflow-hidden w-full aspect-square mt-10">
          <div className="relative w-full h-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index < 3}
              
            />
          </div>
          
          {/* Overlay */}
          <div className={`absolute inset-0 ${service.bgColor || 'bg-black/40'} p-6 flex flex-col`}>
            <div className="flex justify-between items-start">
              {service.icon}
              <h3 className={`text-xl font-semibold ${service.textColor || 'text-white'}`}>
                {service.title}
              </h3>
            </div>
            
            <p className={`mt-auto ${service.textColor || 'text-white'} text-sm leading-relaxed`}>
              {service.description}
            </p>
            
            <div className={`mt-4 flex items-center ${service.textColor || 'text-white'} group-hover:translate-x-2 transition-transform`}>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default VisaCardGrid;