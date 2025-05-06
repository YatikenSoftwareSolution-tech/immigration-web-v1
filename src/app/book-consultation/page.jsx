import PaymentPanel from "./components/PaymentPanel";

const Consultation = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 to-pink-50 px-6 py-8">
        <h1 className="text-lg md:text-xl text-tertiary font-semibold mb-4 md:mb-6 text-center">
          Book a Mentorship Session with our expert counselors
        </h1>
        <PaymentPanel/>
      </div>
    </div>
  );
};

export default Consultation;
