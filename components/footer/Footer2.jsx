import { useTranslation } from 'next-i18next';
const Footer2 = () => {
  const { t } = useTranslation();
  const columns = [
  {
    title: "Links",
    links: [
      { label: t("Home"), url: "/" },
      { label: t("About us"), url: "/" },
      { label: t("Services"), url: "/" },
      { label: t("Contact"), url: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: t("Item Support"), url: "/" },
      { label: t("Forum"), url: "/" },
      { label: t("Repport Abuse"), url: "/" },
      { label: t("Live"), url: "/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: t("Web development"), href: "/pages-menu/service-v1" },
      { label: t("Hosting"), href: "/pages-menu/service-v1" },
      { label: t("Data Consulting"), href: "/pages-menu/service-v1" },
      { label: t("Design & graphisme"), href: "/pages-menu/service-v1" },
    ],
  },
];

  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
