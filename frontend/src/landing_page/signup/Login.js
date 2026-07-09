import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false); // TO control flow
  const [loading, setLoading] = useState(false);

  // when user submit mobile number
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (mobile.length !== 10) return alert("Enter valid 10-digit number");

    setLoading(true);
    try {
      const response = await axios.post('https://zerodha-project-o0ky.onrender.com/send-otp', { mobile });
      if (response.data.success) {
        alert("OTP sent! Check your backend terminal (Default OTP :- 123456).");
        setIsOtpSent(true); // OTP field 
      }
    } catch (err) {
      alert("Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // when user login with OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://zerodha-project-o0ky.onrender.com/verify-otp', { mobile, otp });
      if (response.data.success) {
  alert("Login Successful! Redirecting to Dashboard...");
  const signupName = localStorage.getItem("traderName") || "User";
  window.location.href = `http://localhost:3000/?name=${encodeURIComponent(signupName)}`; 
}
    } catch (err) {
      alert(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card-container">
        <div className="login-brand-logo">
          <img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha Logo" />
        </div>
        
        <h1 className="login-title">Login to Kite</h1>
        <p className="login-subtitle">
          {!isOtpSent ? "Enter your mobile to receive OTP" : `Enter the OTP sent to +91 ${mobile}`}
        </p>
        
        {/* Step 1: Mobile Form */}
        {!isOtpSent ? (
          <form onSubmit={handleSendOtp} className="login-form-element">
            <div className="animated-input-group">
              <input 
                type="text" 
                maxLength="10"
                placeholder="Mobile number" 
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="login-submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send OTP"} <span>→</span>
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="login-form-element step-fade-in">
            <div className="animated-input-group">
              <input 
                type="text" 
                maxLength="6"
                placeholder="Enter 6-Digit OTP" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="login-submit-btn verification-btn mb-2" disabled={loading}>
              {loading ? "Verifying..." : "Verify & Login"}
            </button>
            <p className="resend-link mt-3" onClick={() => setIsOtpSent(false)}>Change Mobile Number</p>
          </form>
        )}

        <div className="login-footer-links fs-5">
          <span onClick={() => window.location.href="/signup"}>New to Zerodha? Signup</span>
        </div>
      </div>
    </div>
  );
};

export default Login;





// import React, { useState } from 'react';
// import axios from 'axios';
// import './Signup.css'; // Tumhara original signup css hi use hoga

// const Login = () => {
//   const [mobile, setMobile] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false); // OTP flow control karne ke liye
//   const [loading, setLoading] = useState(false);

//   // 1. Mobile Number Submit karne ke liye
//   const handleSendOtp = async (e) => {
//     e.preventDefault();
//     if (mobile.length !== 10) return alert("Please enter a valid 10-digit mobile number");

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:3002/send-otp', { mobile });
//       if (response.data.success) {
//         alert("OTP sent! VS Code ke backend terminal mein OTP check karo.");
//         setIsOtpSent(true); // OTP field reveal karega
//       }
//     } catch (err) {
//       alert("Error sending OTP. Check if Backend is running.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 2. OTP Verify karke Dashboard bhejne ke liye
//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:3002/verify-otp', { mobile, otp });
//       if (response.data.success) {
// if (response.data.success) {
//   alert("Login Successful! Redirecting to Dashboard...");
//     window.location.href = "http://localhost:3001/"; 
// }
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Invalid OTP! Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       {/* Left Side Static Graphic - Authentic Design */}
//       <div className="signup-left">
//         <img src="https://zerodha.com/static/images/landing.png" alt="Login Graphic" />
//       </div>

//       {/* Right Side Live Dynamic Form */}
//       <div className="signup-right">
//         <h2>Login to Kite</h2>
//         <p>
//           {!isOtpSent 
//             ? "Enter your registered mobile number to receive OTP." 
//             : `Enter the 6-digit OTP sent to +91 ${mobile}`
//           }
//         </p>
        
//         {/* Step 1: Agar OTP nahi bheja gaya, toh Mobile form dikhao */}
//         {!isOtpSent ? (
//           <form onSubmit={handleSendOtp}>
//             <div className="input-group">
//               <span style={{ color: "#888", fontWeight: "bold" }}>+91</span>
//               <input 
//                 type="text" 
//                 maxLength="10"
//                 placeholder="Mobile number" 
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 required 
//               />
//             </div>
//             <p className="terms">You will receive a secure OTP code via SMS</p>
//             <button type="submit" className="btn-continue" disabled={loading}>
//               {loading ? "Sending..." : "Send OTP"}
//             </button>
//           </form>
//         ) : (
//           /* Step 2: Agar OTP chala gaya, toh OTP box auto-reveal hoga */
//           <form onSubmit={handleVerifyOtp} className="step-fade-in">
//             <div className="input-group">
//               <input 
//                 type="text" 
//                 maxLength="6"
//                 placeholder="Enter 6-Digit OTP" 
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 required 
//                 style={{ marginLeft: "0px" }} // Full width padding alignment ke liye
//               />
//             </div>
//             <p className="terms" style={{ color: "#387ed1", cursor: "pointer" }} onClick={() => setIsOtpSent(false)}>
//               ← Change Mobile Number
//             </p>
//             <button type="submit" className="btn-continue" style={{ backgroundColor: "#4caf50" }} disabled={loading}>
//               {loading ? "Verifying..." : "Verify & Login"}
//             </button>
//           </form>
//         )}

//         <p className="login-link" style={{ marginTop: "30px", cursor: "pointer" }} onClick={() => window.location.href="/signup"}>
//           New to Zerodha? Signup now
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
