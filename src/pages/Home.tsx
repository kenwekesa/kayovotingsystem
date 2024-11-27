







// import React, { useEffect, useState } from "react";
// import { doc, getDocs, updateDoc, setDoc, collection, onSnapshot, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import Countdown from "react-countdown";
// import { auth, db } from "../firebase/firebase";
// import { User } from "firebase/auth";

// interface HomeProps {
//   user: User;
// }

// const Home: React.FC<HomeProps> = ({ user }) => {
//   const navigate = useNavigate();
//   const [isVotingOpen, setIsVotingOpen] = useState(false);
//   const [votingEndTime, setVotingEndTime] = useState<Date | null>(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [hasVoted, setHasVoted] = useState(false);

//   // Fetch admin emails from Firestore
//   const fetchAdminEmails = async () => {
//     const adminsRef = collection(db, "admins");
//     const adminSnapshot = await getDocs(adminsRef);
//     const adminEmails: string[] = [];

//     adminSnapshot.forEach((doc) => {
//       const data = doc.data();
//       if (data?.email) {
//         adminEmails.push(data.email);
//       }
//     });

//     if (adminEmails.includes(user.email || "")) {
//       setIsAdmin(true); // Set admin status if the user's email is in the adminEmails list
//     }
//   };

//   useEffect(() => {
//     // Real-time listener for voting state
//     const votingRef = doc(db, "voting", "state");
//     const unsubscribe = onSnapshot(votingRef, (votingDoc) => {
//       if (votingDoc.exists()) {
//         const data = votingDoc.data();
//         setIsVotingOpen(data?.isVotingOpen || false);
//         setVotingEndTime(data?.startTime ? new Date(data.startTime + 60 * 60000) : null);

//         // Automatically close voting if the time has passed
//         if (data?.startTime && Date.now() > data.startTime + 60 * 60000) {
//           updateDoc(votingRef, { isVotingOpen: false, startTime: null });
//           setIsVotingOpen(false);
//         }
//       }
//     });

//     const checkUserVotingStatus = async () => {
//       const voterRef = doc(db, "voters", user.email || "unknown");
//       const voterDoc = await getDoc(voterRef);

//       if (voterDoc.exists()) {
//         setHasVoted(voterDoc.data()?.hasVoted || false);
//       } else {
//         // Initialize voter record if not found
//         await setDoc(voterRef, { hasVoted: false });
//         setHasVoted(false);
//       }
//     };

//     fetchAdminEmails(); // Fetch admin emails on mount
//     checkUserVotingStatus();

//     // Cleanup listener on component unmount
//     return () => unsubscribe();
//   }, [user]);

//   const openVoting = async () => {
//     const votingRef = doc(db, "voting", "state");
//     await updateDoc(votingRef, { isVotingOpen: true, startTime: Date.now() });
//     setIsVotingOpen(true);
//     setVotingEndTime(new Date(Date.now() + 60 * 60000));
//   };

//   const closeVoting = async () => {
//     const votingRef = doc(db, "voting", "state");
//     await updateDoc(votingRef, { isVotingOpen: false, startTime: null });
//     setIsVotingOpen(false);
//   };

//   const navigateToVote = () => {
//     if (hasVoted) {
//       alert("You have already voted!");
//     } else {
//       navigate("/vote");
//     }
//   };

//   const countdownRenderer = ({ minutes, seconds }: { minutes: number; seconds: number }) => (
//     <span className="text-2xl font-bold text-white bg-red-500 px-4 py-2 rounded-full shadow-lg">
//       {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
//     </span>
//   );

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user.displayName || "User"}!</h1>
//       {isAdmin && (
//         <div className="mb-6">
//           {!isVotingOpen ? (
//             <button
//               onClick={openVoting}
//               className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//             >
//               Open Polling
//             </button>
//           ) : (
//             <button
//               onClick={closeVoting}
//               className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
//             >
//               Close Polling
//             </button>
//           )}
//         </div>
//       )}

//       {isAdmin && (
//         <div className="mb-6">
//           <button
//             onClick={() => navigate("/register")}
//             className="mb-2 bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//           >
//             Add voters email
//           </button>
//           <br />
//           <button
//             onClick={() => navigate("/add-admin")}
//             className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//           >
//             Add Admin Email
//           </button>
//         </div>
//       )}



