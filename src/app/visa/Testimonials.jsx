import React from 'react';

const StarIcon = () => (
  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#E5C541"/>
  </svg>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Luis August',
      text: 'Integer platea pellentesque phasellus risus convallis sapien vel.',
      rating: 5
    },
    {
      name: 'Dennis Samuel',
      text: 'Integer platea pellentesque phasellus risus convallis sapien vel.',
      rating: 5
    },
    {
      name: 'Bobbie Claire',
      text: 'Integer platea pellentesque phasellus risus convallis sapien vel.',
      rating: 5
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6">
            <div className="flex items-center gap-4 mb-4 pl-0">
              <img
                src="/api/placeholder/60/60"
                alt="Profile"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div className="flex gap-1 items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-[#5C6C7B]">{testimonial.text}</p>
            <p className="text-blue-600 font-[600]">{testimonial.name}</p>
          </div>
        ))}
      </div>
    
     
    </div>
  );
};

export default TestimonialsSection;