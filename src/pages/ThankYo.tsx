import React from "react";

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Thank You for Voting!</h1>
      <p className="text-lg text-gray-700">Your vote has been successfully submitted.</p>
    </div>
  );
};

export default ThankYou;
