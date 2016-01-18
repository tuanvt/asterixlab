import React from 'react';
import $ from 'jquery';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render () {
    var currentdate = new Date();
    var currentYear = currentdate.getFullYear() ;
    return (
      <div className="bottom-border">
        <div className="w-hidden-medium w-hidden-small w-hidden-tiny title-top-border">
          <div>Asterix Lab Copyright &#9400; {currentYear}.&nbsp;ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    );
  }
}

export default Footer;
