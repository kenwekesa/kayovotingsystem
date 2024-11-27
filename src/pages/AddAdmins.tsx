import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddAdmin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required!");
      return;
    }

    try {
      // Add email to Firestore
      await addDoc(collection(db, "admins"), {
        email: email,
      });
      setMessage("Admin email added successfully!");
      setEmail(""); // Clear the input
    } catch (error) {
      setMessage("Error adding admin email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Admin Email</h1>
      <form onSubmit={handleAddAdmin} className="space-y-4">
        <div>
          <label className="block text-gray-700">Admin Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border rounded-lg w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Admin
        </button>
      </form>
      {message && <p className="mt-4 text-lg text-center">{message}</p>}
      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600"
      >
        Back to Home
      </button>
    </div>
  );
};

export default AddAdmin;
