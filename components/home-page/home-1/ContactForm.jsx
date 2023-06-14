import { useState } from "react";
import { useTranslation } from 'next-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder={t("Your name")}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="email"
              placeholder={t("Email")}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-15">
            <textarea
              placeholder={t("Your message")}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button
            type="submit"
            className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase"
          >
            {t('SEND MESSAGE')}
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      <div className="fs-16 text-center mt-25">
        <span className="opacity-75">{t('Been here before?')}</span>{" "}
        <a href="#" className="tx-dark fw-500">
          {t('Check your query')}
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
