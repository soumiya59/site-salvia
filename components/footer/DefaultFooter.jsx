import Link from "next/link";
import Footer2 from "./Footer2";
import NewsLetter from "./NewsLetter";
import CopyrightFooter2 from "./CopyrightFooter2";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

const DefaultFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-style-eleven theme-basic-footer position-relative">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 footer-intro mb-40">
              <div className="logo">
              <Link href="/" className="d-block">
              <Image
                src="/images/logo/salvia1.svg"
                alt="logo"
                width={120}
                height={35}
              />
              </Link>
              </div>
            </div>
            {/* End .col */}

            <Footer2 />

            <div className="col-xl-4 col-lg-5 mb-30 form-widget">
              <h5 className="footer-title tx-dark fw-normal">{t('Newsletter')}</h5>
              <h6 className="pt-15 pb-20 md-pt-10">{t('Join our newsletter')}</h6>
              <NewsLetter />
              <div className="fs-14 mt-10">
                {t('We only send necessary business emails')}.
              </div>
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
      {/* <Image
        src="/images/shape/shape_173.svg"
        alt="shape"
        width={120}
        height={100}
      /> */}
    </div>
  );
};

export default DefaultFooter;
