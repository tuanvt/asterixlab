import React from 'react';

class MainNavigation extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render (){
    return (
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
    );
  }
}
export default MainNavigation;
