import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Partners from "../../components/services/Partners";
import Faq from "../../components/services/Faq";
import Testimonial from "../../components/home-page/home-3/Testimonial";
import Block from "../../components/services/Block";
import Team3 from "../../components/team/Team3";
import Link from "next/link";
import Counter from "../../components/about/Counter";
import { useTranslation } from 'next-i18next';
import Image from "next/image";

const AboutUsV1 = () => {
  const { t } = useTranslation();
  const features = [
    { text: t("Client-Centric Approach.") },
    { text: t("Value for Investment.") },
    { text: t("Ongoing Support and Maintenance.") },
    { text: t("Innovation and Technology.") },
    { text: t("Quality at a fair price.") },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="About Us" />

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
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  {t('More About us')}.
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  {t('Who are we ?')}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="ps-xxl-5" data-aos="fade-left">
                <p className="text-lg tx-dark">
                  {t("Salvia is a web development software company focused on creating innovative solutions to empower businesses in the digital realm . With 15 years expertise in web development technologies, we tailor our services to meet the unique needs of each client. Our team of skilled professionals is dedicated to delivering high-quality , scalable, and user-friendly web applications. At Salvia, we strive to drive digital success for our clients through cutting-edge web development solutions and exceptional customer service.")}
                </p>
                {/* <div className="row">
                  <Counter />
                </div> */}
              </div>
            </div>
          </div>
          {/* staff */}
          <div className="row mt-100">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <h2 className="main-title fw-500 tx-dark">
                  {t('Our staff')}.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="ps-xxl-5" data-aos="fade-up">
                <p className="text-lg tx-dark">
                  {t("At Salvia, we take pride in our exceptional team of talented and passionate professionals who drive our success. Our staff is composed of skilled individuals with diverse backgrounds and expertise , coming together to create a dynamic and collaborative work environment.")}
                </p>
                <p className="text-lg tx-dark">
                  {t('Our team consists of experienced web developers, software engineers , designers , project managers, and quality assurance specialists who are dedicated to delivering top-notch solutions. They stay up-to-date with the latest industry trends and emerging technologies, continuously expanding their knowledge and skills to provide innovative and efficient web development services.')}
                </p>
              </div>
            </div>
          </div>
          {/* commitment */}
          <div className="row mt-100">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="title-style-five mb-65 md-mb-40">
                <h2 className="main-title fw-500 tx-dark">
                  {t('Commitment to Quality')}.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="ps-xxl-5" data-aos="fade-up">
                <p className="text-lg tx-dark">
                  {t("Salvia is dedicated to providing high-quality products. We sincerely believe that providing great solutions necessitates a constant commitment to quality in all facets of our work.Our success is a result of our dedication to excellence. We take pride in our capacity to provide outstanding web development solutions that go above and beyond requirements, empower our clients , and help them grow their companies.")}
                </p>
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
      {/* /.fancy-feature-fiftyOne */}

      {/* <!-- 
			=============================================
				Feature Section Fifty Two
			============================================== 
			--> */}
      {/* <VideoBlock /> */}

      {/* <!-- /.fancy-feature-fiftyTwo --> */}

      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                data-aos="fade-right"
              >
                <div className="title-style-six">
                  <h2 className="main-title fw-500 tx-dark pb-30">
                    {t('Why choose us?')}
                  </h2>
                </div>
                {/* /.title-style-ten */}
                {/* <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                  Turn your business into a sales machine today with lorem
                  Things go wrong have questions.
                </p> */}
                <ul className="style-none list-item">
                  {features.map((feature, index) => (
                    <li key={index}>{feature.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xxl-5 col-lg-6 ms-auto">
              <Block />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySeven */}

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      {/* <div className="team-section-two position-relative pt-200 lg-pt-120">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">{t('Our Team')}</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Team3 />
            </div>

            <p
              className="cr-text text-center text-lg tx-dark mt-75 lg-mt-50"
              data-aos="fade-up"
            >
              {t('Our nearly')}
              <span className="text-decoration-underline fw-500 mx-1">300+</span>
              {t('committed staff members are ready to help')}.
            </p>
            <div className="text-center md-mt-20">
              <Link
                href="/pages-menu/team-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                {t('View full team')}
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-one d-none d-xl-inline-block"
        />
      </div> */}
      {/* /.team-section-two */}

      {/* 
			=============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      {/* <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">{t('SOLUTION')}</div>
                  <h2 className="main-title fw-500 tx-dark">
                    {t('Digital solutions for business')}.
                  </h2>
                </div>
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  {t('Do you have more question about our solution? Just send us a message for help')}
                </p>
                <div className="btn-eighteen position-relative d-inline-block tx-dark">
                  <Link href="/page-menu/about-us-v1" className="fw-500 tran3s">
                    {t('More About solution')}
                    <i className="fa-solid fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div> */}
        {/* /.container */}

        <div className="partner-section-six position-relative mt-130 lg-mt-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h3 className="title tx-dark text-center text-lg-start md-pb-10 m0">
                  <span>100+</span> {t('Trusted Partners')}
                </h3>
              </div>
              <div className="col-xl-6 col-lg-7 ms-auto">
                <div className="logo-wrapper text-center d-flex justify-content-center justify-content-lg-between flex-wrap">
                  <Partners />
                </div>
                {/* /.logo-wrapper */}
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      {/* /.partner-section-six */}

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        {t('Have Any Project')}?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        {t('Don’t hesitate to send us message')}.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      {t('Get Started Today')}!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default AboutUsV1;
