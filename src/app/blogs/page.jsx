import React from "react";
import Image from "next/image";
import "./page.css";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import BlogImage from "../../assets/blogimage.svg";
import EmailLady from "../../assets/EmailLady.svg"
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown,BookUser,CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
const posts = [
  {
    title: "Blog Title",
    image: BlogImage,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra ... read more",

    url: "/blog/post-1",
    author: "Daniel Dignan",
    date: "JULY 8, 2024",
  },
  {
    title: "Blog Title",
    image: BlogImage,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra ... read more",
    url: "/blog/post-2",
    author: "Daniel Dignan",
    date: "JULY 8, 2024",
  },
  {
    title: "Blog Title",
    image: BlogImage,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra ... read more",
    url: "/blog/post-3",
    author: "Daniel Dignan",
    date: "JULY 8, 2024",
  },
  {
    title: "Blog Title",
    image: BlogImage,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra ... read more",
    url: "/blog/post-4",
    author: "Daniel Dignan",
    date: "JULY 8, 2024",
  },
];

const Page = () => {
  return (
    <div>
      <header>
        {/* Header content here */}
      </header>

      <section id="about-landing">
        <div className="background-container">
          <div className="blog-heading">
            <h1>BLOG</h1>
          </div>
        </div>
      </section>

      
      <section id="blog-section" className="flex w-full mt-[10px] mb-[50px] ml-[20px] mb-[-20px]">
  <div className="w-[70%] pr-8 ml-[2px]">
    <div className="grid grid-cols-2 gap-[5px] mb-[50px]">
      {posts.slice(0, 4).map((post, index) => (
       <Card
       key={index}
       className="custom-card no-border-radius border-none h-[500px] w-[450px] hover:shadow-[0_10px_5px_rgba(255,0,0,0.3)] transition-shadow duration-300 ease-in-out overflow-hidden mb-[50px]"
     >
          <CardHeader className="p-0 h-[250px]">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={450}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </CardHeader>
          <CardContent className="h-[250px] flex flex-col justify-between">
          <div>
  <div className="px-4 py-2 bg-gray-100 text-gray-500 text-sm flex items-center justify-between">
    <div className="flex items-center">
      <BookUser className="mr-2" size={16} />
      <span>{post.author}</span>
    </div>
    <div className="flex items-center">
      <CalendarDays className="mr-2" size={16} />
      <span>{post.date}</span>
    </div>
  </div>
 

              <p className="text-gray-700 mb-2 font-semibold text-[25px]">{post.title}</p>
              <p className="text-gray-700 mb-4 text-[20px]">{post.excerpt}</p>
            </div>
            <a href={post.url} className="text-red-500 hover:text-red-700">
              Read more
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
  
  <div className="w-[30%] pt-[50px] ml-[-20px]">
  <div className="right-content-search p-4 max-w-sm mx-auto border rounded-[10px] shadow-sm mb-[20px] pb-8">
    <div className="flex items-left justify-left text-left text-[#51565A] text-[25px] mb-2 ">
  
      <p>Search</p>
    </div>
    <div className="relative w-full">
  <input
    type="text"
    placeholder="Search..."
    className="h-[50px] w-full px-4 py-2 pr-[80px] border border-gray rounded-[10px] focus:outline-none focus:ring-red-500 focus:border-red-500"
  />
<Button
  className="absolute top-0 right-0 h-full w-[100px] px-4 text-white bg-red-500 rounded-r-[10px] rounded-l-[10px] shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90 flex items-center justify-center"
>
  <Search className="w-6 h-6" />
</Button> 
  </div>
 
  </div>

  <div className="right-content-categories p-4 max-w-sm mx-auto border rounded-[10px] shadow-sm mb-[50px] text-[#4D5115]">
  <div className="flex items-left justify-left text-left text-[#51565A] text-[25px] mb-2 ">
  
  <p>Browse Categories</p>
</div>
  <div className="category-item flex justify-between items-center py-3 border-b border-gray">
 
  <div className="category-name text-gray-700">Category name place holder</div>
  <span className="category-toggle text-gray-500 cursor-pointer">
    <ChevronDown   size={24} color="#4D5115" />
  </span>
</div>
<div className="category-item flex justify-between items-center py-3 border-b border-gray">
  <div className="category-name text-gray-700">Vorem ipsum dolor</div>
  <span className="category-toggle text-gray-500 cursor-pointer">
    <ChevronDown size={24} />
  </span>
</div>
<div className="category-item flex justify-between items-center py-3 border-b border-gray">
  <div className="category-name text-gray-700">Vorem ipsum dolor sit</div>
  <span className="category-toggle text-gray-500 cursor-pointer">
    <ChevronDown size={24} />
  </span>
</div>
<div className="category-item flex justify-between items-center py-3 border-b border-gray">
  <div className="category-name text-gray-700">Rorem ipsum dolor sit amet</div>
  <span className="category-toggle text-gray-500 cursor-pointer">
    <ChevronDown size={24} />
  </span>
</div>
<div className="category-item flex justify-between items-center py-3 border-b border-gray">
  <div className="category-name text-gray-700">Corem ipsum</div>
  <span className="category-toggle text-gray-500 cursor-pointer">
    <ChevronDown size={24} />
  </span>
</div>
<div className="category-item flex justify-between items-center py-3">
  <div className="category-name text-gray-700">Gorem ipsum dolor sit</div>
  <span className="category-toggle text-gray-500 cursor-pointer">
    <ChevronDown size={24} />
  </span>
</div>
</div>
  <div className="right-content-tags p-4 max-w-sm mx-auto border rounded-[10px] shadow-sm mb-[50px]">
  <div className="flex items-left justify-left text-left text-[#51565A] text-[25px] mb-2 ">
  
  <p>Browse Categories</p>
</div>

  <div className="category-list flex flex-wrap gap-2">
    <div className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">Category name</div>
    <div className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">Category name</div>
    <div className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">Category name</div>
  </div>
</div>
  </div>
  

</section>
<section className="w-full">


  {/* Pagination centered below split content */}

  
   {/* Hover effects on buttons not working as expected */}
  <div className="flex justify-center items-center gap-2 mb-12"> 
  <button className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
      <ChevronLeft size={24}  /> 
    </button>
    
    <div className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white"> 1</div>
    
     
    
    <button className="category-item bg-gray-200 border-2 border-gray-300 rounded-full px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-red-300 hover:border-red-500 hover:text-white">
      2
    </button>
    
    <button className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
      ...
    </button>
    
    <button className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
      4
    </button>
    
    <button className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white"><ChevronRight size={24}  />
   
    
    </button>
  </div>
</section>


     <section 
      id="immigration" 
      className="pt-24 px-10 mx-auto relative w-full h-screen flex flex-col justify-center items-center mt-[-10%]"
    >
      <div className="flex w-full max-w-6xl justify-center items-center space-x-[-4vh]"> 
        <Image 
          src={EmailLady} 
          alt="Banner" 
          className="max-w-[50%] h-auto object-contain" 
        />
        <div className="max-w-[50%] text-left mt-[90px]"> 
          <h1 className="text-4xl md:text-5xl font-bold">
            Subscribe to our Newsletter!
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray mb-4">
            Be the first one to get exclusive offers < br/>
            and the latest news
          </p>
          <input
                  type="email"
                  className="h-[50px] w-[395px] mt-[20px] w-[150px] md:w-[395px] md:h-[50px] border-gray border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                  placeholder="Enter Your Email Address"
                />
          <Button className="h-[50px] w-[395px] mt-[20px] w-[150px] md:w-[395px] md:h-[50px] text-white bg-secondary p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90">
                Subscribe Now
              </Button>
        </div>
      </div>
    </section>
      
      
    </div>
  );
};

export default Page;
