import React, { useContext } from "react"; // 1. useContext import kiya
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext"; // 2. Context import kiya

const Orders = () => {
  const { orders } = useContext(GeneralContext);

  return (
    <div className="orders">
      {/* Agar orders empty hain to purana block dikhao */}
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-list" style={{ padding: "20px", width: "100%" }}>
          <h3 style={{ marginBottom: "20px" }}>All Orders ({orders.length})</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eee", color: "#9b9b9b", fontSize: "14px" }}>
                <th style={{ padding: "10px 0" }}>Instrument</th>
                <th>Type</th>
                <th>Qty.</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #f4f4f4", fontSize: "15px" }}>
                  <td style={{ padding: "12px 0", fontWeight: "500" }}>{order.name}</td>
                  <td style={{ color: order.mode === "BUY" ? "#387ed1" : "#df514c", fontWeight: "500" }}>
                    {order.mode}
                  </td>
                  <td>{order.qty}</td>
                  <td>₹{order.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;


// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;
