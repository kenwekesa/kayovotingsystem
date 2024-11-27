// import React, { useState } from "react";

// const positions = ["Chairperson", "Vice Chairperson", "Secretary"];

// const Vote: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [votes, setVotes] = useState({});

//   const handleVote = (candidate: string) => {
//     setVotes({ ...votes, [positions[currentStep]]: candidate });
//     if (currentStep < positions.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       alert("Voting completed successfully!");
//       console.log(votes);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-lg font-bold">Vote for {positions[currentStep]}</h1>
//       <button onClick={() => handleVote("Candidate 1")} className="bg-blue-500 text-white px-4 py-2 mt-2">
//         Candidate 1
//       </button>
//       <button onClick={() => handleVote("Candidate 2")} className="bg-green-500 text-white px-4 py-2 mt-2">
//         Candidate 2
//       </button>
//     </div>
//   );
// };

// export default Vote;


// import React from "react";

// const Vote: React.FC = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Vote for Your Leaders</h1>
//       <div className="space-y-4">
//         {["Chairperson", "Vice Chairperson", "Treasurer", "Secretary", "Organizing Secretary"].map((post) => (
//           <button
//             key={post}
//             className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             Vote for {post}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Vote;























// import React, { useEffect, useState } from "react";

// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import Countdown from "react-countdown";
// import { db } from "../firebase/firebase";

// // Define voting positions
// const positions = [
//   "Chairperson",
//   "Vice Chairperson",
//   "Treasurer",
//   "Secretary",
//   "Organizing Secretary",
// ];

// const Vote: React.FC = () => {
//   const [isVotingOpen, setIsVotingOpen] = useState(false);
//   const [votingEndTime, setVotingEndTime] = useState<Date | null>(null);
//   const [selectedVotes, setSelectedVotes] = useState<Record<string, string>>({});
//   const [candidates, setCandidates] = useState<Record<string, string[]>>({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchVotingState = async () => {
//       const votingRef = doc(db, "voting", "state");
//       const votingDoc = await getDoc(votingRef);
//       if (votingDoc.exists()) {
//         const data = votingDoc.data();
//         setIsVotingOpen(data?.isVotingOpen || false);
//         setVotingEndTime(data?.startTime ? new Date(data.startTime + 10 * 60000) : null);
//       }
//     };

//     const fetchCandidates = async () => {
//       // Fetch candidates from Firestore (modify to match your database)
//       const candidatesRef = doc(db, "voting", "candidates");
//       const candidatesDoc = await getDoc(candidatesRef);
//       if (candidatesDoc.exists()) {
//         setCandidates(candidatesDoc.data() || {});
//       }
//     };

//     fetchVotingState();
//     fetchCandidates();
//   }, []);

//   // Handle vote selection
//   const handleVoteChange = (position: string, candidate: string) => {
//     setSelectedVotes((prev) => ({
//       ...prev,
//       [position]: candidate,
//     }));
//   };

//   const handleSubmitVote = async () => {
//     // Store the user's votes in Firestore (or wherever you store them)
//     const votesRef = doc(db, "votes", "userVotes"); // Example path, change as needed
//     await updateDoc(votesRef, { [new Date().toISOString()]: selectedVotes });

//     // Redirect user after vote submission (optional)
//     navigate("/thank-you");
//   };

//   const countdownRenderer = ({ minutes, seconds }: { minutes: number; seconds: number }) => (
//     <span>{`${minutes}:${seconds}`}</span>
//   );

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Vote for Your Leaders</h1>

//       {isVotingOpen ? (
//         <>
//           <div className="space-y-6">
//             {positions.map((position) => (
//               <div key={position} className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md">
//                 <h2 className="text-xl font-semibold text-gray-700">{position}</h2>
//                 <div className="space-y-2">
//                   {candidates[position]?.map((candidate) => (
//                     <label key={candidate} className="flex items-center">
//                       <input
//                         type="radio"
//                         name={position}
//                         value={candidate}
//                         onChange={() => handleVoteChange(position, candidate)}
//                         checked={selectedVotes[position] === candidate}
//                         className="mr-2"
//                       />
//                       {candidate}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6">
//             <button
//               onClick={handleSubmitVote}
//               disabled={Object.keys(selectedVotes).length < positions.length}
//               className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg disabled:opacity-50"
//             >
//               Submit Vote
//             </button>
//           </div>
//         </>
//       ) : (
//         <p className="text-lg text-red-600">Voting is not open yet or has ended.</p>
//       )}

//       {votingEndTime && new Date() < votingEndTime && (
//         <div className="mt-6">
//           <p className="text-lg text-gray-700">Time remaining:</p>
//           <Countdown date={votingEndTime} renderer={countdownRenderer} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Vote;












