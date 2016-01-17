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
import LeftBoder from './LeftBoder';
import RightBoder from './RightBoder';

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
                <div data-ix="hide-overlay-menu-on-load" className="overlay-menu">
                  <div className="w-container port-contatiner">
                    {/* NAVIGATION */}
                    <nav>
                      <ul className="w-list-unstyled ul-nav">
                        <li data-ix="close-dropdown-on-hover"><a href="index.html" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link animsition-link"><h3 className="biger">Home</h3></a>
                        </li>
                        <li data-ix="close-dropdown-on-hover"><a href="about.html" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link animsition-link"><h3 className="biger">about</h3></a>
                        </li>
                        <li data-ix="close-dropdown-on-hover"><a href="#" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link"><h3 className="biger">portfolio</h3></a>
                          <ul data-ix="make-dropdown-height-0" className="w-list-unstyled ul-dropdown">
                            <li>
                              <a href="portfolio-classic-grid.html" className="w-inline-block nav-link nav-dd animsition-link">
                                <div>Classic Grid</div>
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-masonry.html" className="w-inline-block nav-link nav-dd animsition-link">
                                <div>Masonry</div>
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-not-spaced.html" className="w-inline-block nav-link nav-dd animsition-link">
                                <div>Not spaced</div>
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-with-lightbox.html" className="w-inline-block nav-link nav-dd animsition-link">
                                <div>With Lightbox</div>
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-hover-effects.html" className="w-inline-block nav-link nav-dd animsition-link">
                                <div>Hover Effects</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ix="close-dropdown-on-hover"><a href="#" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link"><h3 className="biger">blog</h3></a>
                          <ul data-ix="make-dropdown-height-0" className="w-list-unstyled ul-dropdown">
                            <li>
                              <a href="blog-zig-zag.html" className="w-inline-block nav-link nav-dd animsition-link">
                                <div>Blog&nbsp;Zig-Zag</div>
                              </a>
                            </li>
                            <li>
                              <a href="blog-minimal.html" className="w-inline-block nav-link nav-dd animsition-link">
                                <div>Blog&nbsp;Minimal</div>
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid.html" className="w-inline-block nav-link nav-dd animsition-link">
                                <div>Blog&nbsp;Grid</div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li data-ix="close-dropdown-on-hover"><a href="contact.html" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link animsition-link"><h3 className="biger">contact</h3></a>
                        </li>
                      </ul>
                    </nav>
                    {/* END NAVIGATION */}
                  </div>
                </div>
                {/* RESPONSIVE NAVIGATION */}
                <div className="w-hidden-main">
                  <div className="responsive-menu">
                    <div className="w-container">
                      <a href="index.html" className="w-inline-block brand-logo more-margin animsition-link"><img width={135} src="images/logo.png" alt="logo" />
                      </a>
                      <div data-ix="open-responsive-menu" className="hamburger">
                        <div className="w-embed">
                          <button className="c-hamburger c-hamburger--htx">
                            <span>toggle menu</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav className="responsive-nav">
                    <div className="w-container">
                      <ul className="w-list-unstyled dd-big-res">
                        <li>
                          <div className="w-clearfix nav-res-link"><a href="index.html" className="res-txt animsition-link">home</a>
                          </div>
                        </li>
                        <li>
                          <div className="w-clearfix nav-res-link"><a href="about.html" className="res-txt animsition-link">About</a>
                          </div>
                        </li>
                        <li>
                          <div data-ix="open-dd-res" className="w-clearfix nav-res-link"><a href="#" className="res-txt">portfolio</a>
                            <a href="#" className="w-inline-block arrow-ico-res">
                              <i className="fa fa-angle-down" />
                            </a>
                          </div>
                          <ul className="w-list-unstyled dd-res">
                            <li>
                              <div className="w-clearfix nav-res-link">
                                <a href="portfolio-classic-grid.html" className="res-txt change-size animsition-link">Classic Grid</a>
                              </div>
                            </li>
                            <li>
                              <div className="w-clearfix nav-res-link">
                                <a href="portfolio-masonry.html" className="res-txt change-size animsition-link">Masonry</a>
                              </div>
                            </li>
                            <li>
                              <div className="w-clearfix nav-res-link">
                                <a href="portfolio-not-spaced.html" className="res-txt change-size animsition-link">Not Spaced</a>
                              </div>
                            </li>
                            <li>
                              <div className="w-clearfix nav-res-link">
                                <a href="portfolio-with-lightbox.html" className="res-txt change-size animsition-link">With Lightbox</a>
                              </div>
                            </li>
                            <li>
                              <div className="w-clearfix nav-res-link">
                                <a href="portfolio-hover-effects.html" className="res-txt change-size animsition-link">Hover Effects</a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div data-ix="open-dd-res" className="w-clearfix nav-res-link"><a href="#" className="res-txt">blog</a>
                            <a href="#" className="w-inline-block arrow-ico-res">
                              <i className="fa fa-angle-down" />
                            </a>
                          </div>
                          <ul className="w-list-unstyled dd-res">
                            <li>
                              <div className="w-clearfix nav-res-link">
                                <a href="blog-zig-zag.html" className="res-txt change-size animsition-link">Blog Zig-Zag</a>
                              </div>
                            </li>
                            <li>
                              <div className="w-clearfix nav-res-link">
                                <a href="blog-minimal.html" className="res-txt change-size animsition-link">Blog Minimal</a>
                              </div>
                            </li>
                            <li>
                              <div className="w-clearfix nav-res-link">
                                <a href="blog-grid.html" className="res-txt change-size animsition-link">Blog Grid</a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="w-clearfix nav-res-link"><a href="contact.html" className="res-txt animsition-link">Contact</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* END RESPONSIVE NAVIGATION */}
                {/* SECTION 1 */}
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
                              <div data-ix="move-up-on-slide" className="inner-title smaller dark">dark fashion</div>
                              <p data-ix="move-up-on-slide-2">Fashion Photography</p>
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
