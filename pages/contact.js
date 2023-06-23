import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Image from "next/image";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaulHeader";
import { useTranslation } from 'next-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo pageTitle="Contact" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  {t('Contact info')}
                </div>
                <h2 className="main-title fw-500 tx-dark">{t('Get in Touch')}.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <Image
          width={100}
          height={100}
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                {t('Any questions? Send us a message')}.
              </h2>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
        {/* End .container */}
        <Map />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Contact;
