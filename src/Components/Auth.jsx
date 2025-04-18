// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import React, { useState,useEffect } from "react";
// import auth from "../auth/firebase.js";

// const Auth = () => {
//     useEffect(() => {
//         window.recaptchaVerifier = null;
//       }, []);
//   const [num, setNum] = useState("");
//   const [confirmation, setConfirmation] = useState(null);
//   const [otp, setOtp] = useState("");
//   const [user, setUser] = useState(null);
// const setupRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: () => {
//             console.log("reCAPTCHA solved");
//           },
//         },
//         auth
//       );
//     }
//   };

//   const SendOTP = async () => {
//     if(num.length<10){
//         return;
//     }
//     setupRecaptcha();
//     console.log("run");
//     const appVerifier = window.recaptchaVerifier;
//     if(appVerifier==undefined){
//         alert("not getting the thing");
//     }

//     try {
//       const confirmation = await signInWithPhoneNumber(auth,`+91${num}`, appVerifier);
//       setConfirmation(confirmation);
//       alert("OTP sent!");
//     } catch (error) {
//       console.error("Error during signInWithPhoneNumber", error);
//     }
//   };

//   const VerifyOTP = async () => {
//     try {
//       await confirmation.confirm(otp);
//       alert("Phone number verified!");
//     } catch (error) {
//       alert("Invalid OTP");
//     }
//   };

//   return (
//     <div className="flex justify-center h-screen items-center bg-gray-500">
//       <div className="flex flex-col bg-white p-7 h-72 w-96 gap-5 rounded-xl">
//         <div className="flex w-full justify-between">
//           {" "}
//           <h1 className="font-semibold text-lg">
//             Enter your mobile number
//           </h1>{" "}
//           <h1 className="text-xl font-bold relative bottom-3">X</h1>
//         </div>

//         <div className="flex items-center gap-2">
//           <p className="font-semibold text-lg">+91</p>{" "}
//           <input
//             className="border-1 w-full border-slate-400 rounded-lg px-6 py-2 focus:outline-primary"
//             type="tel"
//             value={num}
//             onChange={(e) => {
//               const value = e.target.value;
//               if (/^\d*$/.test(value)) {
//                 setNum(value);
//               }
//             }}
//             maxLength={10}
//             placeholder="Eg: 9876543210"
//           />{" "}
//         </div>
//         <div className="flex flex-col  gap-1">
//           <p className="py-2  text-xs  font-light border-b-1 border-gray-200">
//             By continuing, you agree to the Apna’s Terms of service and Privacy
//             Policy
//           </p>
//           <button
//             onClick={SendOTP}
//             className={` ${
//               num.length == 10 ? "text-white bg-primary cursor-pointer" : ""
//             } border-1 px-4 py-2 border-gray-200 text-gray-500 bg-gray-400 w-full`}
//           >
//             NEXT
//           </button>
//           {confirmation && (
//             <div>
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 className="border p-2 rounded"
//               />
//               <button
//                 onClick={VerifyOTP}
//                 className="bg-blue-600 text-white py-2 rounded"
//               >
//                 Verify OTP
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <div id="recaptcha-container"></div>
//     </div>
//   );
// };

// export default Auth;
