import React, { useState, useEffect } from "react";

const Summary = () => {
  const [displayName, setDisplayName] = useState("User");

  useEffect(() => {
    // 1. URL se check karo kya "?name=Deepak" jaisa kuch aaya hai
    const queryParams = new URLSearchParams(window.location.search);
    const nameFromUrl = queryParams.get("name");

    if (nameFromUrl) {
      setDisplayName(nameFromUrl);
      // Isey dashboard (3001) ke local storage mein save karo taaki page refresh karne par naam na udd jaye
      localStorage.setItem("dashboardTraderName", nameFromUrl);
    } else {
      // 2. Agar URL mein naam nahi hai (Direct refresh kiya), toh dashboard ke local storage se purana naam uthao
      const savedName = localStorage.getItem("dashboardTraderName");
      if (savedName) {
        setDisplayName(savedName);
      }
    }
  }, []);

  return (
    <>
      <div className="username">
        <h1>Hi, {displayName}!</h1>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <h2>Equity</h2>
        </span>

        <div className="data">
          <div className="first">
            <h2>3.74k</h2>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary; 


// import React from "react";

// const Summary = () => {
//   return (
//     <>
//       <div className="username">
//         <h3>Hi, {}</h3>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Equity</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h2>3.74k</h2>
//             <p>Margin available</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Margins used <span>0</span>{" "}
//             </p>
//             <p>
//               Opening balance <span>3.74k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Holdings (13)</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3 className="profit">
//               1.55k <small>+5.20%</small>{" "}
//             </h3>
//             <p>P&L</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Current Value <span>31.43k</span>{" "}
//             </p>
//             <p>
//               Investment <span>29.88k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>
//     </>
//   );
// };

// export default Summary;
