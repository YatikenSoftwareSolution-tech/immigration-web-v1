"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PaymentPanel from "./components/PaymentPanel";

const Consultation = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="mt-12">
      <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 to-pink-50 px-6 py-8 min-h-screen">
        <h1 className="text-lg md:text-xl text-tertiary font-semibold mb-4 md:mb-6 text-center">
          Book a Mentorship Session with our expert counselors
        </h1>
        <div className="flex gap-4">
          <button
            onClick={openModal}
            className="border px-3 py-2 rounded-lg border-dark/10 text-dark hover:border-tertiary shadow"
          >
            10 minutes free consultation
          </button>
          <button className="border px-3 py-2 rounded-lg border-secondary text-secondary hover:border-tertiary shadow">
            30 minutes paid consultation
          </button>
        </div>
        <PaymentPanel/>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
              <p className="mb-4 text-secondary">
                Please fill the form first to go ahead with the process.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border rounded-lg text-dark"
                >
                  Cancel
                </button>
                <button
                  onClick={() => router.push("/consultation-form")}
                  className="px-4 py-2 bg-tertiary text-white rounded-lg"
                >
                  Fill Form
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Consultation;
