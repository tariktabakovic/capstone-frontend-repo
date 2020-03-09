import React from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThoughtPatterns from './components/ThoughtPatterns';

import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component {
  
  render(){
    return(
      <Provider store={store}>
        <div className = "App">
          <AppNavBar/>
          <ThoughtPatterns/>
        </div>
      </Provider>
    )}
}

export default App;
