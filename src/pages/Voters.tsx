import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const RegisteredVoters: React.FC = () => {
  const [voters, setVoters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVoters = async () => {
      setLoading(true);
      const votersRef = collection(db, "allowedUsers");
      const votersSnapshot = await getDocs(votersRef);

      const voterList: string[] = [];
      votersSnapshot.forEach((doc) => {
        voterList.push(doc.id); // Assuming voter emails are stored as document IDs
      });

      setVoters(voterList);
      setLoading(false);
    };

    fetchVoters();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600 font-semibold">Loading registered voters...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">
        Registered Voters
      </h1>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-lg font-medium text-gray-600">
            Total Registered Voters: <span className="font-bold text-blue-600">{voters.length}</span>
          </p>
        </div>
        <ul className="divide-y divide-gray-300">
          {voters.length > 0 ? (
            voters.map((voter, index) => (
              <li
                key={index}
                className={`py-4 px-2 text-lg text-gray-800 transition-all duration-200 hover:bg-blue-50`}
              >
                <span className="font-medium text-blue-700">{index + 1}.</span> {voter}
              </li>
            ))
          ) : (
            <li className="py-4 px-2 text-lg text-gray-600">No registered voters found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RegisteredVoters;
