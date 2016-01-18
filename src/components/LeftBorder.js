import React from 'react';
import $ from 'jquery';

class LeftBorder extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="left-border">
        <div data-ix="show-overlay-menu-on-click" className="w-embed move-center-hamb">
          <button className="c-hamburger c-hamburger--htla">
            <span>toggle menu</span>
          </button>
        </div>
      </div> );
  }
}

export default LeftBorder;
