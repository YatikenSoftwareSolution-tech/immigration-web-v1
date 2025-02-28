"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For animations
import Image from "next/image";
import SpouseSponsered from "../../../assets/SpouseSponsered.jpg";
import { Plane, FileCheck, Heart, Scale, Home, Wallet, FileText, Fingerprint, Clock, Globe2, Building2, Users } from 'lucide-react';
import styles from "../../Home.module.css"
import { useRouter } from "next/navigation";
const VisitorVisaPage = () => {
  
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Banner Section */}
      <section className="bg-red-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Canadian Visitor Visa
            </motion.h1>
            <motion.p
              className="text-lg text-dark mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
             Your gateway to exploring Canada's diverse landscapes, cultures, and opportunities. Whether for tourism, business, or family visits, start your journey here.
            </motion.p>
            <Button onClick={() => router.push("/form")} className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700">
              Apply Now
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={SpouseSponsered}
              alt="Spousal Sponsorship in Canada"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
 {/* Main Content */}
 <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: "Tourism and Exploration", desc: "Experience Canada's diverse landscapes, cultures, and attractions" },
              { icon: Building2, title: "Business Opportunities", desc: "Attend conferences, meetings, or explore potential business ventures" },
              { icon: Users, title: "Family Visits", desc: "Spend time with relatives residing in Canada" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-dark">
                <item.icon className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-d">{item.title}</h3>
                <p className="text-dark">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: "Valid Travel Document", desc: "Possess a valid passport" },
              { icon: Heart, title: "Good Health", desc: "You may need to undergo a medical examination" },
              { icon: Scale, title: "No Criminal Record", desc: "No criminal or immigration-related convictions" },
              { icon: Home, title: "Strong Ties to Home Country", desc: "Demonstrate ties such as employment, property, or family" },
              { icon: Wallet, title: "Financial Sufficiency", desc: "Prove sufficient funds to cover your stay in Canada" },
              { icon: FileText, title: "Purpose of Visit", desc: "Clearly state your reason for visit with supporting documentation" }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg " >
                <item.icon className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-dark text-lg">{item.title}</h3>
                  <p className="text-dark">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-dark italic">For detailed eligibility information, refer to the official IRCC website.</p>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Application Process</h2>
          <div className="space-y-8">
            {[
              {
                icon: FileCheck,
                title: "Determine Eligibility",
                desc: "Ensure you meet the basic requirements, such as having a valid travel document (passport), being in good health, and possessing sufficient financial support for your stay."
              },
              {
                icon: FileText,
                title: "Prepare Documentation",
                desc: "Gather necessary documents, including proof of ties to your home country, purpose of visit, and financial means."
              },
              {
                icon: Plane,
                title: "Complete the Application",
                desc: "Fill out the application form IMM 5257 and any other required forms."
              },
              {
                icon: Wallet,
                title: "Pay Fees",
                desc: "Submit the application processing fee."
              },
              {
                icon: Fingerprint,
                title: "Submit Biometrics",
                desc: "Depending on your nationality, you may need to provide fingerprints and a photo."
              },
              {
                icon: Clock,
                title: "Await Processing",
                desc: "Processing times vary; check the IRCC website for current estimates."
              },
              {
                icon: FileCheck,
                title: "Passport Submission",
                desc: "If approved, submit your passport for visa stamping."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
                  </div>
                  <p className="text-dark">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Canadian Journey?</h2>
            <p className="mb-6">Begin your visa application process today and take the first step towards experiencing Canada.</p>
            <button onClick={() => router.push("/form")} className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Application
            </button>
          </div>
        </section>
      </main>
    </div>
    </div>
        </div>
  );
};

export default VisitorVisaPage;
