import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from 'react-bootstrap';

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

  // change the language 
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    
  };
  // console.log("DefaulHeader.jsx:27 ~ DefaulHeader ~ currentLanguage:", currentLanguage)
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/salvia1.svg"
                alt="logo"
                width={120}
                height={35}
              />
            </Link>
          </div>
          <div className="ight-widget ms-auto d-flex align-items-center order-lg-3">
            {/* <select className="login-btn-three rounded-circle tran3s me-3" >
              <option value="English">English</option>
              <option value="francais">francais</option>
              <i className="bi bi-person" />
            </select> */}
          <Dropdown>
            <Dropdown.Toggle variant="" id="language-dropdown">
              {currentLanguage}
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLanguageChange('English')}>
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguageChange('French')}>
                French
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
 
            <Link
              href="/contact"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block ms-3"
            >
              Contact us
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
