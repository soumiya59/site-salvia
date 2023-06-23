import Link from "next/link";
import { useTranslation } from 'next-i18next';
import Image from "next/image";

const Service = () => {
  const { t } = useTranslation();
  const services = [
  {
    // icon: "images/icon/icon_104.svg",
    id:1,
    icon: "/images/service/web.png",
    title: t("Web development"),
    delayAnim: 0,
  },
  {
    // icon: "images/icon/icon_141.svg",
    id: 2,
   icon: "/images/service/cloud.png",
    title: t("Hosting"),
    delayAnim: 100,
  },
  {
    // icon: "images/icon/icon_105.svg",
    id: 7,
    icon: "/images/service/ecom.png",
    title: t("E-commerce"),
    delayAnim: 200,
  },
  {
    // icon: "images/icon/icon_107.svg",
    id: 12,
    icon: "/images/service/mail.png",
    title: t("Email Marketing"),
    delayAnim: 300,
  },
  ];
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-xl-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={service.delayAnim}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-30">
            <div className="icon">
              <Image src={service.icon} width={60} height={60} alt="" className="lazy-img m-auto " />
            </div>
            <h4 className="tx-dark pt-20">{service.title}</h4>
            <Link
              // href="/pages-menu/service-details"
              href={`/pages-menu/service-details/${service.id}`}
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>{" "}
          {/* /.card-style-sixteen */}
        </div>
      ))}
    </>
  );
};

export default Service;
