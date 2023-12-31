import Link from "next/link";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
import Hero from "../../components/home-page/home-1/Hero";
import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import Service from "../../components/home-page/home-1/Service";
import Testimonial from "../../components/home-page/home-1/Testimonial";
import WhyChoose from "../../components/home-page/home-1/WhyChoose";
import { useTranslation } from 'next-i18next';
import useLocalStorage from "../../utils/useLocalstorage";
import Image from "next/image";

const Insurance = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useLocalStorage('navItem', 'Home');
  const handleClick = () => {
    setActiveItem('Services');
    localStorage.setItem('navItem', 'Services');
  };
  return (
    <>
      <Seo pageTitle="SALVIA" />
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      <DefaulHeader />
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}
      <Hero />
      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}

      <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      

      <div className=" mt-90 md-mt-70 bg-wrapper py-5 " style={{ background:'#F6F9FB' }}>
        <div className="container ">
          <div className="row align-items-center ">
            <div className="">
              <div
                className="block-style-two pe-xxl-5 md-mb-50"
                data-aos="fade-up"
              >
                <div className="title-style-one mb-40">
                  <h2 className="main-title fw-500 tx-dark m0" style={{ background:'#F6F9FB' }}>
                    {t('About')}
                    <p className="d-inline-block position-relative" >
                      <span className="ms-4" >
                      SALVIA
                      </span>
                      <span
                        className="mark-bg ms-4"
                        // style={{ backgroundColor: "#ddf1ff" }}
                      />
                    </p>
                  </h2>
                </div>
                {/* /.title-style-three */}
                <div className="text-lg mt-25 lg-mb-30 row ms-2 ms-md-3  ">
                  <p className="col-12 col-md-6 px-md-5">{t('As a software company dedicated to delivering innovative solutions for businesses and organizations. With a focus on web software development and digital transformation, Salvia helps clients harness the power of technology to achieve their goals and drive success.')}</p>
                  <p className="col-12 col-md-6 -md-5">{t('Salvia excels in developing custom software solutions tailored to the unique needs and requirements of each client. By collaborating closely with businesses, Salvia understands their challenges, processes, and objectives, allowing them to create software that addresses specific pain points and maximizes efficiency.')}</p>
                </div>
              </div>
              {/* /.block-style-two */}
            </div>
            {/* End .col-lg-5 */}

            <div
              className="col-xl-6 col-lg-7 col-md-6 ms-auto"
              data-aos="fade-left"
            >
            </div>
            {/* End .col-xl-6 */}
          </div>
        </div>
        </div>


      {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
      {/* <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="container" data-aos="fade-up">
        </div>

        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
          </div>
        </div>
      </div> */}
      {/* /.fancy-feature-thirtyFive */}
      {/* 
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    {t('Discover all our Services.')}
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Service />
            </div>
            {/* /.row */}

            <div className="text-center md-mt-50">
              <Link
                href="/pages-menu/service-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
                onClick={handleClick}
              >
                {t('View all services')}
              </Link>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySix */}
      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 mb-75 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">
                    {t('Why Choose Us')}</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    {t('What makes us the best.')}
                  </h2>
                </div>
                <WhyChoose />
                {/* /.accordion-style-five */}
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySeven */}
      {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}

      {/* /.feedback-section-eleven */}
      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
        {/* /.container */}
      {/* /.fancy-feature-thirtyEight */}
      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      {/* <div
        className="fancy-short-banner-thirteen pb-170  lg-pb-80  mt-md-5 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <img
                        src="/images/icon/icon_114.svg"
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          {t('Talk to experienced advisors')}.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
      </div>
        </div>
        </div> */}
              <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <Image
                        height={100}
                        width={100}
                        src="/images/icon/icon_114.svg"
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          {t('Talk to experienced advisors')}.
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm />
                    </div>
                    {/* /.form-style-two */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              {t('Fill the')} <br />
              {t('form')}
            </div>
            <Image
              width={100}
              height={100}
              src="/images/shape/shape_90.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <Image
              width={100}
              height={100}
              src="/images/shape/shape_91.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-thirteen */}
      {/* =============================================
		   Blog Section Three
		   ============================================== */}
      {/* <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">Our Blog</h2>
                </div>
              </div>
            </div>
            <div className="row gx-xxl-5">
              <Blog />
            </div>
            <div className="text-center xs-mt-40">
              <Link
                href="/blog/blog-v2"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Go to Blog
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* /.blog-section-three */}
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image width={120} height={20} src="/images/logo/salvia-white.png" alt="logo"  />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15  ">
                  {/* {t('Software Development Company')}. */}
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear() + 1}{" "}
                  SALVIA inc.
                </p>
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <Image
          width={100}
          height={100}
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <Image
          width={100}
          height={100}
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
      {/* /.footer-style-ten */}
    </>
  );
};

export default Insurance;
