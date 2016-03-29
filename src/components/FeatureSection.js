import React from 'react';
var mockupMp4 = require('../videos/Mock-up/Mp4/Mock-up.mp4');
var mockupWebm = require('../videos/Mock-up/Webm/Mock-up.webm');
var mockupOgv = require('../videos/Mock-up/Ogv/Mock-up.ogv');
var mockupJpg = require('../videos/Mock-up/Snapshot/Mock-up.jpg');
export const SUBHAND_IMAGE = require("../images/sub-handmade.png");


class FeatureSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="intro" className="w-section banner-one">
        <div className="video-wrapper">
         <div className="w-embed embed-video">
           <video autoPlay loop style={{width: '100%', height: 'auto', position: 'absolute', zIndex: -1}}>
              <source src={mockupMp4} type="video/mp4" />
              <source src={mockupWebm} type="video/webm" />
              <source src={mockupOgv} type="video/ogv" />
              <img src={mockupJpg} alt="background" />
            </video>
         </div>
         <div className="video-overlay"></div>
        </div>
        <div className="w-container container-contact">
         <div className="align-center">
           <h1 className="inner-title">WE make <span className="element">CREATIVE</span> Apps</h1>
           <p className="sub-text-title">Let&#39;s get started in crafting your mobile or web apps!</p>
           <div><img src={SUBHAND_IMAGE} alt="handmade"/>
           </div>
         </div>
       </div>
      </div>
    );
  }
}

export default FeatureSection;
