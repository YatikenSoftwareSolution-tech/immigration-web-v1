"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const TermsAndConditions = () => {
  const docRef = useRef(null);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const name = searchParams.get("name");
  const mobile = searchParams.get("mobile");

  const handleDownload = () => {
  if (!docRef.current) return;

  // define the date string exactly as you render it in the document
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const header = `\uFEFF<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Initial Consultation Agreement</title></head><body>`;
  const footer = `</body></html>`;
  const html = header + docRef.current.innerHTML + footer;

  const blob = new Blob([html], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  // replace slashes with dashes for a valid filename
  a.download = `Initial_Consultation_Agreement_${date.replace(/\//g, "-")}.doc`;
  a.click();
  URL.revokeObjectURL(url);
};


  return (
    <div className="min-h-screen text-dark bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div ref={docRef} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col gap-1">
              <Image
                src="/ImmigrationCompanyLogo.png"
                alt="Logo"
                width={200}
                height={150}
              />
              <h1 className="text-xs font-bold text-gray">
                Righteous Immigration advice since 2010{" "}
              </h1>
            </div>
            <div className="flex flex-col gap-1 text-xs text-right font-semibold">
              <p> Head Office: 9323- 35 Ave NW Edmonton, AB T6E 5R5 </p>
              <p>T +1.780.937.1995 </p>
              <Link
                href={`mailto:info@immigrationcompany.ca`}
                className="text-blue-700"
              >
                info@immigrationcompany.ca
              </Link>
            </div>
          </div>
          <section className="flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 mt-12">
              Initial Consultation Agreement
            </h1>
            <p className="text-center">
              This initial consultation agreement is made on{" "}
              {new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}{" "}
              between:
            </p>
          </section>

          <section className="my-6 text-center">
            <h2 className=" font-semibold text-gray-800 mb-4">"The Client"</h2>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <p>
                Name: <strong className="ml-1">{name}</strong>
              </p>
              {/* {address &&<p>
                Address: <strong className="ml-1">{address}</strong>
              </p>} */}
              <p>
                Phone:<strong className="ml-1">{mobile}</strong>{" "}
              </p>
              <p>
                Email: <strong className="ml-1">{email}</strong>
              </p>
            </div>
          </section>

          <section className="my-6 text-center">
            <h2 className=" font-semibold text-gray-800 mb-4">"The RCIC"</h2>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <p>
                RCIC's name: <strong className="ml-1">Rajender Bhinder</strong>{" "}
              </p>
              <p>
                College ID number: <strong className="ml-1">R407836</strong>{" "}
              </p>
              <p>
                Address:
                <strong className="ml-1">
                  {" "}
                  9323-35 Ave NW Edmonton, AB T6E5R5 Canada{" "}
                </strong>
              </p>
              <p>
                Phone:<strong className="ml-1">780-937-1995 </strong>{" "}
              </p>
              <p>
                Email address:
                <strong className="ml-1">
                  <Link
                    href={`mailto:info@immigrationcompany.ca`}
                    className="text-blue-700"
                  >
                    info@immigrationcompany.ca
                  </Link>
                </strong>{" "}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Scope and Purpose
            </h2>
            <p>
              The scope of the initial consultation service is limited to the
              following:{" "}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                Assessing the Client's eligibility and suitability for various
                immigration or citizenship programs in Canada based on the
                information and documents provided by the Client.
              </li>
              <li>
                Providing the Client with general information and advice on the
                immigration or citizenship process, requirements, fees, and
                timelines.{" "}
              </li>
              <li>
                Answering the Client's questions and addressing the Client's
                concerns related to the immigration or citizenship matter.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Fees and Payment
            </h2>
            <p>
              The fee for the initial consultation service is ​$52.50​, which is
              payable in advance by RCIC’s checking account, e-transfer,
              Interac, or cash.{" "}
            </p>
            <p>
              The fee is non-refundable unless the RCIC cancels or reschedules
              the consultation without the Client's consent or fails to provide
              the consultation service as agreed. The fee covers the time and
              expenses incurred by the RCIC for the consultation service only
              and does not include any additional services or costs that may
              arise from the consultation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Acknowledgment and Consent
            </h2>
            <p className="text-sm text-gray-600">
              By signing this agreement, the Client acknowledges and agrees
              that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                The Client has read and understood this agreement and the terms
                and conditions herein.
              </li>
              <li>
                The Client has had the opportunity to ask questions and seek
                clarification from the RCIC before signing this agreement.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Signatures:
            </h2>
            <p className="text-sm text-gray-600">
              A signature of a person Description automatically generated,
              PictureThis initial consultation agreement has been duly executed
              by the parties on the date first above.
            </p>
            <div className="grid grid-cols-2 gap-8 my-6">
              <div>
                <div className="h-16">
                  <div className="flex items-center h-full">
                    <input
                      type="checkbox"
                      id="client-agree"
                      className="w-7 h-7 accent-blue-600 border-2 border-gray-400 rounded mr-4"
                      style={{ minWidth: 28, minHeight: 28 }}
                    />
                    <label htmlFor="client-agree" className="text-base font-medium select-none">
                      I {name} Agree and Sign
                    </label>
                  </div>
                </div>
                <div className="border-t-2 border-gray-400 pt-2">
                  <p className="text-xs ">Signature of Client  </p>
                  <div className="text-xs my-3">Name: {name}</div>
                  <p className="text-xs">
                    Date:{" "}
                    {new Date().toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}{" "}
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={"/RajSign.png"}
                  alt="Sign"
                  height={150}
                  width={150}
                  className=""
                />

                <div className="border-t-2 border-gray-400 text-xs pt-2">
                  <p>RCIC Signature</p>
                  <p className="my-3">Name: Rajender Bhinder</p>
                  <p>
                    Date:{" "}
                    {new Date().toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Download Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
