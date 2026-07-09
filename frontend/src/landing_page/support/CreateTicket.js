import React, { useState } from "react";
import './CreateTicket.css'

function CreateTicket() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const supportData = [
    {
      id: "account",
      title: "Account Opening",
      icon: "➕",
      links: [<ul className="fs-4">
        <li><a>Resident individual</a></li>
        <li><a>Minor</a></li>
        <li><a>Non Resident Indian (NRI)</a></li>
        <li><a>Company, Partnership, HUF and LLP</a></li>
        <li><a>Glossary</a></li>
        </ul>
      ],
    },
    {
      id: "zerodha-account",
      title: "Your Zerodha Account",
      icon: "👤",
      links: [ <ul className="fs-4">
        <li><a>Your Profile</a></li>
        <li><a>Account modification</a></li>
        <li><a>Client Master Report (CMR) and Depository Participant (DP)</a></li>
        <li><a>Nomination</a></li>
        <li><a>Transfer and conversion of securities</a></li>
        </ul>
      ],
    },
    {
      id: "kite",
      title: "Kite",
      icon: "🌐",
      links: [ <ul className="fs-4">
        <li><a>IPO</a></li>
        <li><a>Trading FAQs</a></li>
        <li><a>Margin Trading Facility (MTF) and Margins</a></li>
        <li><a>Charts and orders</a></li>
        <li><a>Alerts and Nudges</a></li>
        <li><a>General</a></li>
        </ul>
      ],
    },
    {
      id: "funds",
      title: "Funds",
      icon: "🪙",
      links: [ <ul className="fs-4">
        <li><a>Add money</a></li>
        <li><a>Withdraw money</a></li>
        <li><a>Add bank accounts</a></li>
        <li><a>eMandates</a></li>
         </ul>
    ],
    },
    {
      id: "console",
      title: "Console",
      icon: "📊",
      links: [ <ul className="fs-4">
        <li><a>Portfolio</a></li>
        <li><a>Corporate actions</a></li>
        <li><a>Funds statement</a></li>
        <li><a>Reports</a></li>
        <li><a>Profile</a></li>
        <li><a>Segments</a></li>
        </ul>
      ],
    },
    {
      id: "coin",
      title: "Coin",
      icon: "🪙",
      links: [ <ul className="fs-4">
        <li><a>Coin app</a></li>
        <li><a>Mutual funds basics</a></li>
        <li><a>Redemption</a></li>
        <li><a>NFO</a></li>
         </ul>
      ],
    },
  ];

  return (
    <div className="container-fluid mb-5 mt-5" style={{ maxWidth: "85%", color: "#444" }}>
      {/* --- Main Grid Layout --- */}
      <div className="row g-5">
        {/* Left Column: Custom Accordion Links */}
        <div className="col-md-7 col-lg-8">
          {supportData.map((item) => (
            <div key={item.id} className="mb-4 border-bottom pb-3">
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
                onClick={() => toggleSection(item.id)}
              >
                <div className="fs-5 text-dark d-flex align-items-center gap-3">
                  <span className="text-muted">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <span className="text-primary fs-5">
                  {openSection === item.id ? "▲" : "▼"}
                </span>
              </div>

              {/* Collapsible Content */}
              {openSection === item.id && (
                <ul className="list-unstyled ps-5 mt-5">
                  {item.links.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={`#${link}`} className="text-decoration-none text-primary" style={{ fontSize: "0.95rem" }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Sidebar (Sticky/Featured Links & Quick Links) */}
        <div className="col-md-5 mt-5 mb-5 col-lg-4 ">
          {/* Featured Notice Box */}
          <div
            className="p-3 mb-4 "
            style={{
              backgroundColor:"#f0e2ce",
              borderLeft: "8px solid #ff9800",
              fontSize: "0.95rem",
            }}
          >
            <ul className="ps-3 mb-0 text-muted" >
              <li className="mb-2">
                <a href="#surveillance" className="text-decoration-none text-primary">
                  Surveillance measure on scrips - June 2026
                </a>
              </li>
              <li>
                <a href="#leverages" className="text-decoration-none text-primary">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links List */}
          <div >
            <table className="table border border-3 rounded  fs-4"  >
              <thead >
                <tr>
                  <th style={{backgroundColor:"#e8e8e8"}}> <h4 className="fw-bold text-dark" >Quick links</h4></th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                 <a href="#track" className="text-decoration-none text-primary">1. Track account opening</a>
                </td>
              </tr>
             
              <tr>
                <td>
                <a href="#segment" className="text-decoration-none text-primary">2. Track segment activation</a>
                </td>
              </tr>
              <tr>
                <td>
                <a href="#margins" className="text-decoration-none text-primary">3. Intraday margins</a>
                </td>
              </tr>

              <tr>
                <td>
                <a href="#manual" className="text-decoration-none text-primary">4. Kite user manual</a>
                </td>
              </tr>

              <tr>
                <td>
                <a href="#ticket" className="text-decoration-none text-primary">5. Learn how to create a ticket</a>
                </td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;




// import React from 'react';

// function CreateTicket() {
//     return ( 
//         <h1>CreateTicket</h1>
//      );
// }

// export default CreateTicket;