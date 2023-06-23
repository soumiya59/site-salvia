import { useTranslation } from 'next-i18next';
import Image from "next/image";
const Block = () => {
const { t } = useTranslation();
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <Image
            src="/images/shape/shape_136.svg"
            alt="shape"
            width={100}
            height={100}
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8 wow fadeInDown">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#FFAE10" }}>10K+</h3>
            <p>{t('Customers trust us.')}</p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7 wow fadeInDown">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#9650EF" }}>
              50+ <br />
              <span>{t('Project')}</span>
            </h3>
            <p>
              {t('Partnered with us so that you can compare easily & transparently')} 
              </p>
            {/* <Image
              src="/images/shape/shape_138.svg"
              alt="sahpe"
            width={50}
            height={100}
              className="lazy-img shapes shape-one"
            /> */}
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5 wow fadeInUp">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#00BDE6" }}>
              <span>{t('Claims')}</span>
            </h3>
            <p>{t('Get Support by expert easily.')}</p>
          </div>
          {/* /.block-wrapper */}
          <Image
            src="/images/shape/shape_137.svg"
            alt="shape"
            width={100}
            height={100}
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;
