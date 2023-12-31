import Image from "next/image";
import { useTranslation } from 'next-i18next';

const BlockContact = () => {
  const { t } = useTranslation();
  const addressBlocks = [
    {
      icon: "/images/icon/icon_147.svg",
      title: t("Our Address"),
      content: "Appt Rue Bourdeaux N 8 2 Eme Etage Quartier Hopital - Safi",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_149.svg",
      title: t("Opening time"),
      content: t("Monday to Friday : 9 AM to 6 PM"),
      content2: t("Saturday : 9 AM to 12 PM"),
      delay: "300",
    },
    {
      icon: "/images/icon/icon_148.svg",
      title: t("Contact Info"),
      content: t("give us call at"),
      link: "tel:0523232323",
      delay: "200",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image width={30} height={30} src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br /> {block.content2}
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
