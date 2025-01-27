const ProgramCard = ({ program, index }) => {
  return (
    <div className="flex flex-col item-center box-border cursor-pointer w-[25%] px-[3%] py-[3%] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white hover:border-b-4 hover:border-tertiary">
      <div
        className="mb-5 p-2 flex justify-center -center text-xl font-bold rounded-full w-10 h-10 text-white"
        style={{ backgroundColor: program.background }}
      >
        {index}
      </div>
      <div className="text-3xl font-semi-bold text-gray-600">
        {program.title || ""}
      </div>
      <div className="mt-4 text-left">
        <div className="text-tertiary font-extrabold text-3xl mb-4">...</div>
        <p className="text-lg font-medium text-gray">
          {program.description || ""}
        </p>
      </div>
    </div>
  );
};

export default ProgramCard;