// import React, { useEffect, useState } from "react";
// import { doc, getDoc, updateDoc, collection, getDocs, addDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import Countdown from "react-countdown";
// import { db } from "../firebase/firebase";

// // Define voting positions
// const positions = [
//   "Chairperson",
//   "Vice Chairperson",
//   "Treasurer",
//   "Secretary",
//   "Organizing Secretary",
// ];

// const Vote: React.FC = () => {
//   const [isVotingOpen, setIsVotingOpen] = useState(false);
//   const [votingEndTime, setVotingEndTime] = useState<Date | null>(null);
//   const [selectedVotes, setSelectedVotes] = useState<Record<string, string>>({});
//   const [candidates, setCandidates] = useState<Record<string, string[]>>({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchVotingState = async () => {
//       const votingRef = doc(db, "voting", "state");
//       const votingDoc = await getDoc(votingRef);
//       if (votingDoc.exists()) {
//         const data = votingDoc.data();
//         setIsVotingOpen(data?.isVotingOpen || false);
//         setVotingEndTime(data?.startTime ? new Date(data.startTime + 10 * 60000) : null);
//       }
//     };

//     const fetchCandidates = async () => {
//       // Fetch candidates from Firestore (modify to match your database)
//       const candidatesRef = collection(db, "candidates");
//       const candidatesSnapshot = await getDocs(candidatesRef);
//       const candidatesList: Record<string, string[]> = {};
//       candidatesSnapshot.forEach((doc) => {
//         const candidateData = doc.data();
//         const position = candidateData.position;
//         if (position) {
//           if (!candidatesList[position]) {
//             candidatesList[position] = [];
//           }
//           candidatesList[position].push(candidateData.name);
//         }
//       });
//       setCandidates(candidatesList);
//     };

//     fetchVotingState();
//     fetchCandidates();
//   }, []);

//   // Handle vote selection
//   const handleVoteChange = (position: string, candidate: string) => {
//     setSelectedVotes((prev) => ({
//       ...prev,
//       [position]: candidate,
//     }));
//   };

//   const handleSubmitVote = async () => {
//     // Store the user's votes in Firestore (or wherever you store them)
//     const votesRef = collection(db, "votes"); // Using collection to create a new document for each vote
//     await addDoc(votesRef, {
//       userId: "user_id", // Add the current user's ID (e.g., from Firebase Authentication)
//       votes: selectedVotes,
//       timestamp: new Date(),
//     });

//     // Redirect user after vote submission (optional)
//     navigate("/thank-you");
//   };

//   const countdownRenderer = ({ minutes, seconds }: { minutes: number; seconds: number }) => (
//     <span>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</span>
//   );

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Vote for Your Leaders</h1>

//       {isVotingOpen ? (
//         <>
//           <div className="space-y-6">
//             {positions.map((position) => (
//               <div key={position} className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md">
//                 <h2 className="text-xl font-semibold text-gray-700">{position}</h2>
//                 <div className="space-y-2">
//                   {candidates[position]?.map((candidate, index) => (
//                     <label key={index} className="flex items-center">
//                       <input
//                         type="radio"
//                         name={position}
//                         value={candidate}
//                         onChange={() => handleVoteChange(position, candidate)}
//                         checked={selectedVotes[position] === candidate}
//                         className="mr-2"
//                       />
//                       {candidate}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6">
//             <button
//               onClick={handleSubmitVote}
//               disabled={Object.keys(selectedVotes).length < positions.length}
//               className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg disabled:opacity-50"
//             >
//               Submit Vote
//             </button>
//           </div>
//         </>
//       ) : (
//         <p className="text-lg text-red-600">Voting is not open yet or has ended.</p>
//       )}

//       {votingEndTime && new Date() < votingEndTime && (
//         <div className="mt-6">
//           <p className="text-lg text-gray-700">Time remaining:</p>
//           <Countdown date={votingEndTime} renderer={countdownRenderer} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Vote;











// import React, { useEffect, useState } from "react";
// import {
//   doc,
//   getDoc,
//   updateDoc,
//   collection,
//   getDocs,
//   addDoc,
//   query,
//   where,
// } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import Countdown from "react-countdown";
// import { db } from "../firebase/firebase";

// // Define voting positions
// const positions = [
//   "Chairperson",
//   "Vice Chairperson",
//   "Treasurer",
//   "Secretary",
//   "Organizing Secretary",
// ];

