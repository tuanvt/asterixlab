import React from 'react';
import $ from 'jquery';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  render () {
    return (
              <div className="top-border">
                <div className="w-row">
                  <div className="w-col w-col-6 w-clearfix">
                    <a href="index.html" className="w-inline-block brand-logo animsition-link">
                      {/*<svg id="logo" className="Animate-Path" width="45px" height="40px" viewBox="0 -34 160 250" xmlSpace="preserve">
                        <use id="draw-text" className="animate-draw" xlinkHref="#logo-text" />
                      </svg>
                      */}
                      <img width={165} src="images/logo.png" alt="logo" />
                    </a>
                    {/*
                    <svg id="logo-defs" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <lineargradient id="MyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="5%" stop-color="#e5c45c" />
                          <stop offset="50%" stop-color="#e5c45c" />
                          <stop offset="95%" stop-color="#e5c45c" />
                        </lineargradient>
                        <g id="logo-text">
                          <path id="Asterix" className="Text" d="M 36.76 60.30 C 55.42 45.10 77.56 32.71 101.99 30.84 C 111.97 29.63 122.37 30.89 131.32 35.66 C 143.06 41.61 152.47 52.50 155.74 65.35 C 157.84 72.72 157.09 80.44 157.13 87.99 C 157.32 105.35 156.57 122.71 156.66 140.06 L 157.17 140.61 C 162.92 140.75 168.65 139.90 174.40 139.74 C 173.96 148.12 174.73 156.51 174.17 164.88 C 157.58 168.99 140.46 170.61 123.40 170.79 C 118.78 166.59 115.41 161.27 111.09 156.81 C 98.26 163.38 84.60 169.17 70.12 170.57 C 60.78 171.67 51.63 168.19 43.92 163.16 C 36.06 157.86 29.23 150.24 26.99 140.81 C 25.11 132.90 27.90 124.73 32.00 118.00 C 39.20 106.37 51.23 98.54 63.96 94.12 C 70.17 91.94 76.71 90.96 83.19 89.94 C 84.02 99.58 84.63 109.24 85.40 118.89 C 91.20 116.99 97.15 115.64 102.99 113.90 C 100.08 127.16 97.35 140.46 94.41 153.71 C 95.73 152.21 96.86 150.57 97.83 148.83 C 110.79 128.49 124.17 108.40 136.93 87.94 C 127.44 90.50 117.73 92.13 108.17 94.44 C 110.53 88.75 110.19 82.27 108.51 76.44 C 106.98 71.24 102.69 66.95 97.35 65.76 C 89.33 63.79 81.17 66.58 73.91 69.88 C 66.53 73.35 59.33 77.32 52.88 82.35 C 47.07 75.33 41.60 68.02 36.76 60.30 Z" />
                        </g>
                      </defs>
                    </svg>
                    */}
                  </div>
                  <div className="w-col w-col-6">
                    <div className="social-wrapper">
                      <a href="#" className="w-inline-block social-icon facebook">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" className="w-inline-block social-icon twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className="w-inline-block social-icon behance">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#" className="w-inline-block social-icon instagram">
                        <i className="fa fa-behance" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}
export default Header;
