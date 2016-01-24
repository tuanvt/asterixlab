import React from 'react';

class PortfolioSection extends React.Component {

  render() {
    return (
      <div id="filter" className="w-section section-imp">
        <div className="w-container">
          <div className="w-clearfix filter-cont">
            ,
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
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/1000" alt="p7" />
                <a href="portfolio-item-1.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Quisque libero</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Branding, Photography</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item art print">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/1000/1500" alt="p2" />
                <a href="portfolio-item-2.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Vestibulum ante</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Digital Art, Print</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item photo art">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/700" alt="p8" />
                <a href="portfolio-item-3.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Nunc nulla</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography, Digital Art</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item photo">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/800/1200" alt="p1" />
                <a href="portfolio-item-4.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Nulla sit</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item brand print">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/900" alt="p1" />
                <a href="portfolio-item-5.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Etiam feugiat</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Branding, Print</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item photo art">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/1000/1500" alt="p11" />
                <a href="portfolio-item-6.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Ut varius</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography, Digital Art</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item print">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/1200" alt="p10" />
                <a href="portfolio-item-7.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Donec id</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Print</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item art">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/1300" alt="p8_1" />
                <a href="portfolio-item-8.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Nam quam</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Digital Art</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item photo">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/700" alt="p4" />
                <a href="portfolio-item-1.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Aenean leo</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item photo">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/650" alt="p5" />
                <a href="portfolio-item-2.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Praesent congue</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Photography</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item art">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/1000" alt="p9" />
                <a href="portfolio-item-3.html" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content animsition-link">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Nulla facilisi</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Digital Art</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item photo">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img width={500} src="https://unsplash.it/800" alt="p1-prove" />
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
    );
  }
}

export default PortfolioSection;
