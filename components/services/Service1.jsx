import Link from "next/link";

const services = [
  {
    iconSrc: "/images/icon/icon_104.svg",
    title: "web Application ",
    delay: "100",
  },
  {
    iconSrc: "/images/icon/icon_105.svg",
    title: "mobile Application ",
    delay: "200",
  },
  {
    iconSrc: "/images/icon/icon_106.svg",
    title: "Advertisement ",
    delay: "300",
  },
  {
    iconSrc: "/images/icon/icon_107.svg",
    title: "Social media",
    delay: "100",
  },
  {
    iconSrc: "/images/icon/icon_141.svg",
    title: "Digital strategy",
    delay: "200",
  },
  {
    iconSrc: "/images/icon/icon_142.svg",
    title: "Data Consulting",
    delay: "300",
  },
  {
    iconSrc: "/images/icon/icon_107.svg",
    title: "E-commerce",
    delay: "100",
  },
  {
    iconSrc: "/images/icon/icon_141.svg",
    title: "Artificial intelligence",
    delay: "200",
  },
  {
    iconSrc: "/images/icon/icon_142.svg",
    title: "Référencement naturel ",
    delay: "300",
  },
  {
    iconSrc: "/images/icon/icon_107.svg",
    title: "Design & graphisme",
    delay: "100",
  },
  {
    iconSrc: "/images/icon/icon_141.svg",
    title: "Image de marque & branding",
    delay: "200",
  },
  {
    iconSrc: "/images/icon/icon_142.svg",
    title: "Email Marketing",
    delay: "300",
  },
];

const Service1 = () => {
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
              href="/pages-menu/service-details"
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
