const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80 wow fadeInUp">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
            {/* <iframe
              className="gmap_iframe"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=dhaka collage&t=&z=12&ie=UTF8&iwloc=B&output=embed"
            /> */}
            <iframe className="gmap_iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.6161383899665!2d-9.23623217269778!3d32.286883916886175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac278441ff864b%3A0x6cc959bf260cc14d!2sFCES%20Maroc!5e0!3m2!1sen!2sma!4v1686592365250!5m2!1sen!2sma" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
