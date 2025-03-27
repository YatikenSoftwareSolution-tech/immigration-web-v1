"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThankuCard from "@/components/custom/ThankuCard";
import PaymentPanel from "./components/PaymentPanel";

const Consultation = () => {
  const searchParams = useSearchParams();
  const isFilled = searchParams.get("filled") === "true";
  const [selectedTab, setSelectedTab] = useState(
    isFilled ? "10MinFreeMeeting" : "30MinMeeting"
  );

  const handleTabChange = (value) => {
    if (isFilled) {
      setSelectedTab(value);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-pink-50 px-6">
        <div className="bg-white shadow-xl rounded-xl p-4 md:p-8 flex flex-col items-center">
          <h1 className="text-lg md:text-xl text-tertiary font-semibold mb-4 md:mb-6 text-center">
            Book a Mentorship Session with our expert counselors
          </h1>
          <Tabs
            className="bg-gray-200 rounded-lg"
            value={selectedTab}
            onValueChange={handleTabChange}
          >
            <TabsList className="w-full md:w-auto bg-white-50 px-4 py-2 rounded-lg flex justify-center">
              <TabsTrigger
                value="10MinFreeMeeting"
                className="mr-4 text-dark data-[state=active]:bg-white data-[state=active]:text-secondary"
                onClick={() => {
                  if (!isFilled) {
                    alert("Fill consultation form first");
                    return;
                  }
                }}
              >
                10 Min Free Meeting
              </TabsTrigger>
              <TabsTrigger
                value="30MinMeeting"
                className="mr-4 text-dark data-[state=active]:bg-white data-[state=active]:text-secondary"
              >
                30 Min Meeting
              </TabsTrigger>
            </TabsList>
            <TabsContent value="10MinFreeMeeting">
              <ThankuCard />
            </TabsContent>
            <TabsContent value="30MinMeeting">
              <PaymentPanel>
                <ThankuCard />
              </PaymentPanel>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Suspense>
  );
};

export default Consultation;
