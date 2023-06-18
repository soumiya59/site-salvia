import { useTranslation } from 'next-i18next';
const WhyChoose = () => {
  const { t } = useTranslation();
  const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: t("Client-Centric Approach"),
    content:
      "Practice what you learned on realistic lorem quis test questions testing.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_109.svg",
    title: t("Innovation and Technology"),
    content:
      "Practice what you learned on realistic lorem quis test questions testing.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_110.svg",
    title: t("Ongoing Support and Maintenance"),
    content:
      "Practice what you learned on realistic lorem quis test questions testing.",
  },
];

  return (
    <div className="accordion-style-five md-mb-70">
      {accordionItems.map((item) => (
        <div key={item.id}>
          <div className={`accordion-button cursor-na`} >
            <img src={item.icon} alt="" className="me-3" /> {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