// const Vote: React.FC = () => {
//   const [isVotingOpen, setIsVotingOpen] = useState(false);
//   const [votingEndTime, setVotingEndTime] = useState<Date | null>(null);
//   const [selectedVotes, setSelectedVotes] = useState<Record<string, string>>({});
//   const [candidates, setCandidates] = useState<Record<string, string[]>>({});
//   const [hasVoted, setHasVoted] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchVotingState = async () => {
//       const votingRef = doc(db, "voting", "state");
//       const votingDoc = await getDoc(votingRef);
//       if (votingDoc.exists()) {
//         const data = votingDoc.data();
//         setIsVotingOpen(data?.isVotingOpen || false);
//         setVotingEndTime(
//           data?.startTime ? new Date(data.startTime + 10 * 60000) : null
//         );
//       }
//     };

//     const fetchCandidates = async () => {
//       const candidatesRef = collection(db, "candidates");
//       const candidatesSnapshot = await getDocs(candidatesRef);
//       const candidatesList: Record<string, string[]> = {};
//       candidatesSnapshot.forEach((doc) => {
//         const candidateData = doc.data();
//         const position = candidateData.position;
//         if (position) {
//           if (!candidatesList[position]) {
//             candidatesList[position] = [];
//           }
//           candidatesList[position].push(candidateData.name);
//         }
//       });
//       setCandidates(candidatesList);
//     };

//     const checkIfUserHasVoted = async () => {
//       const userId = "user_id"; // Replace with actual user ID (e.g., from Firebase Authentication)
//       const votesRef = collection(db, "votes");
//       const userVoteQuery = query(votesRef, where("userId", "==", userId));
//       const querySnapshot = await getDocs(userVoteQuery);

//       if (!querySnapshot.empty) {
//         setHasVoted(true);
//       }
//     };

//     fetchVotingState();
//     fetchCandidates();
//     checkIfUserHasVoted();
//   }, []);

//   // Handle vote selection
//   const handleVoteChange = (position: string, candidate: string) => {
//     setSelectedVotes((prev) => ({
//       ...prev,
//       [position]: candidate,
//     }));
//   };

//   const handleSubmitVote = async () => {
//     try {
//       const userId = "user_id"; // Replace with actual user ID (e.g., from Firebase Authentication)

//       // Check if the user has already voted
//       const votesRef = collection(db, "votes");
//       const userVoteQuery = query(votesRef, where("userId", "==", userId));
//       const querySnapshot = await getDocs(userVoteQuery);

//       if (!querySnapshot.empty) {
//         alert("You have already voted. Each user is allowed to vote only once.");
//         return;
//       }

//       // Store the user's votes in Firestore
//       await addDoc(votesRef, {
//         userId, // Current user's ID
//         votes: selectedVotes,
//         timestamp: new Date(),
//       });

//       // Redirect user after vote submission
//       navigate("/thank-you");
//     } catch (error) {
//       console.error("Error submitting vote:", error);
//       alert("An error occurred while submitting your vote. Please try again.");
//     }
//   };

//   const countdownRenderer = ({
//     minutes,
//     seconds,
//   }: {
//     minutes: number;
//     seconds: number;
//   }) => <span>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</span>;

//   if (hasVoted) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           Thank you for voting!
//         </h1>
//         <p className="text-lg text-gray-600">
//           You have already cast your vote. Have a great day!
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         Vote for Your Leaders
//       </h1>

//       {isVotingOpen ? (
//         <>
//           <div className="space-y-6">
//             {positions.map((position) => (
//               <div
//                 key={position}
//                 className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md"
//               >
//                 <h2 className="text-xl font-semibold text-gray-700">
//                   {position}
//                 </h2>
//                 <div className="space-y-2">
//                   {candidates[position]?.map((candidate, index) => (
//                     <label key={index} className="flex items-center">
//                       <input
//                         type="radio"
//                         name={position}
//                         value={candidate}
//                         onChange={() => handleVoteChange(position, candidate)}
//                         checked={selectedVotes[position] === candidate}
//                         className="mr-2"
//                       />
//                       {candidate}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6">
//             <button
//               onClick={handleSubmitVote}
//               disabled={Object.keys(selectedVotes).length < positions.length}
//               className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg disabled:opacity-50"
//             >
//               Submit Vote
//             </button>
//           </div>
//         </>
//       ) : (
//         <p className="text-lg text-red-600">
//           Voting is not open yet or has ended.
//         </p>
//       )}

//       {votingEndTime && new Date() < votingEndTime && (
//         <div className="mt-6">
//           <p className="text-lg text-gray-700">Time remaining:</p>
//           <Countdown date={votingEndTime} renderer={countdownRenderer} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Vote;










