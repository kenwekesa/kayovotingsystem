import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleRegister = async (): Promise<void> => {
    try {
      await setDoc(doc(db, "allowedUsers", email), { email });
      setMessage("Email successfully registered!");
      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Registration Error:", (error as Error).message);
      setMessage("Failed to register email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Email</h2>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email to register"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Register Email
        </button>

        {message && (
          <p className="text-center text-green-600 font-medium mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
