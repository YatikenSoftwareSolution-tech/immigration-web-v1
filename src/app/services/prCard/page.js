"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For animations
import Image from "next/image";
import SpouseSponsered from "../../../assets/SpouseSponsered.jpg";
import { Plane, FileCheck, Heart, Scale, Home, Wallet, FileText, Fingerprint, Clock, Globe2, Building2, Users, CheckCircle, AlertTriangle, CircleCheck } from 'lucide-react';
import styles from "../../Home.module.css"
import { useRouter } from "next/navigation";
const PermanentCardPage = () => {
  
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Banner Section */}
      <section className="bg-green-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Permanent Resident (PR) Card Renewal
            </motion.h1>
            <motion.p
              className="text-lg text-dark mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
Permanent residents of Canada must carry a valid PR card when traveling outside Canada to return.            </motion.p>
            <Button onClick={() => router.push("/form")} className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700">
              Apply Now
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* <Image
              src={SpouseSponsered}
              alt="Spousal Sponsorship in Canada"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            /> */}
          </div>
        </div>
      </section>
 {/* Main Content */}
 <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Key Benefits */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: "Tourism and Exploration", desc: "Experience Canada's diverse landscapes, cultures, and attractions" },
              { icon: Building2, title: "Business Opportunities", desc: "Attend conferences, meetings, or explore potential business ventures" },
              { icon: Users, title: "Family Visits", desc: "Spend time with relatives residing in Canada" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-dark">
                <item.icon className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-dark">{item.desc}</p>
              </div>
            ))}
          </div>
        </section> */}

<section className="mb-8 bg-white p-6 rounded-lg shadow-md">
<h2 className="text-3xl font-bold mb-4 text-dark">Eligibility Requirements</h2>
        <p className="mb-8 text-dark">To be eligible for PR card renewal, you must:</p>
        <ul className="list-none space-y-2 mb-6">
          <li className="flex items-center mb-4 text-dark"><CheckCircle className="text-green-600 mr-4" /> Be a permanent resident of Canada</li>
          <li className="flex items-center mb-4 text-dark"><CheckCircle className="text-green-600 mr-4" /> Be physically present in Canada at the time of application</li>
          <li className="flex items-center mb-4 text-dark"><CheckCircle className="text-green-600 mr-4" /> Meet the residency obligation of having been in Canada for at least 730 days in the last five years</li>
        </ul>
      </section>
        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Renewal Process</h2>
          <div className="space-y-8">
            {[
              {
                icon: FileCheck,
                title: "Determine Eligibility",
                desc: "Ensure you've been physically present in Canada for at least 730 days in the past five years."
              },
              {
                icon: FileText,
                title: "Application Form ",
                desc: "Complete the PR card renewal application.."
              },
              {
                icon: FileCheck,
                title: "Gather Documents",
                desc: "Include photos, a copy of your current PR card, and proof of residency.."
              },
             
              {
                icon:CircleCheck,
                title: "Submit Application",
                desc: "Mail the application to the address specified in the instruction guide.."
              },
             
              
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
                  </div>
                  <p className="text-dark">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <Card className="mb-8">
        <CardHeader>
          <CardTitle><h2 className="text-3xl font-bold mb-2 text-dark">Important Information</h2></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <p>
              Submit a complete application to IRCC, including the required forms, photographs, and supporting
              documents.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <p>It's recommended to apply for renewal at least six months before your current card expires.</p>
          </div>
          <div className="flex items-start space-x-2">
            <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
            <p>
              Processing times can vary; current estimates are approximately 97 days. Check the IRCC website for
              updates.
            </p>
          </div>
        </CardContent>
      </Card> */}
      <section className="mb-10  bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-dark">Important Information</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <p className="text-dark"> Submit a complete application to IRCC, including the required forms, photographs, and supporting documents.</p>
          </div>
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <p className="text-dark">It&apos;s recommended to apply for renewal at least six months before your current card expires.</p>
          </div>
          <div className="flex items-start space-x-2">
            <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
            <p className="text-dark">Processing times can vary; current estimates are approximately 97 days. Check the IRCC website for updates.</p>
          </div>
        </div>
      </section>

       
      </main>
    </div>
    </div>
        </div>
  );
};

export default PermanentCardPage;
