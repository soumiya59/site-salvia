import Link from "next/link";
import { useTranslation } from 'next-i18next';

const Service1 = () => {
  const { t } = useTranslation();
  const services = [
  {
    id: 1,
    iconSrc: "/images/service/web.png",
    title: t("Web development"),
    delay: "100",
  },
  {
    id: 2,
    iconSrc: "/images/service/cloud.png",
    title: t("Hosting"),
    delay: "200",
  },
  {
    id: 3,
    iconSrc: "/images/service/adds.png",
    title: t("Advertisement"),
    delay: "300",
  },
  {
    id: 4,
    iconSrc: "/images/service/adds.png",
    iconSrc: "/images/service/media.png",
    title: t("Social media"),
    delay: "100",
  },
  {
    id: 5,
    iconSrc: "/images/service/digi.png",
    title: t("Digital strategy"),
    delay: "200",
  },
  {
    id: 6,
    iconSrc: "/images/service/data.png",
    title: t("Data Consulting"),
    delay: "300",
  },
  {
    id: 7,
    iconSrc: "/images/service/data.png",
    iconSrc: "/images/service/ecom.png",
    title: t("E-commerce"),
    delay: "100",
  },
  {
    id: 8,
    iconSrc: "/images/service/ai.png",
    title: t("Artificial intelligence"),
    delay: "200",
  },
  {
    id: 9,
    iconSrc: "/images/service/ref.png",
    title: t("SEO"),
    delay: "300",
  },
  {
    id: 10,
    iconSrc: "/images/service/des.png",
    title: t("Design & graphisme"),
    delay: "100",
  },
  {
    id: 11,
    iconSrc: "/images/service/brand.png",
    title: t("Branding"),
    delay: "200",
  },
  {
    id: 12,
    iconSrc: "/images/service/mail.png",
    title: t("Email Marketing"),
    delay: "300",
  },
];

  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={service.delay}
          key={index}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-40">
            <div className="icon">
              <img
                src={service.iconSrc}
                alt="icon"
                className="lazy-img m-auto"
              />
            </div>
            <h4 className="tx-dark pt-20">{service.title}</h4>
            <Link
              href={`/pages-menu/service-details/${service.id}`}
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service1;
