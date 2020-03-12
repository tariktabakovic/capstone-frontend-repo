import React from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThoughtPatterns from './components/ThoughtPatterns';
import ThoughtModal from './components/ThoughtModal';
import {Container} from 'reactstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions'
import {LoginModalAttempt} from './components/auth/LoginModalAttempt';
import {LoginModal} from './components/auth/LoginModal';
import Game from './components/Game.js';
class App extends React.Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  
  render(){
    return(
      <Provider store={store}>
        {/* <Router> */}
          {/* <Switch> */}
          <div className = "App">
            {/* <Route exact path= "/" component={AppNavBar}></Route> */}
            <AppNavBar/>
            {/* <Route exact path= "/home" render={(routeProps)=>(<Container><ThoughtModal/><ThoughtPatterns/></Container>)}/> */}
            <Container>
              {/* <Game/> */}
              <ThoughtModal/>
              <ThoughtPatterns/>
            </Container> 
            </div>
          {/* </Switch> */}
        {/* // </Router> */}
      </Provider>
    )}
}

export default App;
