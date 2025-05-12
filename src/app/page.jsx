import Link from "next/link";
import { Services } from "./constants/home";

const ImmigrationPage = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      <div className="flex flex-col w-full mx-auto py-8 px-5 md:px-0 ">
        {/* Hero Section */}
        <section className="flex flex-col lg:justify-around px-4 py-8 mx-auto max-w-7xl min-h-screen">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-tertiary">
              Welcome to <span className="text-secondary">Immigration</span>{" "}
              <span className="text-tertiary">Company</span>
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              # Righteous Immigration Advices Since 2010
            </div>
            <p className="mt-6 text-base md:text-lg text-dark max-w-4xl mx-auto leading-relaxed">
              Since 2010, Immigration Company has been dedicated to providing
              ethical and personalized immigration consulting services. Whether
              you're looking to visit, study, work, or settle permanently in
              Canada, our experienced team is here to guide you every step of
              the way. We understand that each client's journey is unique, and
              we're committed to offering solutions tailored to your individual
              needs.
            </p>
            <Link href="/consultation-form" className="inline-block">
              <button className="px-4 py-4 rounded-lg text-white bg-secondary mt-4 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90">
                Fill Consultation Form
              </button>
            </Link>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-center text-[clamp(2rem,5vw,3rem)] font-bold text-dark leading-tight">
              Our Core <span className="text-tertiary">Services</span>{" "}
            </h3>
            <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col gap-4 p-6 shadow border border-gray-100 rounded-xl">
                <h4 className="text-lg text-secondary font-semibold">
                  Consultation
                </h4>
                <p className="text-dark">
                  Personalized guidance to navigate your immigration options
                  with expert advices tailored to your needs.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 shadow border border-gray-100 rounded-xl">
                <h4 className="text-lg text-secondary font-semibold">
                  Preparation
                </h4>
                <p className="text-dark">
                  Comprehensive support in preparing accurate and complete
                  documentation for your application.
                </p>
              </div>
              <div className="flex flex-col gap-4 p-6 shadow border border-gray-100 rounded-xl">
                <h4 className="text-lg text-secondary font-semibold">
                  Submission
                </h4>
                <p className="text-dark">
                  Hassle-free submission of your application and timely
                  processing.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="bg-contain bg-center bg-no-repeat mb-4 h-[180px] bg-[url('/OfficePhotoStripped.jpg')]">

        </section> */}
        {/* Services Section */}
        <section className="flex flex-col mt-12 md:px-16 lg:px-24 items-center gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight">
              Our
              <span className="text-tertiary"> Canadian </span>
              Immigration Services
            </h2>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Whatever be your journey, make us a part of it.
            </div>
            <p className="text-dark text-lg max-w-2xl mx-auto">
              Comprehensive immigration solutions tailored to your unique needs.
              <br />
              Each service is backed by our years of expertise and commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {Services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30 "
              >
                <div className="bg-secondary/10 rounded-xl p-4 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mt-4">
                  {service.title}
                </h3>
                <p className="text-dark mt-2 flex-grow">
                  {service.description}
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  {service.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-dark"
                    >
                      <svg
                        className="w-5 h-5 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImmigrationPage;