import React, { useEffect, useState } from "react";
import { doc, onSnapshot, collection, getDocs, addDoc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import { db } from "../firebase/firebase";
import { auth } from "../firebase/firebase"; // Assuming you have Firebase Authentication set up

const positions = [
  "Chairperson",
  "Vice Chairperson",
  "Treasurer",
  "Secretary",
  "Organizing Secretary",
];

const Vote: React.FC = () => {
  const [isVotingOpen, setIsVotingOpen] = useState(false);
  const [votingEndTime, setVotingEndTime] = useState<Date | null>(null);
  const [selectedVotes, setSelectedVotes] = useState<Record<string, string>>({});
  const [candidates, setCandidates] = useState<Record<string, string[]>>({});
  const [hasVoted, setHasVoted] = useState(false); // Track if the user has voted
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    // Listen for real-time updates to the voting state
    const votingRef = doc(db, "voting", "state");
    const unsubscribeVotingState = onSnapshot(votingRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setIsVotingOpen(data?.isVotingOpen || false);
        setVotingEndTime(data?.startTime ? new Date(data.startTime + 60 * 60000) : null);
      }
    });

    // Fetch candidates
    const fetchCandidates = async () => {
      const candidatesRef = collection(db, "candidates");
      const candidatesSnapshot = await getDocs(candidatesRef);
      const candidatesList: Record<string, string[]> = {};
      candidatesSnapshot.forEach((doc) => {
        const candidateData = doc.data();
        const position = candidateData.position;
        if (position) {
          if (!candidatesList[position]) {
            candidatesList[position] = [];
          }
          candidatesList[position].push(candidateData.name);
        }
      });
      setCandidates(candidatesList);
    };

    // Check if the user has voted
    const checkIfVoted = async () => {
      if (user) {
        const voterRef = doc(db, "voters", user.uid);
        const voterDoc = await getDoc(voterRef);
        if (voterDoc.exists() && voterDoc.data()?.hasVoted) {
          setHasVoted(true);
        }
      }
    };

    fetchCandidates();
    checkIfVoted();

    return () => {
      unsubscribeVotingState(); // Clean up the listener
    };
  }, [user]);

  const handleVoteChange = (position: string, candidate: string) => {
    setSelectedVotes((prev) => ({
      ...prev,
      [position]: candidate,
    }));
  };

  // const handleSubmitVote = async () => {
  //   if (user) {
  //     const votesRef = collection(db, "votes");
  //     await addDoc(votesRef, {
  //       userId: user.uid,
  //       votes: selectedVotes,
  //       timestamp: new Date(),
  //     });

  //     const voterRef = doc(db, "voters", user.uid);
  //     await updateDoc(voterRef, {
  //       hasVoted: true,
  //     });

  //     navigate("/thank-you");
  //   }
  // };




  const handleSubmitVote = async () => {
    if (user) {
      const votesRef = collection(db, "votes");
      const voterRef = doc(db, "voters", user.uid);
  
      try {
        // Save the user's votes
        await addDoc(votesRef, {
          userId: user.email,
          votes: selectedVotes,
          timestamp: new Date(),
        });
  
        // Check if the voter document exists
        const voterDoc = await getDoc(voterRef);
  
        if (voterDoc.exists()) {
          // Update the existing document
          await updateDoc(voterRef, {
            hasVoted: true,
          });
        } else {
          // Create a new document if it doesn't exist
          await setDoc(voterRef, {
            hasVoted: true,
          });
        }
  
        // Redirect the user after submitting the vote
        navigate("/thank-you");
      } catch (error) {
        console.error("Error submitting vote:", error);
      }
    } else {
      console.error("User is not authenticated.");
    }
  };
  


  const countdownRenderer = ({ minutes, seconds }: { minutes: number; seconds: number }) => (
    <span>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</span>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Vote for Your Leaders</h1>

      {isVotingOpen ? (
        hasVoted ? (
          <p className="text-lg text-red-600">You have already voted. Thank you!</p>
        ) : (
          <>
            <div className="space-y-6">
              {positions.map((position) => (
                <div key={position} className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700">{position}</h2>
                  <div className="space-y-2">
                    {candidates[position]?.map((candidate, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="radio"
                          name={position}
                          value={candidate}
                          onChange={() => handleVoteChange(position, candidate)}
                          checked={selectedVotes[position] === candidate}
                          className="mr-2"
                        />
                        {candidate}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={handleSubmitVote}
                disabled={Object.keys(selectedVotes).length < positions.length}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg disabled:opacity-50"
              >
                Submit Vote
              </button>
            </div>
          </>
        )
      ) : (
        <p className="text-lg text-red-600">Voting is not open yet or has ended.</p>
      )}

      {votingEndTime && new Date() < votingEndTime && (
        <div className="mt-6">
          <p className="text-lg text-gray-700">Time remaining:</p>
          <Countdown date={votingEndTime} renderer={countdownRenderer} />
        </div>
      )}
    </div>
  );
};

export default Vote;

