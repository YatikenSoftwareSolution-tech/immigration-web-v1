"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; 
import { Briefcase, Building2, Globe2, FileText, Fingerprint, Clock, FileCheck, Scale, Heart, Users, BadgeCheck, MapPin } from 'lucide-react';
import styles from "../../Home.module.css"
import { useRouter } from "next/navigation";

const WorkPermitPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Banner Section */}
      <section className="bg-blue-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Work in Canada
            </motion.h1>
            <motion.p
              className="text-lg text-dark mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
             Your gateway to career opportunities in Canada. Choose between employer-specific and open work permits to begin your professional journey.
            </motion.p>
            <Button onClick={() => router.push("/consultation-form")} className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
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
        {/* Work Permit Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Types of Work Permits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Building2,
                title: "Employer-Specific Work Permit",
                desc: "Work for a specific employer under set conditions",
                features: [
                  "Tied to one employer",
                  "Location specified",
                  "Fixed duration",
                  "Requires LMIA in most cases"
                ],
                highlight: "Specific"
              },
              {
                icon: Globe2,
                title: "Open Work Permit",
                desc: "Work for any eligible employer in Canada",
                features: [
                  "Work for any employer",
                  "No location restriction",
                  "Flexible employment",
                  "No LMIA required"
                ],
                highlight: "Open"
              }
            ].map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold ">
                  {type.highlight}
                </div>
                <type.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-dark">{type.title}</h3>
                <p className="text-dark mb-4">{type.desc}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-dark">
                      <BadgeCheck className="w-5 h-5 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Key Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Valid Job Offer",
                desc: "Secure employment from a Canadian employer"
              },
              {
                icon: FileCheck,
                title: "LMIA",
                desc: "Labour Market Impact Assessment (if applicable)"
              },
              {
                icon: Scale,
                title: "Qualifications",
                desc: "Meet education and experience requirements"
              },
              {
                icon: Heart,
                title: "Medical Exam",
                desc: "May be required depending on occupation"
              },
              {
                icon: Fingerprint,
                title: "Biometrics",
                desc: "Provide fingerprints and photo"
              },
              {
                icon: MapPin,
                title: "Provincial Requirements",
                desc: "Meet additional provincial criteria if applicable"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-dark text-lg">{item.title}</h3>
                  <p className="text-dark">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Application Process</h2>
          <div className="space-y-8">
            {[
              {
                icon: Briefcase,
                title: "Secure Job Offer",
                desc: "Obtain a valid job offer from a Canadian employer who is willing to hire you."
              },
              {
                icon: FileCheck,
                title: "LMIA Process",
                desc: "Your employer must obtain a Labour Market Impact Assessment if required for your position."
              },
              {
                icon: FileText,
                title: "Prepare Documentation",
                desc: "Gather all necessary documents including job offer letter, LMIA, and proof of qualifications."
              },
              {
                icon: Fingerprint,
                title: "Biometrics",
                desc: "Provide biometrics (fingerprints and photo) at a designated location."
              },
              {
                icon: Heart,
                title: "Medical Examination",
                desc: "Complete a medical exam with an approved physician if required."
              },
              {
                icon: Scale,
                title: "Submit Application",
                desc: "Apply online or through a visa application center with all supporting documents."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
                  </div>
                  <p className="text-dark">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Processing Times Notice */}
        <section className="mb-16 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Processing Times</h3>
          <p className="text-blue-700">
            Processing times vary depending on the type of work permit and your country of residence. 
            Visit the IRCC website for current processing times and to track your application status.
          </p>
        </section>

        
      </main>
    </div>
    </div>
    </div>
  );
};

export default WorkPermitPage;
