import Image from "next/image";
import { useTranslation } from 'next-i18next';

const Feature = () => {
  const { t } = useTranslation();
  const features = [
    {
      background: "#fffee7",
      title: (
        <>
         {t('Quality Design')} 
        </>
      ),
      // description: "100% Reliable",
      description:t("Design from Worldclass UI/UX designers.") ,
      icon: "images/icon/icon_100.svg",
      width: "169",
      height: "165",
      delay: "100",
    },
    {
      background: "#FBF1FF",
      title: (
        <>
         {t('Marketing')} 
        </>
      ),
      width: "202",
      height: "170",
      description:t("Provide SEO & SMM Services.") ,
      icon: "images/icon/icon_101.svg",
      delay: "200",
    },
    {
      background: "#EEFBFA",
      title: (
        <>
          {/* Unbiased advice <br /> from expert. */}
         {t('Development')} 
        </>
      ),
      width: "175",
      height: "175",
      description:t("Mobile App & Website Development.") ,
      icon: "images/icon/icon_102.svg",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4> 
            <p>{feature.description}</p>
            <Image
              width={feature.width}
              height={feature.height}
              src={feature.icon}
              alt="icon"
              className="position-absolute"
            />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
