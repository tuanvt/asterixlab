import React from 'react';

class ResponsiveNagivation extends React.Component {
  constructor(props) {
    super(props);
    }
  render () {
    return (
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
    );
  }
}
export default ResponsiveNagivation;