// {isAdmin && (
//         <div className="mb-6">
//           <button
//             onClick={() => navigate("/voters")}
//             className="mb-2 bg-red-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//           >
//             View Registered Voters
//           </button>
//           <br />
          
//         </div>
//       )}




//       <hr />

//       <div className="mb-6">
//         {isVotingOpen ? (
//           votingEndTime && new Date() < votingEndTime ? (
//             <div>
//               <p className="text-lg text-gray-700">
//                 Voting is open! Time remaining:{" "}
//                 <Countdown date={votingEndTime} renderer={countdownRenderer} />
//               </p>
//             </div>
//           ) : (
//             <p className="text-lg text-red-600">Voting has ended.</p>
//           )
//         ) : (
//           <p className="text-lg text-gray-700">Voting not opened</p>
//         )}
//       </div>
//       {!isAdmin && (
//         <button
//           onClick={navigateToVote}
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//           disabled={!isVotingOpen}
//         >
//           Go to Voting
//         </button>
//       )}
//       {isAdmin && (
//         <button
//           onClick={() => navigate("/results")}
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//         >
//           View Results
//         </button>
//       )}
//       <button
//         onClick={() => auth.signOut().then(() => navigate("/login"))}
//         className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Home;

















// import React, { useEffect, useState } from "react";
// import { doc, getDocs, updateDoc, setDoc, collection, onSnapshot, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import Countdown from "react-countdown";
// import { auth, db } from "../firebase/firebase";
// import { User } from "firebase/auth";

// interface HomeProps {
//   user: User;
// }

// const Home: React.FC<HomeProps> = ({ user }) => {
//   const navigate = useNavigate();
//   const [isVotingOpen, setIsVotingOpen] = useState(false);
//   const [votingEndTime, setVotingEndTime] = useState<Date | null>(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [hasVoted, setHasVoted] = useState(false);

//   // Fetch admin emails from Firestore
//   const fetchAdminEmails = async () => {
//     const adminsRef = collection(db, "admins");
//     const adminSnapshot = await getDocs(adminsRef);
//     const adminEmails: string[] = [];

//     adminSnapshot.forEach((doc) => {
//       const data = doc.data();
//       if (data?.email) {
//         adminEmails.push(data.email);
//       }
//     });

//     if (adminEmails.includes(user.email || "")) {
//       setIsAdmin(true); // Set admin status if the user's email is in the adminEmails list
//     }
//   };

//   useEffect(() => {
//     // Real-time listener for voting state
//     const votingRef = doc(db, "voting", "state");
//     const unsubscribe = onSnapshot(votingRef, (votingDoc) => {
//       if (votingDoc.exists()) {
//         const data = votingDoc.data();
//         setIsVotingOpen(data?.isVotingOpen || false);
//         setVotingEndTime(data?.startTime ? new Date(data.startTime + 60 * 60000) : null);

//         // Automatically close voting if the time has passed
//         if (data?.startTime && Date.now() > data.startTime + 60 * 60000) {
//           updateDoc(votingRef, { isVotingOpen: false, startTime: null });
//           setIsVotingOpen(false);
//         }
//       }
//     });

//     const checkUserVotingStatus = async () => {
//       const voterRef = doc(db, "voters", user.email || "unknown");
//       const voterDoc = await getDoc(voterRef);

//       if (voterDoc.exists()) {
//         setHasVoted(voterDoc.data()?.hasVoted || false);
//       } else {
//         // Initialize voter record if not found
//         await setDoc(voterRef, { hasVoted: false });
//         setHasVoted(false);
//       }
//     };

//     fetchAdminEmails(); // Fetch admin emails on mount
//     checkUserVotingStatus();

//     // Cleanup listener on component unmount
//     return () => unsubscribe();
//   }, [user]);

//   const openVoting = async () => {
//     const votingRef = doc(db, "voting", "state");
//     await updateDoc(votingRef, { isVotingOpen: true, startTime: Date.now() });
//     setIsVotingOpen(true);
//     setVotingEndTime(new Date(Date.now() + 60 * 60000));
//   };

//   const closeVoting = async () => {
//     const votingRef = doc(db, "voting", "state");
//     await updateDoc(votingRef, { isVotingOpen: false });
//     setIsVotingOpen(false);
//   };

//   const navigateToVote = () => {
//     if (hasVoted) {
//       alert("You have already voted!");
//     } else {
//       navigate("/vote");
//     }
//   };

