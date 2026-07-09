import React from 'react';

function Brokerage() {
  return (
    <div className="container mt-5">

      {/* Section 1: Charges for account opening */}
      <div className="row mb-5">
        <div className="col-12 ">
          <h1 className="text-muted mb-4">Charges for account opening</h1>
          <div className="table-responsive fs-4 p-3 mt-5">
            <table className="table text-muted border border-3 rounded ">
              <thead>
                <tr>
                  <th scope="col" className='p-3'>Type of account</th>
                  <th scope="col"  className='p-3'>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Individual account</td>
                  <td><span className="badge bg-success rounded-pill px-2">FREE</span></td>
                </tr>
                <tr>
                  <td>Minor account</td>
                  <td><span className="badge bg-success rounded-pill px-2">FREE</span></td>
                </tr>
                <tr>
                  <td>NRI account</td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>HUF account</td>
                  <td><span className="badge bg-success rounded-pill px-2">FREE</span> (online) / ₹ 500 (offline)</td>
                </tr>
                <tr>
                  <td>Partnership, LLP, and Corporate accounts (offline only)</td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 2: Demat AMC */}
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="text-muted mb-4 mt-5">Demat AMC (Annual Maintenance Charge)</h1>

          {/* Highlighted text block (blue line style) */}
          <div className="ps-3 border-start border-primary fw-semibold border-3 mb-4 mt-4 text-muted fs-3">
            Free for first year*
          </div>

          <p className="text-muted fw-semibold mt-5 mb-4">From second year onwards, for BSDA accounts:</p>

          <div className="table-responsive fs-4">
            <table className="table text-muted border border-3 rounded ">
              <thead>
                <tr>
                  <th scope="col" className='p-3'>Value of holdings</th>
                  <th scope="col" className='p-3'>AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to ₹4 lakh</td>
                  <td><span className="badge bg-success rounded-pill px-2">FREE</span></td>
                </tr>
                <tr>
                  <td>₹4 lakh – ₹10 lakh</td>
                  <td>₹100 per year + 18% GST, charged quarterly</td>
                </tr>
                <tr>
                  <td>Above ₹10 lakh</td>
                  <td>₹300 per year + 18% GST, charged quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted  mt-4 fw-semibold fs-5">
            For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.
          </p>
          <p className="text-muted fw-semibold fs-5">
            To learn more about BSDA, <a href="#" className="text-decoration-none">click here</a>. To learn more about AMC, <a href="#" className="text-decoration-none">click here</a>.
          </p>
          <p className="text-muted fw-semibold fs-5">*Resident individual accounts only.</p>
        </div>
      </div>

      {/* Section 3: Optional Value Added Services */}
      <div className="row mb-5">
        <div className="col-12">
          <h1 className="text-muted mb-4 mt-5">Charges for optional value added services</h1>
          <div className="table-responsive fs-4 p-3 mt-5">
            <table className="table text-muted border border-3 rounded ">
              <thead>
                <tr>
                  <th scope="col" className="p-3">Service</th>
                  <th scope="col" className="p-3">Billing Frequency</th>
                  <th scope="col" className="p-3">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>Monthly / Quarterly / Annual</td>
                  <td>Free: 0 | Pro: 249/699/2399</td>
                </tr>
                <tr>
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td>Connect: 500 | Personal: Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 4: Charges Explained */}
      <div className="row">
        <h1 className="text-muted mb-4">Charges explained</h1>

        <div className="col-md-6 mb-4 mt-5">
          <h4 className="fs-5 mb-5">Securities/Commodities transaction tax</h4>
          <p >
            Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
          </p><br/>
          <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>

        <div className="col-md-6 mb-4 mt-5">
          <h4 className="fs-5 mb-5">GST</h4>
          <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>

    </div>
  );
}
export default Brokerage;