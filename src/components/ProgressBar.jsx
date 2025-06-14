import React from "react";
import { useFormContext } from "../context/FormContext";

function ProgressBar() {
  const { step } = useFormContext();
  const steps = [
    "Invitation received",
    "Personal details",
    "Application details",
    "Confirmation",
  ];

  return (
    <div className="max-w-xl mx-auto my-4 pb-4">
      <div className="flex pb-3">
        {steps.map((_, index) => (
          <div key={index} className="flex-1">
            <div
              className={`w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center ${
                index + 1 <= step
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="w-1/6 align-center items-center flex">
                <div className="w-full bg-gray-300 rounded flex-1">
                  <div
                    className={`${
                      index + 1 < step ? "bg-green-500 w-full" : "w-0"
                    } h-1 rounded`}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
