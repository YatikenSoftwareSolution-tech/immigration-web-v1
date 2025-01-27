"use-client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from 'lucide-react';

const ChatBot = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      {/* Fixed Chat Button */}
      <Button
        onClick={toggleFormVisibility}
        className="fixed bottom-14 left-6 bg-tertiary text-white px-8 py-4 rounded-full shadow-lg z-50 hover:bg-tertiary/90 transition-all"
      >
        Ask AI
      </Button>

      {/* Chat Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-start items-end mb-16 z-40">
          <div className="bg-white w-80 sm:w-96 rounded-lg h-full shadow-lg px-6 py-6 flex flex-col justify-between ml-6  h-[70%]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-[#333]">Chat with Bot</h2>
              <button
                onClick={toggleFormVisibility}
                className="text-xl text-gray-500 hover:text-gray-700 transition-all"
              >
                <X />
              </button>
            </div>
            <form className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#ff7800] focus:border-[#ff7800] outline-none transition-all"
              />
              <button
                type="submit"
                className="bg-tertiary text-white p-3 rounded-full hover:bg-tertiary/90 transition-all"
              >
                <ArrowRight className="text-white" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
