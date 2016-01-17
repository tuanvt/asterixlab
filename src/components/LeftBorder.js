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
      {/* LEFT BORDER */}
      <div className="left-border">
        <div data-ix="show-overlay-menu-on-click" className="w-embed move-center-hamb">
          <button className="c-hamburger c-hamburger--htla">
            <span>toggle menu</span>
          </button>
        </div>
      </div>
      {/* RIGHT BORDER */}
      <div className="right-border" />
      )
  }
}

export default LeftBorder
