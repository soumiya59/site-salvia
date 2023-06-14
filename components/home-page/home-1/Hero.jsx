import Image from "next/image";
import React from "react";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Select insurance type.." },
    { value: 1, display: "Life Insurance" },
    { value: 2, display: "Health insurance" },
    { value: 3, display: "Property insurance" },
    { value: 4, display: "Motor insurance" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="fw-light tx-dark">
              {/* Everything for your <span>Home</span> &amp; Future. */}
              {/* Société de Services et d'Ingénierie Informatique */}
              Increase your web traffic with our experts.
            </h1>
            {/* <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40"> */}
            <p className="text-lg mb-75 pt-60 lg-mb-40 lg-pt-40">
              {/* Instant everything. Incredible prices. Big heart. */}
              {/* Tout instantané. Des prix incroyables. Grand coeur. */}
              Digital company with top rated talented people that provides quality services.
            </p>
            <form
              className="search-area d-md-inline-flex m-auto"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="ps-3 rounded-start border border-1 sw-100"
                placeholder="Enter Keyword"
              />
              <button className="fw-500 text-white tran3s" type="submit">
                Search
              </button>
            </form>
            {/* End form */}

            {/* <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>An UK insurer approved by the UICO.</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={487}
        height={649}
        src="/images/assets/ils_11.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        layout="intrinsic"
      />
      <Image
        width={537}
        height={658}
        src="/images/assets/ils_12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      />
    </div>
  );
};

export default Hero1;
