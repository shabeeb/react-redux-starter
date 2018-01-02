/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';
import './styles/app.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();

const render = Component => (
  ReactDOM.render(
  	<Provider store={store}>
    <AppContainer>
      <Component />
    </AppContainer>
    </Provider>,
    document.getElementById('app'),
  )
);


render(App);
console.log('module.hot', module.hot);
if (module.hot) {
  module.hot.accept('./components/app', () => { render(App); });
}
