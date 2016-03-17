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
import ServiceSection from './ServiceSection';
import ClientSection from './ClientSection';
import OurTeamSection from './OurTeamSection';
import ContactUsSection from './ContactUsSection';
import Footer from './Footer';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    }
  render () {
    return (
            <div className="body-container w-clearfix ">
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
                <ServiceSection />

                {/* SECTION 3 */}
                <ClientSection />
                {/* END SECTION 3
                <OurTeamSection />*/}
                {/* CONTACT US */}
                <ContactUsSection />
                {/* END CONTACT US SECTION */}
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
                          <p>+84 904758879</p>
                        </div>
                      </div>
                      <div className="w-col w-col-4">
                        <div className="contact-wrapper">
                          <div className="data-blog cont-ico">
                            <i className="icon-basic-geolocalize-05" />
                          </div>
                          <div className="cont-sub-txt">Address</div>
                            <p> House 15, Alley 76 To Ngoc Van Tay Ho District
                            <br />Hanoi, Vietnam </p>
                        </div>
                      </div>
                      <div className="w-col w-col-4">
                        <div className="contact-wrapper">
                          <div className="data-blog cont-ico">
                            <i className="icon-basic-mail-open-text" />
                          </div>
                          <div className="cont-sub-txt">E-mail</div>
                          <p><a className="mail" href="mailto:info@asterixlab.com">info@asterixlab.com</a>
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
