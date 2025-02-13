import * as React from "react";
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";

const AboutUsPage = () => {

  const cards = [
    {
      title: "News centre",
      description: "Latest updates and announcements from Immigration New Zealand"
    },
    {
      title: "Contact us",
      description: "Get in touch with Immigration New Zealand for support and inquiries"
    },
    {
      title: "How we work",
      description: "Learn about our processes, methods and service standards"
    },
    {
      title: "Resource library",
      description: "Access guides, forms, and immigration resources"
    },
    {
      title: "What we do",
      description: "Explore our services and core functions in immigration"
    },
    {
      title: "Policy and law",
      description: "Information about immigration legislation and policies"
    },
    {
      title: "Research and statistics",
      description: "Immigration data, trends and research findings"
    },
    {
      title: "Site information",
      description: "Website help and technical information"
    },
    {
      title: "Our online systems",
      description: "Access our digital services and online tools"
    }
  ];

  return (
    <div className="min-h-screen relative">
   
    {/* Company Information Section - Full Width */}
    <div className="relative w-full">
      <div className="bg-white/95 py-16">
         {/* Banner Image Container */}
         <div className="relative h-96 w-full">
        {/* Background Image */}
        <img 
          src="https://img.freepik.com/free-vector/abstract-banner-with-world-map_1048-12232.jpg?t=st=1739357743~exp=1739361343~hmac=3618fa5a336485a04e676f45a6087abfc8b8d0ef8bb76864bbf8f3beb99ad19b&w=1380"
          alt="Immigration Banner" 
          className="w-full h-full object-cover opacity-50"
        />
         {/* Frosted Overlay */}
      <div className="absolute inset-0 bg-gray-100/30 backdrop-blur-s"></div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
      {/* Text Container */}
<div className="absolute inset-0 max-w-6xl mx-auto px-6 flex items-center justify-end">
  <h1 className="text-6xl font-bold text-white w-1/2 text-right">
    About The Immigration Company
  </h1>
</div>
</div>

        <div className="max-w-6xl mx-auto px-6 mt-12">
    
   
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  {/* Card 1: Immigration Simplified */}
  <div className="bg-[#1a2b4b]/5 p-6 rounded-lg">
    <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">
      Immigration Simplified
    </h3>
    <p className="leading-relaxed text-lg text-gray-700">
      At The Immigration Company, we simplify the difficult and time-consuming process of immigration to Canada. With over 13 years of recognition as the top immigration consultant in Edmonton, we've successfully processed hundreds of candidate profiles.
    </p>
  </div>

  {/* Card 2: Trusted Expertise */}
  <div className="bg-[#1a2b4b]/5 p-6 rounded-lg">
    <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">
      Trusted Expertise
    </h3>
    <p className="leading-relaxed text-gray-700">
      Our team comprises certified professionals with extensive knowledge of Canadian immigration laws and policies. We stay updated with the latest regulations to provide our clients with the best guidance for a seamless immigration journey.
    </p>
  </div>

  {/* Card 3: Our Services */}
  <div className="bg-[#1a2b4b]/5 p-6 rounded-lg">
    <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">
      Our Services
    </h3>
    <div className="grid grid-cols-2 gap-6 text-gray-700">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
          <span>Canada PR</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
          <span>Express Entry</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
          <span>Citizenship</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
          <span>Job Placement</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
          <span>Work Permit Visa</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
          <span>PNP & Super Visa</span>
        </div>
      </div>
    </div>
  </div>

  {/* Card 4: Leadership Excellence */}
  <div className="bg-[#1a2b4b]/5 p-6 rounded-lg">
    <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">
      Leadership Excellence
    </h3>
    <p className="leading-relaxed text-gray-700">
      President Raj Bhinder, an Honors Immigration Practitioner Program graduate from Seneca College in Ontario and a member of CAPIC and CICC, provides personalized guidance on all aspects of immigration.
    </p>
  </div>
</div>


          {/* Commitment Section with Image */}
<div className="bg-[#1a2b4b] text-white p-8 rounded-lg mt-12">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left side - Image */}
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <img 
          src="https://th.bing.com/th/id/OIP._SA2gmOS6ol21qyHvFjvHwHaFM?w=780&h=547&rs=1&pid=ImgDetMain"
          alt="Immigration Consulting Team"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side - Content */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">
          Our Commitment to Your Success
        </h3>
        
        <div className="space-y-4">
          <p className="leading-relaxed">
            We will be with you at every step, ensuring accuracy and consistency throughout your application process. Our team keeps you informed and updated on your application status, providing peace of mind during this important journey.
          </p>
          
          <div className="space-y-3">
            <h4 className="text-lg font-medium text-gray-200">Why Choose Us:</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>Personalized immigration strategies tailored to your unique situation</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>Regular updates and transparent communication throughout the process</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>Expert guidance from licensed immigration consultants</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>Comprehensive document review and preparation assistance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>        
<div className="bg-[#1a2b4b] text-white p-8 rounded-lg mt-12">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Our Commitment
                </h3>
                <p className="leading-relaxed">
                  We will be with you at every step, ensuring accuracy and consistency throughout your application process. Our team keeps you informed and updated on your application status, providing peace of mind during this important journey.
                </p>
                <button className="mt-6 bg-white text-[#1a2b4b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                
                >
                  
                  Contact Us Today
                </button>
              </div>
            </div>  
        </div>
      </div>
    </div>
  

    {/* Cards Section - Now at the bottom */}
    <div className="relative w-full bg-[#1a2b4b] py-16">
       {/* Background Image */}
    <div 
      className="absolute inset-0 h-[800px]"
      style={{
        backgroundImage: `url(https://www.telegraph.co.uk/content/dam/Travel/2019/May/solo-travel-iStock-904084674.jpg?imwidth=1400)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />

      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Quick Links</h2>
        
        <div className="grid grid-cols-3 gap-px border border-white/10 divide-white/10">

          {cards.map((card, index) => (
            <Card 
              key={index}
              className="group relative aspect-square rounded-none border-0 shadow-none bg-white/70 hover:bg-[#1a2b4b]/95 transition-colors duration-300"
            >
              <CardHeader className="relative h-full flex items-start p-3">
              <CardTitle className="text-base text-gray-800 transition-opacity duration-300 group-hover:opacity-0 text-center font-semibold">
  {card.title}
</CardTitle>

              </CardHeader>
              <CardContent className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs px-3">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>

  </div>
  
  );
};

export default AboutUsPage;