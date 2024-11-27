// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import React, { useState } from "react";
// import { auth, googleProvider } from "../firebase/firebase";


// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   // Email Login
//   const handleEmailLogin = async (): Promise<void> => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("Logged in with email:", userCredential.user);
//     } catch (error) {
//       console.error("Email Login Error:", (error as Error).message);
//     }
//   };

//   // Google Login
//   const handleGoogleLogin = async (): Promise<void> => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       console.log("Logged in with Google:", result.user);
//     } catch (error) {
//       console.error("Google Login Error:", (error as Error).message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label className="block text-gray-600 font-medium mb-2">Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Password Field */}
//         <div className="mb-6">
//           <label className="block text-gray-600 font-medium mb-2">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your password"
//           />
//         </div>

//         {/* Buttons */}
//         <button
//           onClick={handleEmailLogin}
//           className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
//         >
//           Login with Email
//         </button>

//         <div className="text-center text-gray-500 my-4">OR</div>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
//         >
//           Login with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";
// import { auth, googleProvider } from "../firebase/firebase";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const navigate = useNavigate();

//   // Email Login
//   const handleEmailLogin = async (): Promise<void> => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("Logged in with email:", userCredential.user);
//       navigate("/"); // Redirect to Home
//     } catch (error) {
//       console.error("Email Login Error:", (error as Error).message);
//     }
//   };

//   // Google Login
//   const handleGoogleLogin = async (): Promise<void> => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       console.log("Logged in with Google:", result.user);
//       navigate("/"); // Redirect to Home
//     } catch (error) {
//       console.error("Google Login Error:", (error as Error).message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         {/* Email Field */}
//         {/* <div className="mb-4">
//           <label className="block text-gray-600 font-medium mb-2">Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Password Field *
//         <div className="mb-6">
//           <label className="block text-gray-600 font-medium mb-2">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your password"
//           />
//         </div> */}

//         {/* Buttons */}
//         {/* <button
//           onClick={handleEmailLogin}
//           className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
//         >
//           Login with Email
//         </button> */}

//         <div className="text-center text-gray-500 my-4">OR</div>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
//         >
//           Login with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;



























// import { signInWithEmailAndPassword, signInWithPopup, fetchSignInMethodsForEmail } from "firebase/auth";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, googleProvider } from "../firebase/firebase";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const navigate = useNavigate();

//   // Email Login
//   const handleEmailLogin = async (): Promise<void> => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("Logged in with email:", userCredential.user);
//       navigate("/"); // Redirect to Home
//     } catch (error) {
//       console.error("Email Login Error:", (error as Error).message);
//     }
//   };

//   // Google Login with Authentication Email Check
//   const handleGoogleLogin = async (): Promise<void> => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       if (!user.email) {
//         throw new Error("No email found for this user.");
//       }

//       // Check if the email is registered in Firebase Authentication
//       const signInMethods = await fetchSignInMethodsForEmail(auth, user.email);
//       if (signInMethods.length === 0) {
//         throw new Error("Your email is not authorized to log in.");
//       }

//       console.log("Logged in with Google:", user);
//       navigate("/home"); // Redirect to Home
//     } catch (error) {
//       console.error("Google Login Error:", (error as Error).message);
//       alert((error as Error).message); // Display error to the user
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
//         >
//           Login with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, db, googleProvider } from "../firebase/firebase";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const navigate = useNavigate();

//   // Email Login
//   const handleEmailLogin = async (): Promise<void> => {
//     try {
//       const userDoc = await getDoc(doc(db, "allowedUsers", email));
//       if (!userDoc.exists()) {
//         alert("This email is not registered. Please contact admin.");
//         return;
//       }

//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("Logged in with email:", userCredential.user);
//       navigate("/"); // Redirect to Home
//     } catch (error) {
//       console.error("Email Login Error:", (error as Error).message);
//     }
//   };

//   // Google Login
//   const handleGoogleLogin = async (): Promise<void> => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const email = result.user.email;

//       const userDoc = await getDoc(doc(db, "allowedUsers", email!));
//       if (!userDoc.exists()) {
//         alert("This email is not registered. Please contact admin.");
//         return;
//       }

//       console.log("Logged in with Google:", result.user);
//       navigate("/"); // Redirect to Home
//     } catch (error) {
//       console.error("Google Login Error:", (error as Error).message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         <div className="mb-4">
//           <label className="block text-gray-600 font-medium mb-2">Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-600 font-medium mb-2">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your password"
//           />
//         </div>

//         <button
//           onClick={handleEmailLogin}
//           className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
//         >
//           Login with Email
//         </button>

//         <div className="text-center text-gray-500 my-4">OR</div>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
//         >
//           Login with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, db, googleProvider } from "../firebase/firebase";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const navigate = useNavigate();

//   // Email Login
//   const handleEmailLogin = async (): Promise<void> => {
//     try {
//       // Check if the email is in the allowedUsers collection
//       const userDoc = await getDoc(doc(db, "allowedUsers", email));
//       if (!userDoc.exists()) {
//         alert("This email is not registered. Please contact admin.");
//         return; // Exit early if the email is not registered
//       }

//       // Proceed to sign in only if the email is registered
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("Logged in with email:", userCredential.user);
//       navigate("/"); // Redirect to Home
//     } catch (error) {
//       console.error("Email Login Error:", (error as Error).message);
//       alert("Login failed. Please check your credentials and try again.");
//     }
//   };

//   // Google Login
//   const handleGoogleLogin = async (): Promise<void> => {
//     try {
//       // First, check if the email is registered in the Firestore 'allowedUsers' collection
//       const result = await signInWithPopup(auth, googleProvider);
//       const userEmail = result.user.email;
  
