import React from 'react';

function Hero() {
  return (
    <section className="container-fluid border-bottom mb-5" id="supportHero" style={{ maxWidth: "100%", color: "#444" , backgroundColor:"#e1e1e1"}}>
      {/* --- Top Header Section --- */}
      <div className="d-flex justify-content-between align-items-center mb-3" >
        <h1 className="mt-4 fs-1 mx-5">Support Portal</h1>
        <button className="btn btn-primary px-3 py-3 mt-3 fs-4 mx-5" style={{ backgroundColor: "#387ed1", border: "none" , width:"15%"}}>
          My tickets
        </button>
      </div>

      {/* --- Search Box Section --- */}
      <div className="mb-5 position-relative mx-5">
        <input
          type="text"
          className="form-control form-control-lg border border-3 rounded ps-4 p-4 pl-3 "
          placeholder=" Eg: How do I open my account, How do I activate F&O..."
        />
        <span className="position-absolute top-50 start-0 translate-middle-y">&nbsp;&nbsp;<i class="fa-solid fa-magnifying-glass"></i></span>
      </div>
    </section>
  );
}

export default Hero;
