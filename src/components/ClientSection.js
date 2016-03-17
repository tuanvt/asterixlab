import React from 'react';
import $ from 'jquery';

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
            <div><img src="images/sub-handmade.png" alt="handmade" />
            </div>
          </div>
          <div className="w-row">
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.3s"><img width={147} src="images/logos/echoes.png" alt="logo-1" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.4s"><img width={147} src="images/logos/hottab-logo.png" alt="logo-4" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.5s"><img width={147} src="images/logos/warbler.svg" alt="logo-2" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.6s"><img width={147} src="images/logos/wet.png" alt="logo-5" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.7s"><img width={147} src="images/logos/uniity-logo.png" alt="logo-3" />
              </a>
            </div>
            <div className="w-col w-col-2 w-clearfix">
              <a href="#" className="w-inline-block logo-wrapper wow fadeIn" data-wow-delay="0.8s"><img width={147} src="images/logos/otoxemay.png" alt="logo-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ClientSection;
