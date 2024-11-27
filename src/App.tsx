// import React, { useEffect, useState } from "react";
// import { onAuthStateChanged, User } from "firebase/auth";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import { auth } from "./firebase/firebase";
// import Login from "./pages/Login";
// import Home from "./pages/Home";


// const App: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* If the user is authenticated, redirect to Home; otherwise, show Login */}
//         <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
//         <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { auth } from "./firebase/firebase";
import Vote from "./pages/Vote";
import ThankYou from "./pages/ThankYo";
import AdminDashboard from "./pages/AdminDash";
import Register from "./pages/Register";
import AddAdmin from "./pages/AddAdmins";
import RegisteredVoters from "./pages/Voters";


const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
        <Route path="/login" element= {<Login />}/>
        <Route path="/vote" element={user ? <Vote /> : <Navigate to="/login" />} />
        <Route path="/results" element={user ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/register" element={user ? <Register /> : <Navigate to="/login" />} />
        <Route path="/add-admin" element={user ? <AddAdmin /> : <Navigate to="/login" />} />
        <Route path="/voters" element={user ? <RegisteredVoters /> : <Navigate to="/login" />} />
        <Route path='/thank-you' element={<ThankYou />} />
        

        
      </Routes>
    </Router>
  );
};

export default App;
