import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-six ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <img src="/images/logo/logo_01.png" alt="" width={95} />
            </Link>
          </div>
          {/* End logo */}
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="/login"
              className="login-btn-two fw-500 d-flex align-items-center me-3 me-xl-5"
            >
              <img src="/images/icon/icon_62.svg" alt="" className="me-2" />
              <span>login</span>
            </Link>
            <Link
              href="/contact"
              className="start-btn-one fs-18 fw-500 tran3s position-relative d-none d-lg-block"
            >
              Get Started
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
