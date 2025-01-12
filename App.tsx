/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import SignIn from './src/screens/SignIn';
import Zomato from './src/Zomato';
import {Provider} from 'react-redux';
import store from './src/reducer/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Zomato />
      </Provider>
    </>
  );
};

export default App;
