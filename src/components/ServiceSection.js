import React from 'react';

class ServiceSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="service" className="w-section section-imp">
        <div className="w-container">
          <div className="title-wrapper">
            <h2>Our Services</h2>
            <div><img src="images/sub-handmade.png" alt="handmade" />
            </div>
          </div>
          <div>
            <div className="w-row">
              <div className="w-col w-col-6">
                <ul className="w-list-unstyled">
                  <li>
                    <div className="w-clearfix service-wrapper wow fadeIn" data-wow-delay="0.3s">
                      <div className="service-icon">
                        <div className="w-embed"><i className="icon-basic-server2" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h4 className="service-title">cms development</h4>
                        <p>Creating exclusive user friend website on Wordpress, Drupal.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-clearfix service-wrapper wow fadeIn" data-wow-delay="0.4s">
                      <div className="service-icon">
                        <div className="w-embed"><i className="icon-basic-laptop" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h4 className="service-title">Ruby On Rails Development</h4>
                        <p>We develop stable custom website based on Ruby On Rails</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-clearfix service-wrapper wow fadeIn" data-wow-delay="0.5s">
                      <div className="service-icon">
                        <div className="w-embed"><i className="icon-basic-settings" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h4 className="service-title">iOS App</h4>
                        <p>iOS native app is in our blood, we create all sorts of native apps</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-clearfix service-wrapper wow fadeIn" data-wow-delay="0.6s">
                      <div className="service-icon">
                        <div className="w-embed"><i className="icon-basic-webpage-txt" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h4 className="service-title">Android App</h4>
                        <p>Well documented all options and youtube tutorials</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-col w-col-6">
                <ul className="w-list-unstyled">
                  <li>
                    <div className="w-clearfix service-wrapper wow fadeIn" data-wow-delay="0.7s">
                      <div className="service-icon">
                        <div className="w-embed"><i className="icon-basic-flag1" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h4 className="service-title">MOBILE GAMES</h4>
                        <p>We are launching our first iOS game Monster</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-clearfix service-wrapper wow fadeIn" data-wow-delay="0.8s">
                      <div className="service-icon">
                        <div className="w-embed"><i className="icon-software-paintbrush" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h4 className="service-title">MINIMALISTIC</h4>
                        <p>Our website is clean and minimalistic</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-clearfix service-wrapper wow fadeIn" data-wow-delay="0.9s">
                      <div className="service-icon">
                        <div className="w-embed"><i className="icon-ecommerce-megaphone" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h4 className="service-title">PHP Custom Development</h4>
                        <p>Multiple stable solutions provided in PHP</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="w-clearfix service-wrapper wow fadeIn" data-wow-delay="1s">
                      <div className="service-icon">
                        <div className="w-embed"><i className="icon-basic-elaboration-message-dots" />
                        </div>
                      </div>
                      <div className="service-content">
                        <h4 className="service-title">SUPPORT</h4>
                        <p>If you have any question feel free to ask us</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ServiceSection;
