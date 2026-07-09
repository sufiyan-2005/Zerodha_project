import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (mobile.length !== 10 || !username.trim()) {
      return alert("Please enter a valid 10-digit mobile and a valid name!");
    }

    // LocalStorage mein save karo taaki dashboard read kar sake
    localStorage.setItem("traderName", username);

    alert(`Account created successfully for ${username}! Redirecting to Login...`);
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src="https://zerodha.com/static/images/landing.png" alt="Signup Graphic" />
      </div>
      
      <div className="signup-right">
        <h2>Join Kite</h2>
        <p>Create an account to start trading</p>
        
        <form onSubmit={handleSignupSubmit}>
          <div className="input-group" style={{ marginBottom: "15px" }}>
            <input 
              type="text" 
              placeholder="Your Name / Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
              style={{ marginLeft: "0px", width: "100%" }}
            />
          </div>

          <div className="input-group">
            <span style={{ color: "#888", fontWeight: "bold" }}>+91</span>
            <input 
              type="text" 
              maxLength="10"
              placeholder="Mobile number" 
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required 
            />
          </div>
          
          <p className="terms">You will use this mobile number for secure OTP logins</p>
          <button type="submit" className="btn-continue">Continue to Login</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "15px", fontSize: "20px", color: "#666" }}>
  Already have an account? <Link to="/login" style={{ color: "#387ed1", textDecoration: "none", fontWeight: "bold" }}>Login here</Link>
</p>
      </div>
    </div>
  );
}

export default Signup;


// import React, { useState } from 'react';
// import './Signup.css';

// const Signup = () => {
//   const [mobile, setMobile] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(mobile.length === 10) {
//       alert("Account created successfully! Please login.");
//       window.location.href = "/login";
//     } else {
//       alert("Please enter a valid 10-digit mobile number");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-left">
//         <img src="https://zerodha.com/static/images/landing.png" alt="Signup Graphic" style={{width:"100%"}}/>
//       </div>
//       <div className="signup-right">
//         <h2>Signup now</h2>
//         <p>Or track your existing application.</p>
        
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <span style={{ color: "#888", fontWeight: "bold" }}>+91</span>
//             <input 
//               type="text" 
//               placeholder="Mobile number" 
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               maxLength="10"
//               required 
//             />
//           </div>
//           <p className="terms">You will receive an OTP on your number</p>
//           <button type="submit" className="btn-continue">Continue</button>
//         </form>
        
//         <p className="login-link" style={{ marginTop: "20px", cursor: "pointer" }} onClick={() => window.location.href="/login"}>
//           Already have an account? Login
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

