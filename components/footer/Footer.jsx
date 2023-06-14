import React from "react";
import { useTranslation } from 'next-i18next';
const Footer = () => {
  const { t } = useTranslation();
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
      { label: t("Home"), url: "/" },
      { label: t("About us"), url: "/" },
      { label: t("Services"), url: "/" },
      { label: t("Contact"), url: "/" },
      ],
    },
    {
      id: 2,
      title: t("Services"),
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
      { label: t("Web development"), href: "/pages-menu/service-v1" },
      { label: t("Hosting"), href: "/pages-menu/service-v1" },
      { label: t("Data Consulting"), href: "/pages-menu/service-v1" },
      { label: t("Design & graphisme"), href: "/pages-menu/service-v1" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    {
      iconClass: "fab fa-twitter",
      link: "#",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
          Appt Rue Bourdeaux N 8 2 Eme Etage <br /> Quartier Hopital - Safi
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
