import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from'./components/login'
import Resigter from'./components/resigter'
import Newpass from'./components/newpassword'
import Forgotpass from'./components/forgotpass'
import Welcome from './components/welcome';


function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path='/' render = {(props) => {
                return (
                    <Login />
                );
            }} />
            <Route exact path='/welcome' render = {(props) => {
                return (
                    <Welcome/>
                )
            }} />
            <Route exact path='/resigter' render = {(props) => {
                return (
                    <Resigter/>
                )
            }} />
            <Route exact path='/forgotpass' render = {(props) => {
                return (
                    <Forgotpass />
                )
            }} />
            <Route exact path='/forgotpass/newpass' render = {(props) => {
                return (
                    <Newpass />
                )
            }} />
            
        </Switch>
    </Router>
  
     
    </div>
  );
}

export default App;
