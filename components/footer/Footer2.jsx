const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Services", url: "/" },
      { label: "Contact", url: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Item Support", url: "/" },
      { label: "Forum", url: "/" },
      { label: "Report Abuse", url: "/" },
      { label: "Live", url: "/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web development", url: "/pages-menu/service-v1" },
      { label: "hosting", url: "/pages-menu/service-v1" },
      { label: "Data Consulting", url: "/pages-menu/service-v1" },
      { label: "Design & graphisme", url: "/pages-menu/service-v1" },
    ],
  },
];

const Footer2 = () => {
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
