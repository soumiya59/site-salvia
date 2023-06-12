const Feedback = () => {
  const images = [
    {
      src: "/images/media/img_44.jpg",
      alt: "shape",
      className: "lazy-img shapes shape-one",
    },
    {
      src: "/images/media/img_45.jpg",
      alt: "shape",
      className: "lazy-img shapes shape-two",
    },
    {
      src: "/images/media/img_46.jpg",
      alt: "shape",
      className: "lazy-img shapes shape-three",
    },
    {
      src: "/images/media/img_47.jpg",
      alt: "shape",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_120.svg",
      alt: "shape",
      className: "lazy-img shapes shape-five",
    },
    {
      src: "/images/shape/shape_121.svg",
      alt: "shape",
      className: "lazy-img shapes shape-six",
    },
  ];

  return (
    <div
      className="feedback-section-eight position-relative pt-200 pb-30 lg-pt-120 "
      data-aos="fade-up"
    >
      <div className="container">
        <img
          src="/images/icon/icon_92.svg"
          alt="shape"
          className="icon lazy-img m-auto"
          width={75}
        />
        <div className="row">
          <div className="col-xxl-11 col-lg-10 col-md-9 m-auto">
            <div className="feedback_slider_eight">
              <div className="item">
                <div className="feedback-block-eight text-center">
                  <p className="font-recoleta tx-dark mt-60 mb-65 lg-mt-40 lg-mb-40">
                    We signed <span>$70b</span> in a new business in January.
                    Most award winninig agency.
                  </p>
                  <h6 className="fw-normal fs-20 d-inline-block fst-italic position-relative ps-4">
                    Jessica Woodbeck, CEO
                  </h6>
                </div>{" "}
                {/* /.feedback-block-eight */}
              </div>
            </div>{" "}
            {/* /.feedback_slider_eight */}
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.className}
        />
      ))}
    </div>
  );
};

export default Feedback;
