import React from 'react';

class OurTeamSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="about" className="w-section section-imp">
       <div className="w-container">
         <div>
           <div className="title-wrapper">
             <h2>the team we love</h2>
             <div><img src="images/sub-handmade.png" alt="handmade" />
             </div>
           </div>
           <div className="w-clearfix">
             <div className="item wow fadeInUp" data-wow-delay="0.4s">
               <div data-ix="show-team-content" className="team-wrapper"><img src="images/tu.jpg" alt="team-2" />
                 <div className="team-overlay">
                   <div data-ix="move-up-team-contetn" className="team-content">
                     <h4 className="team-name">Tu Truong</h4>
                     <div className="portfolio-sub-title lighter">Creative Director</div>
                     <div className="social-team">
                       <a href="#" className="w-inline-block social-icon social-white facebook">
                         <div className="w-embed"><i className="fa fa-facebook" />
                         </div>
                       </a>
                       <a href="#" className="w-inline-block social-icon twitter social-white">
                         <div className="w-embed"><i className="fa fa-twitter" />
                         </div>
                       </a>
                       <a href="#" className="w-inline-block social-icon instagram social-white">
                         <div className="w-embed"><i className="fa fa-behance" />
                         </div>
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="item wow fadeInUp" data-wow-delay="0.6s">
               <div data-ix="show-team-content" className="team-wrapper"><img src="images/tien.png" alt="team-1" />
                 <div className="team-overlay">
                   <div data-ix="move-up-team-contetn" className="team-content">
                     <h4 className="team-name">Tien Vu</h4>
                     <div className="portfolio-sub-title lighter">Ruby On Rails Guru</div>
                     <div className="social-team">
                       <a href="#" className="w-inline-block social-icon social-white facebook">
                         <div className="w-embed"><i className="fa fa-facebook" />
                         </div>
                       </a>
                       <a href="#" className="w-inline-block social-icon twitter social-white">
                         <div className="w-embed"><i className="fa fa-twitter" />
                         </div>
                       </a>
                       <a href="#" className="w-inline-block social-icon instagram social-white">
                         <div className="w-embed"><i className="fa fa-behance" />
                         </div>
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="item wow fadeInUp" data-wow-delay="0.8s">
               <div data-ix="show-team-content" className="team-wrapper"><img src="images/Cuong.jpg" alt="team-3" />
                 <div className="team-overlay">
                   <div data-ix="move-up-team-contetn" className="team-content">
                     <h4 className="team-name">Cuong Bui </h4>
                     <div className="portfolio-sub-title lighter">iOS Guru</div>
                     <div className="social-team">
                       <a href="#" className="w-inline-block social-icon social-white facebook">
                         <div className="w-embed"><i className="fa fa-facebook" />
                         </div>
                       </a>
                       <a href="#" className="w-inline-block social-icon twitter social-white">
                         <div className="w-embed"><i className="fa fa-twitter" />
                         </div>
                       </a>
                       <a href="#" className="w-inline-block social-icon instagram social-white">
                         <div className="w-embed"><i className="fa fa-behance" />
                         </div>
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="item wow fadeInUp" data-wow-delay="0.8s">
               <div data-ix="show-team-content" className="team-wrapper"><img src="images/Quynh.jpg" alt="team-3" />
                 <div className="team-overlay">
                   <div data-ix="move-up-team-contetn" className="team-content">
                     <h4 className="team-name">Quynh Nguyen  </h4>
                     <div className="portfolio-sub-title lighter">Web Fullstack Guru</div>
                     <div className="social-team">
                       <a href="#" className="w-inline-block social-icon social-white facebook">
                         <div className="w-embed"><i className="fa fa-facebook" />
                         </div>
                       </a>
                       <a href="#" className="w-inline-block social-icon twitter social-white">
                         <div className="w-embed"><i className="fa fa-twitter" />
                         </div>
                       </a>
                       <a href="#" className="w-inline-block social-icon instagram social-white">
                         <div className="w-embed"><i className="fa fa-behance" />
                         </div>
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

           </div>
         </div>
       </div>
     </div>
    );
  }
}

export default OurTeamSection;
