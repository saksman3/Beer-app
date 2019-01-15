import React from 'react';
import AppRoute from './routers/routes';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

export default class App extends React.Component{
  render(){
    const store = configureStore();
    return(
      <Provider store ={store}>
          <AppRoute/>
      </Provider>
    );
  }
}
