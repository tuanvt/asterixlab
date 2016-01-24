import React, {PropTypes} from 'react';
import $ from 'jquery';
import '../../vendor/isotope.pkgd';
import '../../vendor/imagesloaded.pkgd';
import '../../vendor/animsition';
import '../../vendor/jquery.fullpage';
import '../../vendor/royal_preloader';
import '../../vendor/jquery.fancybox';
import '../../vendor/wow';
import '../../vendor/tweecool';
import '../../vendor/typed';
import '../../vendor/plugins';
import '../../vendor/script';

import RoyalPreLoader from './RoyalPreLoader';
import Header from './Header';
import LeftBorder from './LeftBorder';
import RightBorder from './RightBorder';
import MainNavigation from './MainNavigation';
import ResponsiveNagivation from './ResponsiveNagivation';
import FeatureSection from './FeatureSection';
import PortfolioSection from './PortfolioSection';

import Footer from './Footer';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    }
  render () {
    return (
            <div className="body-container">
                {/* ROYAL PRELOADER */}
                <RoyalPreLoader />
                {/* TOP BORDER */}
                <Header />
                {/*BORDERS*/}
                <LeftBorder />
                <RightBorder />
                {/* BOTTOM BORDER */}
                <Footer />
                <MainNavigation />
                {/* RESPONSIVE NAVIGATION */}
                <ResponsiveNagivation />
                {/* END RESPONSIVE NAVIGATION */}
                {/* SECTION 1 */}
                <FeatureSection />
                {/* END SECTION 1 */}
                {/* SECTION 2 */}
                <PortfolioSection />
                {/* END SECTION 2 */}
                {/* SECTION 3 */}
                <div className="w-section section-imp dark-gray more-padding">
                  <div className="w-container">
                    <div className="title-wrapper">
                      <h2>Clients</h2>
                      <div><img src="images/sub-handmade.png" alt="handmade" />
                      </div>
                    </div>
                    <div className="w-row">
                      <div className="w-col w-col-2 w-clearfix">
                        <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.3s"><img width={147} src="images/logo-1.png" alt="logo-1" />
                        </a>
                      </div>
                      <div className="w-col w-col-2 w-clearfix">
                        <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.4s"><img width={147} src="images/logo-4.png" alt="logo-4" />
                        </a>
                      </div>
                      <div className="w-col w-col-2 w-clearfix">
                        <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.5s"><img width={147} src="images/logo-2.png" alt="logo-2" />
                        </a>
                      </div>
                      <div className="w-col w-col-2 w-clearfix">
                        <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.6s"><img width={147} src="images/logo-5.png" alt="logo-5" />
                        </a>
                      </div>
                      <div className="w-col w-col-2 w-clearfix">
                        <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.7s"><img width={147} src="images/logo-3.png" alt="logo-3" />
                        </a>
                      </div>
                      <div className="w-col w-col-2 w-clearfix">
                        <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.8s"><img width={147} src="images/logo-6.png" alt="logo-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END SECTION 3 */}
                {/* FOOTER */}
                <footer className="footer">
                  <div className="w-container">
                    <div className="w-row">
                      <div className="w-col w-col-4">
                        <div className="contact-wrapper">
                          <div className="data-blog cont-ico">
                            <i className="icon-basic-headset" />
                          </div>
                          <div className="cont-sub-txt">Phone</div>
                          <p>+1 046 244 3912</p>
                        </div>
                      </div>
                      <div className="w-col w-col-4">
                        <div className="contact-wrapper">
                          <div className="data-blog cont-ico">
                            <i className="icon-basic-geolocalize-05" />
                          </div>
                          <div className="cont-sub-txt">Address</div>
                          <p>285 Lexington Ave
                            <br />New York, NY 12001</p>
                        </div>
                      </div>
                      <div className="w-col w-col-4">
                        <div className="contact-wrapper">
                          <div className="data-blog cont-ico">
                            <i className="icon-basic-mail-open-text" />
                          </div>
                          <div className="cont-sub-txt">E-mail</div>
                          <p><a className="mail" href="mailto:">mail@milano.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
                {/* END FOOTER */}
                {/* SCROLL TO TOP */}
                <a href="#0" className="cd-top">Top</a>
            </div>
    );
  }
}
export default LandingPage;
