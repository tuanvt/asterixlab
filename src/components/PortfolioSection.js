import React from 'react';
import { SUBHAND_IMAGE } from './FeatureSection';

var echoesImage = require("../images/portfolios/echoes.jpg");
var fundstartImage = require("../images/portfolios/fundstart2.jpg");
var gerocImage = require("../images/portfolios/geroc2.jpeg");
var moballImage = require("../images/portfolios/moball.tv.png");
var otoxemayImage = require("../images/portfolios/otoxemay.jpg");
var peoplegaugeImage = require("../images/portfolios/peoplegauge.png");
var restaurantImage = require("../images/portfolios/restaurant.png");
var shineImage = require("../images/portfolios/shine2.jpg");

class PortfolioSection extends React.Component {

  render() {
    return (
      <div id="projects" className="w-section section-imp">
        <div className="w-container">
          <div className="title-wrapper">
            <h2>our projects</h2>
            <div><img src={SUBHAND_IMAGE} alt="handmade" />
            </div>
          </div>
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
            <div data-ix="move-filter-content-on-load" className="w-clearfix filters button-group">
              <a href="#" data-filter="*" className="button">All</a>
              <a href="#" data-filter=".web" className="button">Web</a>
              <a href="#" data-filter=".ios" className="button"> iOS App</a>
              <a href="#" data-filter=".custom" className="button">Custom Software</a>
              <a href="#" data-filter=".android" className="button">Android App</a>
            </div>
          </div>
          <div id="grid" className="w-clearfix grid">
            <div className="grid-sizer" />
            <div className="item ios android">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img src={echoesImage} alt="p7" />
                <a href="#" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Echoes App</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">iOS App</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item ios web ">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img src={shineImage} alt="p3" />
                <a href="#" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Shine Asbetos</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Web, iOS App</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item web">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img src={otoxemayImage} alt="p8" />
                <a href="#" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Otoxemay.vn</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Web, CMS, Editorial System</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item web">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img src={gerocImage} alt="p1" />
                <a href="#" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Geroc Travel</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Web, Drupal, CMS</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item web ">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img src={peoplegaugeImage} alt="p1-c" />
                <a href="#" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">People Gauge</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Web</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item web">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img src={fundstartImage} alt="p11" />
                <a href="#" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Fundstart.vn</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Web, CrowFunding</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item ios android web">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img src="https://unsplash.it/1500/1200?image=835" alt="p2" />
                <a href="#" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">NomNom.mobi</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">iOS App, Android App, Web</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item art">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img src="https://unsplash.it/1000/1200?image=668" alt="p8" />
                <a href="#" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Pupil Data Tracking</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Web</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="item web ios android">
              <div data-ix="hover-portfolio-content" className="portfolio-overlay wow fadeInUp"><img src={moballImage} alt="p4" />
                <a href="#" data-ix="hide-portfolio-content-on-load" className="w-inline-block portfolio-content">
                  <div className="portfolio-cn-title">
                    <h4 data-ix="scale-portfolio-title-on-load" className="portfolio-title">Moball tv</h4>
                    <div data-ix="scale-portfolio-title-on-load-2" className="portfolio-sub-title">Web, iOS App, Android App</div>
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
