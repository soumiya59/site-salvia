import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import i18n from "../../i18n/index";
import { useTranslation } from 'next-i18next';
import { Dropdown } from 'react-bootstrap';
import useLocalStorage from '../../utils/useLocalstorage';

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


  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] =  useState(i18n.language);
  const handleChangeLanguage = (eventKey) => {
        i18n.changeLanguage(eventKey);
        setSelectedLanguage(eventKey);   
  };

  const [activeItem, setActiveItem] = useLocalStorage('navItem', 'Home');
  const handleItemClick = () => {
    if( activeItem !== 'Home') {
      setActiveItem('Home');
    }

  };
  const handleItemClickContact = () => {
    if( activeItem !== 'Contact') {
    setActiveItem('Contact');
    }
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
            <Link href='/' className='d-block' onClick={handleItemClick}>
              <Image
                src="/images/logo/salvia1.svg"
                alt="logo"
                width={120}
                height={35}
                priority={true}
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
          <Dropdown onSelect={handleChangeLanguage} >
            <Dropdown.Toggle variant="" id="language-dropdown">
              {selectedLanguage}
            </Dropdown.Toggle>
      
            <Dropdown.Menu defaultValue={selectedLanguage}>
              <Dropdown.Item  eventKey="English">
                English
              </Dropdown.Item>
              <Dropdown.Item  eventKey="Francais">
                Francais
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

            <Link
              href="/contact"
              onClick={handleItemClickContact}
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block ms-3"
            >
              {t('Contact us')}
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