//       // Check if email exists before proceeding
//       if (!userEmail) {
//         alert("Google login failed. No email found.");
//         return; // Exit early if no email is found
//       }
  
//       // Check if the email is registered in the Firestore collection
//       const userDoc = await getDoc(doc(db, "allowedUsers", userEmail));
//       if (!userDoc.exists()) {
//         alert("This email is not registered. Please contact admin.");
//         return; // Do not proceed with login if the email is not in the allowed list
//       }
  
//       // Proceed if the email is found in the allowedUsers collection
//       console.log("Logged in with Google:", result.user);
//       navigate("/"); // Redirect to Home or desired page
  
//     } catch (error) {
//       console.error("Google Login Error:", (error as Error).message);
//       alert("Google login failed. Please try again.");
//     }
//   };
  

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

       

//         <div className="text-center text-gray-500 my-4">OR</div>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
//         >
//           Login with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, db, googleProvider } from "../firebase/firebase";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const navigate = useNavigate();

//   // Email Login
//   const handleEmailLogin = async (): Promise<void> => {
//     try {
//       // Check if the email is in the allowedUsers collection
//       const userDoc = await getDoc(doc(db, "allowedUsers", email));
//       if (!userDoc.exists()) {
//         alert("This email is not registered. Please contact admin.");
//         return; // Exit early if the email is not registered
//       }

//       // Proceed to sign in only if the email is registered
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("Logged in with email:", userCredential.user);
//       navigate("/"); // Redirect to Home
//     } catch (error) {
//       console.error("Email Login Error:", (error as Error).message);
//       alert("Login failed. Please check your credentials and try again.");
//     }
//   };

//   // Google Login
//   const handleGoogleLogin = async (): Promise<void> => {
//     try {
//       // First, sign in with Google
//       const result = await signInWithPopup(auth, googleProvider);
//       const userEmail = result.user.email;

//       // Now check if the email exists in the "allowedUsers" collection in Firestore
//       if (!userEmail) {
//         alert("Google login failed. No email found.");
//         return; // Exit early if no email is found
//       }

//       // Fetch the user document for this email in the allowedUsers collection
//       const userDoc = await getDoc(doc(db, "allowedUsers", userEmail));

//       if (!userDoc.exists()) {
//         // If the user is not found in the allowedUsers collection, show an alert and sign out
//         alert("This email is not registered. Please contact admin.");
//         await auth.signOut(); // Sign out the user immediately
//         return; // Exit early if the email is not registered
//       }

//       // If the email is registered, proceed to the app
//       console.log("Logged in with Google:", result.user);
//       navigate("/"); // Redirect to Home page or another page
//     } catch (error) {
//       console.error("Google Login Error:", (error as Error).message);
//       alert("Google login failed. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         {/* Email Login form */}
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-4 py-2 mb-4 border rounded-md"
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-2 mb-6 border rounded-md"
//           placeholder="Password"
//         />
//         <button
//           onClick={handleEmailLogin}
//           className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
//         >
//           Login with Email
//         </button>

//         <div className="text-center text-gray-500 my-4">OR</div>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
//         >
//           Login with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;






import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../firebase/firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Track loading state
  const navigate = useNavigate();

  // Email Login
  const handleEmailLogin = async (): Promise<void> => {
    setLoading(true); // Set loading to true when the login starts
    try {
      // Check if the email is in the allowedUsers collection
      const userDoc = await getDoc(doc(db, "allowedUsers", email));
      if (!userDoc.exists()) {
        alert("This email is not registered. Please contact admin.");
        setLoading(false); // Stop loading before exiting
        return; // Exit early if the email is not registered
      }
      else{

      // Proceed to sign in only if the email is registered
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in with email:", userCredential.user);
      navigate("/"); 
      }// Redirect to Home after successful login
    } catch (error) {
      console.error("Email Login Error:", (error as Error).message);
      alert("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false); // Stop loading after the operation completes
    }
  };

  // Google Login
  const handleGoogleLogin = async (): Promise<void> => {
    setLoading(true); // Set loading to true when the login starts
    try {
      // First, sign in with Google
      const result = await signInWithPopup(auth, googleProvider);
      const userEmail = result.user.email;

      // Now check if the email exists in the "allowedUsers" collection in Firestore
      if (!userEmail) {
        alert("Google login failed. No email found.");
        setLoading(false); // Stop loading before exiting
        return; // Exit early if no email is found
      }

      // Fetch the user document for this email in the allowedUsers collection
      const userDoc = await getDoc(doc(db, "allowedUsers", userEmail));

      if (!userDoc.exists()) {
        // If the user is not found in the allowedUsers collection, show an alert and sign out
        alert("This email is not registered. Please contact admin.");
        await auth.signOut(); // Sign out the user immediately to prevent session
        setLoading(false); // Stop loading before exiting
        return; // Exit early if the email is not registered
      }
      else{

      // If the email is registered, proceed to the app
      console.log("Logged in with Google:", result.user);
      navigate("/"); // Redirect to Home page or another page
      }
    } catch (error) {
      console.error("Google Login Error:", (error as Error).message);
      alert("Google login failed. Please try again.");
    } finally {
      setLoading(false); // Stop loading after the operation completes
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {/* Email Login form */}
        {/* <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md"
          placeholder="Email"
          disabled={loading} // Disable input during loading
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 border rounded-md"
          placeholder="Password"
          disabled={loading} // Disable input during loading
        />
        <button
          onClick={handleEmailLogin}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          disabled={loading} // Disable button during loading
        >
          {loading ? "Logging in..." : "Login with Email"}
        </button> */}

        <div className="text-center text-gray-500 my-4">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
          disabled={loading} // Disable button during loading
        >
          {loading ? "Logging in..." : "Login with Google"}
        </button>
      </div>
    </div>
  );
};

export default Login;
