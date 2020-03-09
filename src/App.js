import React from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThoughtPatterns from './components/ThoughtPatterns';
class App extends React.Component {
  
  render(){
    return(
      <div className = "App">
        <AppNavBar/>
        <ThoughtPatterns/>
      </div>
    )}
}

export default App;
