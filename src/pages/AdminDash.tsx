// import React, { useEffect, useState } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase/firebase";

// const AdminDashboard: React.FC = () => {
//   const [results, setResults] = useState<Record<string, Record<string, number>>>({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Listen to the votes collection in Firestore
//     const votesRef = collection(db, "votes");
//     const unsubscribe = onSnapshot(votesRef, (snapshot) => {
//       const voteCounts: Record<string, Record<string, number>> = {};

//       snapshot.forEach((doc) => {
//           console.log(doc)
//         const voteData = doc.data().votes;
        
//         for (const position in voteData) {
//           const candidate = voteData[position];

//           if (!voteCounts[position]) {
//             voteCounts[position] = {};
//           }

//           // Increment vote count for the candidate
//           voteCounts[position][candidate] = (voteCounts[position][candidate] || 0) + 1;
//         }
//       });

//       setResults(voteCounts);
//       setIsLoading(false);
//     });

//     // Cleanup listener on unmount
//     return () => unsubscribe();
//   }, []);

//   if (isLoading) {
//     return <p className="text-center text-gray-500">Loading results...</p>;
//   }

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Voting Results</h1>

//       {Object.keys(results).length > 0 ? (
//         Object.entries(results).map(([position, candidates]) => (
//           <div key={position} className="mb-6">
//             <h2 className="text-2xl font-semibold text-blue-600 mb-3">{position}</h2>
//             <div className="bg-white shadow-md rounded-lg p-4">
//               {Object.entries(candidates).map(([candidate, count]) => (
//                 <div key={candidate} className="flex justify-between items-center py-2">
//                   <span className="text-gray-700">{candidate}</span>
//                   <span className="text-gray-900 font-semibold">{count} votes</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-600">No votes have been cast yet.</p>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;























// import React, { useEffect, useState } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase/firebase";

// const AdminDashboard: React.FC = () => {
//   const [results, setResults] = useState<Record<string, Record<string, number>>>({});
//   const [totalVotes, setTotalVotes] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Listen to the votes collection in Firestore
//     const votesRef = collection(db, "votes");
//     const unsubscribe = onSnapshot(votesRef, (snapshot) => {
//       const voteCounts: Record<string, Record<string, number>> = {};
//       let totalVoteCount = 0;

//       snapshot.forEach((doc) => {
//         const voteData = doc.data().votes;
//         totalVoteCount += 1; // Increment for each vote document

//         for (const position in voteData) {
//           const candidate = voteData[position];

//           if (!voteCounts[position]) {
//             voteCounts[position] = {};
//           }

//           // Increment vote count for the candidate
//           voteCounts[position][candidate] = (voteCounts[position][candidate] || 0) + 1;
//         }
//       });

//       setResults(voteCounts);
//       setTotalVotes(totalVoteCount);
//       setIsLoading(false);
//     });

//     // Cleanup listener on unmount
//     return () => unsubscribe();
//   }, []);

//   if (isLoading) {
//     return <p className="text-center text-gray-500">Loading results...</p>;
//   }

//   return (
//     <div className="min-h-screen p-6 bg-gradient-to-r from-blue-100 via-white to-gray-100">
//       <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
//         Voting Results Dashboard
//       </h1>

//       <div className="mb-8 text-center">
//         <p className="text-lg text-gray-700">Total Voter Turnout:</p>
//         <p className="text-2xl font-bold text-green-600">{totalVotes}</p>
//       </div>

//       {Object.keys(results).length > 0 ? (
//         Object.entries(results).map(([position, candidates]) => (
//           <div key={position} className="mb-6">
//             <h2 className="text-2xl font-bold text-blue-700 mb-4">{position}</h2>
//             <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//               {Object.entries(candidates).map(([candidate, count]) => (
//                 <div
//                   key={candidate}
//                   className="flex justify-between items-center py-3 border-b last:border-b-0"
//                 >
//                   <span className="text-gray-700 text-lg">{candidate}</span>
//                   <span className="text-gray-900 font-semibold">{count} votes</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-600">No votes have been cast yet.</p>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;







import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

// Define the rank order for positions
const rankOrder = [
  "Chairperson",
  "Vice Chairperson",
  "Treasurer",
  "Secretary",
  "Organizing Secretary",
];

const AdminDashboard: React.FC = () => {
  const [results, setResults] = useState<Record<string, Record<string, number>>>({});
  const [totalVotes, setTotalVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen to the votes collection in Firestore
    const votesRef = collection(db, "votes");
    const unsubscribe = onSnapshot(votesRef, (snapshot) => {
      const voteCounts: Record<string, Record<string, number>> = {};
      let totalVoteCount = 0;

      snapshot.forEach((doc) => {
        const voteData = doc.data().votes;
        totalVoteCount += 1; // Increment for each vote document

        for (const position in voteData) {
          const candidate = voteData[position];

          if (!voteCounts[position]) {
            voteCounts[position] = {};
          }

          // Increment vote count for the candidate
          voteCounts[position][candidate] = (voteCounts[position][candidate] || 0) + 1;
        }
      });

      setResults(voteCounts);
      setTotalVotes(totalVoteCount);
      setIsLoading(false);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading results...</p>;
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-blue-200 via-white to-gray-200">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center drop-shadow-md">
        Voting Results Dashboard
      </h1>

      <div className="mb-8 text-center">
        <p className="text-lg text-gray-700 font-medium">Total Voter Turnout:</p>
        <p className="text-3xl font-extrabold text-green-700">{totalVotes}</p>
      </div>

      {Object.keys(results).length > 0 ? (
        rankOrder.map((position) => (
          results[position] && (
            <div key={position} className="mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-400 pb-2">
                {position}
              </h2>
              <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-300 hover:shadow-2xl transition duration-200">
                {Object.entries(results[position])
                  .sort(([, aVotes], [, bVotes]) => bVotes - aVotes) // Sort candidates by votes
                  .map(([candidate, count]) => (
                    <div
                      key={candidate}
                      className="flex justify-between items-center py-3 border-b last:border-b-0"
                    >
                      <span className="text-lg text-gray-700 font-medium">{candidate}</span>
                      <span className="text-gray-900 font-bold text-lg">{count} votes</span>
                    </div>
                  ))}
              </div>
            </div>
          )
        ))
      ) : (
        <p className="text-center text-gray-600">No votes have been cast yet.</p>
      )}
    </div>
  );
};

export default AdminDashboard;

