import React from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  
  render(){
    return(
      <div className = "App">
        <AppNavBar/>
      </div>
    )}
}

export default App;
