import React from 'react';

class MainNavigation extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render (){
    return (
      <div data-ix="hide-overlay-menu-on-load" className="overlay-menu">
        <div className="w-container port-contatiner">
          {/* NAVIGATION */}
          <nav>
            <ul className="w-list-unstyled ul-nav">
              <li data-ix="close-dropdown-on-hover">
                <a href="#intro" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link">
                  <h3 className="biger">Home</h3>
                </a>
              </li>
              <li data-ix="close-dropdown-on-hover">
                <a href="#projects" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link ">
                  <h3 className="biger">Projects</h3>
                </a>
              </li>
              <li data-ix="close-dropdown-on-hover">
                <a href="#service" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link">
                  <h3 className="biger">Services</h3>
                </a>
              </li>
              <li data-ix="close-dropdown-on-hover">
                <a href="#client" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link">
                  <h3 className="biger">Clients</h3>
                </a>
              </li>
              <li data-ix="close-dropdown-on-hover">
                <a href="#contact" data-ix="show-dropdown-on-hover" className="w-inline-block nav-link ">
                  <h3 className="biger">contact</h3>
                </a>
              </li>
            </ul>
          </nav>
          {/* END NAVIGATION */}
        </div>
      </div>
    );
  }
}
export default MainNavigation;
