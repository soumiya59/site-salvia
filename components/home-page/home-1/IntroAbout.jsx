import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { useTranslation } from 'next-i18next';

const IntroAbout = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: t("Happier"),
      subtitle: t("Customers"),
    },
    {
      id: 2,
      cardNo: "card-two",
      title: "10+",
      subtitle: t("Developpers"),
    },
    {
      id: 3,
      cardNo: "card-three",
      title: t("Saller Leads"),
      subtitle: t("Who are listing soon"),
    },
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="rDYdeq3JW_E"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-xl-5 col-md-6 order-md-last">
          <div className="text-wrapper md-pb-70">
            <Image
              width={66}
              height={66}
              src="/images/icon/icon_103.svg"
              alt="icon"
              className="lazy-img cursor-pointer"
              onClick={() => setOpen(true)}
            />
            <p className="tx-dark pt-30 pb-30 md-pb-15" data-aos="fade-up">
              {t('The team signed')} <span className="fw-500">~$1,000,000</span> {t('in new business in July. Accelerator has been a large part of that.')}
            </p>
            <h6
              className="fs-20 tx-dark d-inline-block fst-italic position-relative ps-4"
              data-aos="fade-up"
            >
              Jessica Woodbeck
            </h6>
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90">
            <img
              src="/images/shape/shape_135.svg"
              alt="shape"
              className="lazy-img"
            />
            {/* <Image
              width={900}
              height={800}
              layout="intrinsic"
              src="/images/media/undraw3.svg"
              className="lazy-img avatar-img mb-50"
              alt="man"
            /> */}

            {cardsData.map((item) => (
              <div
                className={`card-style ${item.cardNo} d-flex justify-content-center`}
                key={item.id}
              >
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-lg" />
                </div>
                <div className="ps-2 ps-lg-4">
                  <h3>{item.title}</h3>
                  <p className="fs-20 tx-dark m0">{item.subtitle}</p>
                </div>
              </div>
            ))}
            {/* /.card */}
          </div>
        </div>
        {/* End .col-xl-7 */}
      </div>
    </>
  );
};

export default IntroAbout;
