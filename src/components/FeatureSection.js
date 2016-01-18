import React from 'react';

class FeatureSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="w-section section-imp no-padding">
        <div className="banner">
          <div data-animation="fade" data-duration={500} data-infinite={1} data-nav-spacing={5} className="w-slider big-slider">
            <div className="w-slider-mask">
              <div className="arrow-down">
                <a href="#coming" className="w-inline-block icon-scroll" />
              </div>
              <div className="w-slide slide-big-1">
                <div className="w-container port-contatiner">
                  <div className="center-mobile">
                    <div data-ix="move-up-on-slide" className="inner-title smaller white">app development</div>
                    <p data-ix="move-up-on-slide-2">We take your mobile apps to the next level</p>
                    <div data-ix="fade-in-on-slide-3"><img src="images/sub-handmade.png" alt="subhand" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide slide-big-2">
                <div className="w-container port-contatiner top">
                  <div className="align-center">
                    <div data-ix="move-left-on-slide-4" className="inner-title smaller">milano watch</div>
                    <p data-ix="move-left-on-slide-5" className="white">Digital Art</p>
                    <div data-ix="fade-in-on-slide-4"><img src="images/sub-handmade-w.png" alt="subhand" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide slide-big-3">
                <div className="w-container port-contatiner right">
                  <div className="center-mobile">
                    <div data-ix="move-up-on-slide" className="inner-title smaller dark">inside jungle</div>
                    <p data-ix="move-up-on-slide-2">Photography</p>
                    <div data-ix="fade-in-on-slide-3"><img src="images/sub-handmade.png" alt="subhand" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-slider-arrow-left left-arrow" />
            <div className="w-slider-arrow-right right-arrow" />
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureSection;
