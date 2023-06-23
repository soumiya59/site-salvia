import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import FaqAccordion from "../../components/pages-com/FaqAccordion";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const Faq = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo pageTitle="Faq's" />
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
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five">
                <h2 className="main-title fw-500 tx-dark">
                  {t('Privacy & Terms')}.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* 
			=============================================
				Feature Section Thirty Three
			============================================== 
			*/}
      <div className="fancy-feature-thirtyThree mt-100 lg-mt-80">
        <div className="container">
          <div className="border-bottom pb-100 lg-pb-70">
            <div className=" position-relative text-lg" data-aos="fade-up">
              <div>
                <p>{t('At Salvia, we value the privacy and security of our website visitors. This Privacy & Terms statement outlines how we collect, use, and protect your personal information when you visit our website. By accessing and using our website, you agree to the terms described below.')}</p>
                <div>
                    <span className="fw-bold">{t('Collection of Information :')}</span>
                    <ul>
                      <li>{t("We may collect personal information, such as your name, email address, and contact details, when you voluntarily provide it through our website's contact forms or subscription options.")}</li>
                      <li>{t("We may also collect non-personal information, such as your IP address, browser type, and operating system, through cookies and similar technologies. This information helps us improve our website's functionality and user experience.")}</li>
                    </ul>
                </div>
                <div>
                    <span className="fw-bold">{t('Use of Information :')}</span>
                    <ul>
                      <li>{t("We use the information collected to respond to your inquiries, provide requested services, and improve our website's content and functionality.")}</li>
                      <li>{t("Personal information may be used to send you promotional emails or newsletters if you have subscribed to them. You can opt out of these communications at any time.")}</li>
                      <li>{t("We do not sell, trade, or share your personal information with third parties for their marketing purposes without your consent.")}</li>
                    </ul>
                </div>
              </div>
                <div>
                    <span className="fw-bold">{t('Data Security :')}</span>
                    <ul>
                      <li>{t("We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.")}</li>
                      <li>{t("However, no method of data transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.")}</li>
                    </ul>
                </div>
                <div>
                    <span className="fw-bold">{t('Third-Party Links :')}</span>
                    <ul>
                      <li>{t("Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these websites. We encourage you to review their respective Privacy & Terms policies.")}</li>
                    </ul>
                </div>
                <div>
                    <span className="fw-bold">{t('Cookies :')}</span>
                    <ul>
                      <li>{t("We use cookies to enhance your browsing experience, analyze website traffic, and personalize content. You have the option to accept or decline cookies through your browser settings.")}</li>
                    </ul>
                </div>
                <div>
                    <span className="fw-bold">{t('Changes to the Privacy & Terms :')}</span>
                    <ul>
                      <li>{t("We reserve the right to update or modify this Privacy & Terms statement at any time.")}</li>
                    </ul>
                </div>
                <div className="mt-70">
                  <p>{t('If you have any questions or concerns about our Privacy & Terms, please contact us.')}</p>
                  <p>{t('By using our website, you signify your acceptance of these Privacy & Terms.')}</p>
                </div>
              </div>
              {/* <img
                src="/images/shape/shape_133.svg"
                alt="shape"
                className="lazy-img shapes shape-one"
              /> */}
            </div>
            {/* /.bg-wrapper */}

            <div className="text-center  mt-80 lg-mt-50" data-aos="fade-up">
              <h3 className="fw-bold tx-dark mb-30">{t('Have any questions ?')}</h3>
              <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
                {t('Contact us')}
              </Link>
            </div>
          </div>
        </div>
      {/* /.fancy-feature-thirtyThree */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Faq;