//   const countdownRenderer = ({ minutes, seconds }: { minutes: number; seconds: number }) => (
//     <span className="text-2xl font-bold text-white bg-red-500 px-4 py-2 rounded-full shadow-lg">
//       {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
//     </span>
//   );

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user.displayName || "User"}!</h1>
//       {isAdmin && (
//         <div className="mb-6">
//           {!isVotingOpen ? (
//             <button
//               onClick={openVoting}
//               className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//             >
//               Open Polling
//             </button>
//           ) : (
//             <button
//               onClick={closeVoting}
//               className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
//             >
//               Close Polling
//             </button>
//           )}
//         </div>
//       )}

//       {isAdmin && (
//         <div className="mb-6">
//           <button
//             onClick={() => navigate("/register")}
//             className="mb-2 bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//           >
//             Add Voters Email
//           </button>
//           <br />
//           <button
//             onClick={() => navigate("/add-admin")}
//             className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//           >
//             Add Admin Email
//           </button>
//         </div>
//       )}

//       <hr />

//       <div className="mb-6">
//         {isVotingOpen ? (
//           votingEndTime && new Date() < votingEndTime ? (
//             <div>
//               <p className="text-lg text-gray-700">
//                 Voting is open! Time remaining:{" "}
//                 <Countdown date={votingEndTime} renderer={countdownRenderer} />
//               </p>
//             </div>
//           ) : (
//             <p className="text-lg text-red-600">Voting already ended.</p>
//           )
//         ) : (
//           <p className="text-lg text-gray-700">Voting not opened</p>
//         )}
//       </div>
//       {!isAdmin && (
//         <button
//           onClick={navigateToVote}
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//           disabled={!isVotingOpen}
//         >
//           Go to Voting
//         </button>
//       )}
//       {isAdmin && (
//         <div>
//           <button
//             onClick={() => navigate("/results")}
//             className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             View Results
//           </button>
//           <button
//             onClick={() => navigate("/voters")}
//             className="mt-4 bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800"
//           >
//             View Registered Voters
//           </button>
//         </div>
//       )}
//       <button
//         onClick={() => auth.signOut().then(() => navigate("/login"))}
//         className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Home;






