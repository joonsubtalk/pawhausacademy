import { useState } from "react";
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-3">
      {/* 1. The Button */}
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-md md:text-xl font-medium text-slate-900">{question}</span>
        
        {/* 2. The Icon (Rotates 45deg to become an X) */}
        {/* We use a span wrapper for the rotation to separate layout from transform */}
        <span
          className={`ml-6 shrink-0 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            className="h-6 w-6 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {/* 3. The Content Animation (Grid Trick) */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {/* Inner div must have overflow-hidden for this trick to work */}
        <div className="overflow-hidden whitespace-pre-line">
          {answer}
        </div>
      </div>
    </div>
  );
};
export default FAQItem;