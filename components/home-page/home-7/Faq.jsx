const faqs = [
  {
    id: "1",
    question: "How does the free trial work?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: "2",
    question: "How do you weigh different criteria in process?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: "3",
    question: "What does janu look for in an idea?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: "4",
    question: "What do you look for in a founding team?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-one md-mt-40" id="accordionOne">
      {faqs.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <div className="accordion-header" id={"heading" + faq.id}>
            <button
              className={`accordion-button${
                faq.id !== "3" ? " collapsed" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + faq.id}
              aria-expanded={faq.id === "3" ? "true" : "false"}
              aria-controls={"collapse" + faq.id}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={"collapse" + faq.id}
            className={`accordion-collapse collapse${
              faq.id === "3" ? " show" : ""
            }`}
            aria-labelledby={"heading" + faq.id}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
