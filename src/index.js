import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './styles/normalize.css';
import './styles/base.css';
import './styles/style.css';

import './styles/royal_preloader.css';
import './styles/animsition.min.css';
import './styles/jquery.fullPage.css';
import './styles/jquery.fancybox.css';
import './styles/font-awesome.min.css';
import './styles/animate.css';
import './styles/mb-comingsoon.css';
import './styles/fontastic.css';
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
