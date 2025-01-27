"use client"
import SubscribeToNewsletter from "@/components/custom/SubscribeToNewsletter";
import Image from "next/image";
import React from "react";
import Partner1 from "../../assets/Partner1.png";
import Partner2 from "../../assets/Partner2.png";
import Partner3 from "../../assets/Partner3.png";
import Partner4 from "../../assets/Partner4.png";
import Partner5 from "../../assets/Partner5.png";
import Partner6 from "../../assets/Partner6.png";
import Partner7 from "../../assets/Partner7.png";
import ChatBot from '@/components/custom/ChatBot';
import "./page.css";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import BlogImage from "../../assets/blogimage.svg";
import EmailLady from "../../assets/EmailLady.svg";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Search,
  ChevronDown,
  BookUser,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PartnersList from "@/components/custom/PartnersList";

const posts = [
  {
    title: "Blog Title",
    image: BlogImage,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",

    url: "/blog/post-1",
    author: "Daniel Dignan",
    date: "JULY 8, 2024",
  },
  {
    title: "Blog Title",
    image: BlogImage,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
    url: "/blog/post-2",
    author: "Daniel Dignan",
    date: "JULY 8, 2024",
  },
  {
    title: "Blog Title",
    image: BlogImage,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
    url: "/blog/post-3",
    author: "Daniel Dignan",
    date: "JULY 8, 2024",
  },
  {
    title: "Blog Title",
    image: BlogImage,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.",
    url: "/blog/post-4",
    author: "Daniel Dignan",
    date: "JULY 8, 2024",
  },
];

const page = () => {
  return (
    <div>
      <section id="about-landing">
        <div className="background-container">
          <div className="blog-heading">
            <h1 className="absolute top-[20%] text-6xl font-semibold left-[17%] text-white ">BLOGS</h1>
          </div>
        </div>
      </section>

      <section
        id="blog-section"
        className="flex w-full px-16 py-8 mt-[2%] mb-[50px] ml-[20px] mb-[-20px]"
      >
        <div className="w-[70%] pr-8 ml-[2px]">
          <div className="flex flex-wrap gap-[2%] justify-around item-center">
            {posts.slice(0, 4).map((post, index) => (
              <Card
                key={index}
                className="w-[40%] rounded-lg border-none hover:shadow-secondary transition-shadow duration-300 ease-in-out overflow-hidden mb-[50px]"
              >
                <CardHeader className="">
                  <div className="">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={450}
                      height={350}
                      className="rounded-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="px-4 flex flex-col justify-between">
                  <div>
                    <div className="mt-2 py-2 bg-gray-300 text-gray-500 text-sm flex items-center justify-between">
                      <div className="flex items-center">
                        <BookUser className="mr-2 text-tertiary" size={20} />
                        <span className="text-tertiary text-xs font-bold">{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="mr-2 text-tertiary" size={20} />
                        <span className="text-tertiary text-xs font-bold">{post.date}</span>
                      </div>
                    </div>

                    <h2 className="text-dark mb-2 font-semibold text-2xl">
                      {post.title}
                    </h2>
                    <p className="text-dark/90 ">
                      {post.excerpt} ... <span className="text-secondary/90 cursor-pointer text-sm font-semibold"> Read more </span>
                    </p>
                  </div>
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
              <Button className="absolute top-0 right-0 h-full w-[100px] px-4 text-white bg-red-500 rounded-r-[10px] rounded-l-[10px] shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90 flex items-center justify-center">
                <Search className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="right-content-categories p-4 max-w-sm mx-auto border rounded-[10px] shadow-sm mb-[50px] text-[#4D5115]">
            <div className="flex items-left justify-left text-left text-[#51565A] text-[25px] mb-2 ">
              <p>Browse Categories</p>
            </div>
            <div className="category-item flex justify-between items-center py-3 border-b border-gray">
              <div className="category-name text-gray-700">
                Category name place holder
              </div>
              <span className="category-toggle text-gray-500 cursor-pointer">
                <ChevronDown size={24} color="#4D5115" />
              </span>
            </div>
            <div className="category-item flex justify-between items-center py-3 border-b border-gray">
              <div className="category-name text-gray-700">
                Vorem ipsum dolor
              </div>
              <span className="category-toggle text-gray-500 cursor-pointer">
                <ChevronDown size={24} />
              </span>
            </div>
            <div className="category-item flex justify-between items-center py-3 border-b border-gray">
              <div className="category-name text-gray-700">
                Vorem ipsum dolor sit
              </div>
              <span className="category-toggle text-gray-500 cursor-pointer">
                <ChevronDown size={24} />
              </span>
            </div>
            <div className="category-item flex justify-between items-center py-3 border-b border-gray">
              <div className="category-name text-gray-700">
                Rorem ipsum dolor sit amet
              </div>
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
              <div className="category-name text-gray-700">
                Gorem ipsum dolor sit
              </div>
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
              <div className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
                Category name
              </div>
              <div className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
                Category name
              </div>
              <div className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
                Category name
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        {/* Pagination centered below split content */}

        {/* Hover effects on buttons not working as expected */}
        <div className="flex justify-center items-center gap-2 mb-12">
          <button className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
            <ChevronLeft size={24} />
          </button>

          <div className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
            {" "}
            1
          </div>

          <button className="category-item bg-gray-200 border-2 border-gray-300 rounded-full px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-red-300 hover:border-red-500 hover:text-white">
            2
          </button>

          <button className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
            ...
          </button>

          <button className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
            4
          </button>

          <button className="category-item bg-gray-200 border-2 border-gray rounded-full px-4 py-2 text-gray cursor-pointer hover:bg-red-300 hover:border-[#EF2A45] hover:text-white">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
      <PartnersList />
      <ChatBot/>
    </div>
  );
};

export default page;
