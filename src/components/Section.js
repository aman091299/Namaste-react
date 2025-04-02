import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 m-10 p-2">
      {/* Flex container with justify-end to force arrow to right */}
      <div className="flex justify-end">
        {/* Content (left-aligned when visible) */}
        {isVisible && (
          <div className="mr-auto"> {/* mr-auto pushes arrow to right */}
            <h1 className="text-2xl font">{title}</h1>
            <p>{description}</p>
          </div>
        )}

        {/* Arrow (always right-aligned) */}
        <div onClick={setIsVisible} className="cursor-pointer">
          {isVisible ? (
            // Down arrow (▼)
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          ) : (
            // Up arrow (▲)
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 15l7-7 7 7"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;