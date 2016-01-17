import React, {PropTypes} from 'react';
import $ from 'jquery';
import Royal_Preloader from '../../vendor/royal_preloader';

class RoyalPreLoader extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

    window.Royal_Preloader.config({
                    mode:       'line',
                    timeout:    10,
                    background: '#111'
    });

  }
  render() {
    return (
            <div id="royal_preloader" />
          );
  }

}
export default RoyalPreLoader;
