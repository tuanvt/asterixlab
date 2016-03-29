import React from 'react';
import $ from 'jquery';
import { SUBHAND_IMAGE } from './FeatureSection';
var echoesLogo = require('../images/logos/echoes.png');
var hottabLogo = require('../images/logos/hottab-logo.png');
var warblerLogo = require('../images/logos/warbler.jpg');
var wetLogo = require('../images/logos/wet.png');
var uniityLogo = require('../images/logos/uniity-logo.png');
var otoxemayLogo = require('../images/logos/otoxemay.png');


class ClientSection extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  render () {
    return (
      <div id="client" className="w-section section-imp dark-gray more-padding">
        <div className="w-container">
          <div className="title-wrapper">
            <h2>Clients</h2>
            <div><img src={SUBHAND_IMAGE} alt="handmade" />
            </div>
          </div>
          <div className="w-row">
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.3s"><img width={147} src={echoesLogo} alt="logo-1" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.4s"><img width={147} src={hottabLogo} alt="logo-4" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.5s"><img width={147} src={warblerLogo} alt="logo-2" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.6s"><img width={147} src={wetLogo} alt="logo-5" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.7s"><img width={147} src={uniityLogo} alt="logo-3" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.8s"><img width={147} src={otoxemayLogo} alt="logo-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ClientSection;
