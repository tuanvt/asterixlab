import React from 'react';

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
              <source src="../videos/Mock-up/Mp4/Mock-up.mp4" type="video/mp4" />
              <source src="../videos/Mock-up/Webm/Mock-up.webm" type="video/webm" />
              <source src="../videos/Mock-up/Ogv/Mock-up.ogv" type="video/ogv" />
              <img src="../videos/Mock-up/Snapshot/Mock-up.jpg" alt="background" />
            </video>
         </div>
         <div className="video-overlay"></div>
        </div>
        <div className="w-container container-contact">
         <div className="align-center">
           <h1 className="inner-title">WE make <span className="element">CREATIVE</span> Apps</h1>
           <p className="sub-text-title">Let's get started in crafting your mobile or web apps!</p>
           <div><img src="images/sub-handmade-c.png" alt="handmade"/>
           </div>
         </div>
       </div>
      </div>
    );
  }
}

export default FeatureSection;