import React, { useEffect, useState } from "react";
import { doc, getDocs, updateDoc, setDoc, collection, onSnapshot, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import { auth, db } from "../firebase/firebase";
import { User } from "firebase/auth";

interface HomeProps {
  user: User;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  const navigate = useNavigate();
  const [isVotingOpen, setIsVotingOpen] = useState(false);
  const [hasVotingEnded, setHasVotingEnded] = useState(false);
  const [votingEndTime, setVotingEndTime] = useState<Date | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  // Fetch admin emails from Firestore
  const fetchAdminEmails = async () => {
    const adminsRef = collection(db, "admins");
    const adminSnapshot = await getDocs(adminsRef);
    const adminEmails: string[] = [];

    adminSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data?.email) {
        adminEmails.push(data.email);
      }
    });

    if (adminEmails.includes(user.email || "")) {
      setIsAdmin(true);
    }
  };

  useEffect(() => {
    // Real-time listener for voting state
    const votingRef = doc(db, "voting", "state");
    const unsubscribe = onSnapshot(votingRef, (votingDoc) => {
      if (votingDoc.exists()) {
        const data = votingDoc.data();
        setIsVotingOpen(data?.isVotingOpen || false);
        setHasVotingEnded(data?.hasVotingEnded || false);
        setVotingEndTime(data?.startTime ? new Date(data.startTime + 60 * 60000) : null);

        // Automatically close voting if time has passed
        if (data?.startTime && Date.now() > data.startTime + 60 * 60000) {
          updateDoc(votingRef, {
            isVotingOpen: false,
            hasVotingEnded: true,
            startTime: null,
          });
          setIsVotingOpen(false);
          setHasVotingEnded(true);
        }
      }
    });

    const checkUserVotingStatus = async () => {
      const voterRef = doc(db, "voters", user.email || "unknown");
      const voterDoc = await getDoc(voterRef);

      if (voterDoc.exists()) {
        setHasVoted(voterDoc.data()?.hasVoted || false);
      } else {
        await setDoc(voterRef, { hasVoted: false });
        setHasVoted(false);
      }
    };

    fetchAdminEmails();
    checkUserVotingStatus();

    return () => unsubscribe();
  }, [user]);

  const openVoting = async () => {
    const votingRef = doc(db, "voting", "state");
    await updateDoc(votingRef, {
      isVotingOpen: true,
      hasVotingEnded: false,
      startTime: Date.now(),
    });
    setIsVotingOpen(true);
    setHasVotingEnded(false);
    setVotingEndTime(new Date(Date.now() + 60 * 60000));
  };

  const closeVoting = async () => {
    const votingRef = doc(db, "voting", "state");
    await updateDoc(votingRef, {
      isVotingOpen: false,
      hasVotingEnded: true,
      startTime: null,
    });
    setIsVotingOpen(false);
    setHasVotingEnded(true);
  };

  const navigateToVote = () => {
    if (hasVoted) {
      alert("You have already voted!");
    } else {
      navigate("/vote");
    }
  };

  const countdownRenderer = ({ minutes, seconds }: { minutes: number; seconds: number }) => (
    <span className="text-2xl font-bold text-white bg-red-500 px-4 py-2 rounded-full shadow-lg">
      {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
    </span>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user.displayName || "User"}!</h1>
      {isAdmin && (
        <div className="mb-6">
          {!isVotingOpen ? (
            <button
              onClick={openVoting}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Open Polling
            </button>
          ) : (
            <button
              onClick={closeVoting}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Close Polling
            </button>
          )}
        </div>
      )}


{isAdmin && (
        <div className="mb-6">
          <button
            onClick={() => navigate("/register")}
            className="mb-2 bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Add Voters Email
          </button>
          <br />
          <button
            onClick={() => navigate("/add-admin")}
            className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Add Admin Email
          </button>


          <br />
        <button
                    onClick={() => navigate("/voters")}
                    className="mt-4 bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800"
                  >
                    View Registered Voters
                  </button>
        </div>
      )}

      <hr />
      <div className="mb-6">
        {isVotingOpen ? (
          votingEndTime && new Date() < votingEndTime ? (
            <div>
              <p className="text-lg text-gray-700">
                Voting is open! Time remaining:{" "}
                <Countdown date={votingEndTime} renderer={countdownRenderer} />
              </p>
            </div>
          ) : (
            <p className="text-lg text-red-600">Voting already ended!</p>
          )
        ) : hasVotingEnded ? (
          <p className="text-lg text-red-600">Voting already ended!</p>
        ) : (
          <p className="text-lg text-gray-700">Voting not opened</p>
        )}
      </div>

      {!isAdmin && (
        <button
          onClick={navigateToVote}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
          disabled={!isVotingOpen}
        >
          Go to Voting
        </button>
      )}
      {isAdmin && (
        <div> 
        <button
          onClick={() => navigate("/results")}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          View Results
        </button>
      
         </div>
      )}
      <button
        onClick={() => auth.signOut().then(() => navigate("/login"))}
        className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;








// import React, { useEffect, useState } from "react";
// import {
//   doc,
//   getDocs,
//   updateDoc,
//   setDoc,
//   collection,
//   onSnapshot,
//   getDoc,
// } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import Countdown from "react-countdown";
// import { auth, db } from "../firebase/firebase";
// import { User } from "firebase/auth";

// interface HomeProps {
//   user: User;
// }

// const Home: React.FC<HomeProps> = ({ user }) => {
//   const navigate = useNavigate();
//   const [isVotingOpen, setIsVotingOpen] = useState(false);
//   const [hasVotingEnded, setHasVotingEnded] = useState(false);
//   const [votingEndTime, setVotingEndTime] = useState<Date | null>(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [hasVoted, setHasVoted] = useState(false);

//   // Fetch admin emails from Firestore
//   const fetchAdminEmails = async () => {
//     const adminsRef = collection(db, "admins");
//     const adminSnapshot = await getDocs(adminsRef);
//     const adminEmails: string[] = [];

//     adminSnapshot.forEach((doc) => {
//       const data = doc.data();
//       if (data?.email) {
//         adminEmails.push(data.email);
//       }
//     });

//     if (adminEmails.includes(user.email || "")) {
//       setIsAdmin(true);
//     }
//   };

//   useEffect(() => {
//     // Real-time listener for voting state
//     const votingRef = doc(db, "voting", "state");
//     const unsubscribe = onSnapshot(votingRef, (votingDoc) => {
//       if (votingDoc.exists()) {
//         const data = votingDoc.data();
//         setIsVotingOpen(data?.isVotingOpen || false);
//         setHasVotingEnded(data?.hasVotingEnded || false);
//         setVotingEndTime(
//           data?.startTime ? new Date(data.startTime + 60 * 60000) : null
//         );

//         // Automatically close voting if time has passed
//         if (data?.startTime && Date.now() > data.startTime + 60 * 60000) {
//           updateDoc(votingRef, {
//             isVotingOpen: false,
//             hasVotingEnded: true,
//             startTime: null,
//           });
//           setIsVotingOpen(false);
//           setHasVotingEnded(true);
//         }
//       }
//     });

//     const checkUserVotingStatus = async () => {
//       const voterRef = doc(db, "voters", user.email || "unknown");
//       const voterDoc = await getDoc(voterRef);

//       if (voterDoc.exists()) {
//         setHasVoted(voterDoc.data()?.hasVoted || false);
//       } else {
//         await setDoc(voterRef, { hasVoted: false });
//         setHasVoted(false);
//       }
//     };

//     fetchAdminEmails();
//     checkUserVotingStatus();

//     return () => unsubscribe();
//   }, [user]);

//   const openVoting = async () => {
//     const votingRef = doc(db, "voting", "state");
//     await updateDoc(votingRef, {
//       isVotingOpen: true,
//       hasVotingEnded: false,
//       startTime: Date.now(),
//     });
//     setIsVotingOpen(true);
//     setHasVotingEnded(false);
//     setVotingEndTime(new Date(Date.now() + 60 * 60000));
//   };

//   const closeVoting = async () => {
//     const votingRef = doc(db, "voting", "state");
//     await updateDoc(votingRef, {
//       isVotingOpen: false,
//       hasVotingEnded: true,
//       startTime: null,
//     });
//     setIsVotingOpen(false);
//     setHasVotingEnded(true);
//   };

//   const navigateToVote = () => {
//     if (hasVoted) {
//       alert("You have already voted!");
//       return;
//     }
//     navigate("/vote");
//   };

//   const countdownRenderer = ({
//     minutes,
//     seconds,
//   }: {
//     minutes: number;
//     seconds: number;
//   }) => (
//     <span className="text-2xl font-bold text-white bg-red-500 px-4 py-2 rounded-full shadow-lg">
//       {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
//     </span>
//   );

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         Welcome, {user.displayName || "User"}!
//       </h1>
//       {isAdmin && (
//         <div className="mb-6">
//           {!isVotingOpen ? (
//             <button
//               onClick={openVoting}
//               className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//             >
//               Open Polling
//             </button>
//           ) : (
//             <button
//               onClick={closeVoting}
//               className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
//             >
//               Close Polling
//             </button>
//           )}
//         </div>
//       )}

//       {isAdmin && (
//         <div className="mb-6">
//           <button
//             onClick={() => navigate("/register")}
//             className="mb-2 bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//           >
//             Add Voters Email
//           </button>
//           <br />
//           <button
//             onClick={() => navigate("/add-admin")}
//             className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
//           >
//             Add Admin Email
//           </button>
//         </div>
//       )}

//       <hr />
//       <div className="mb-6">
//         {isVotingOpen ? (
//           votingEndTime && new Date() < votingEndTime ? (
//             <div>
//               <p className="text-lg text-gray-700">
//                 Voting is open! Time remaining:{" "}
//                 <Countdown date={votingEndTime} renderer={countdownRenderer} />
//               </p>
//             </div>
//           ) : (
//             <p className="text-lg text-red-600">Voting already ended!</p>
//           )
//         ) : hasVotingEnded ? (
//           <p className="text-lg text-red-600">Voting already ended!</p>
//         ) : (
//           <p className="text-lg text-gray-700">Voting not opened</p>
//         )}
//       </div>

//       {!isAdmin && (
//         <button
//           onClick={navigateToVote}
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//           disabled={!isVotingOpen}
//         >
//           Go to Voting
//         </button>
//       )}
//       {isAdmin && (
//         <div>
//           <button
//             onClick={() => navigate("/results")}
//             className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//           >
//             View Results
//           </button>
//         </div>
//       )}
//       <button
//         onClick={() => auth.signOut().then(() => navigate("/login"))}
//         className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Home;
