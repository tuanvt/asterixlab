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

import Footer from './Footer';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    }
  render () {
    return (
            <div>
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
                <div id="filter" className="w-section section-imp">
                  <div className="w-container">
                    <div className="w-clearfix filter-cont">
                      <div data-ix="open-filter-menu" className="w-clearfix show-filter">
                        <div className="filter-button">
                          <div className="w-embed"><i className="fa fa-filter" />
                          </div>
                        </div>
                        <div className="w-clearfix filter-effect">
                          <div data-ix="hide-filter-opacity-0" className="filter-txt">Hide Filter</div>
                          <div className="filter-txt-hide">Show Filter</div>
                        </div>
                      </div>
                      <div data-ix="move-filter-content-on-load" className="w-clearfix filters">
                        <a href="#" data-filter="*" className="button">All</a>
                        <a href="#" data-filter=".brand" className="button">Branding</a>
                        <a href="#" data-filter=".art" className="button">Digital Art</a>
                        <a href="#" data-filter=".photo" className="button">Photography</a>
                        <a href="#" data-filter=".print" className="button">Print</a>
                      </div>
                    </div>
                    <div id="grid" className="w-clearfix grid">
                      <div className="grid-sizer" />
                      <div className="item brand photo">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p7.jpg" alt="p7" />
                          <a href="portfolio-item-1.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Quisque libero</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Branding, Photography</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item art print">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p2.jpg" alt="p2" />
                          <a href="portfolio-item-2.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Vestibulum ante</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Digital Art, Print</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item photo art">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p8.jpg" alt="p8" />
                          <a href="portfolio-item-3.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Nunc nulla</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography, Digital Art</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item photo">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p1.jpg" alt="p1" />
                          <a href="portfolio-item-4.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Nulla sit</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item brand print">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p7_1.jpg" alt="p1" />
                          <a href="portfolio-item-5.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Etiam feugiat</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Branding, Print</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item photo art">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p11.jpg" alt="p11" />
                          <a href="portfolio-item-6.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Ut varius</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography, Digital Art</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item print">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p10.jpg" alt="p10" />
                          <a href="portfolio-item-7.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Donec id</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Print</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item art">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p8_1.jpg" alt="p8_1" />
                          <a href="portfolio-item-8.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Nam quam</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Digital Art</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item photo">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p4.jpg" alt="p4" />
                          <a href="portfolio-item-1.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Aenean leo</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item photo">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p5.jpg" alt="p5" />
                          <a href="portfolio-item-2.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Praesent congue</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item art">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p9.jpg" alt="p9" />
                          <a href="portfolio-item-3.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Nulla facilisi</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Digital Art</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="item photo">
                        <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="images/p1-prove.jpg" alt="p1-prove" />
                          <a href="portfolio-item-4.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                            <div className="portfolio-cn-title">
                              <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">In hac</h4>
                              <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
