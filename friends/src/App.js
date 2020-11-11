import { Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

//STYLES
import './App.css';


function App() {
  return (
    <div className="App">
        <Link to="/Login">Login</Link>
        <Link to="#">Logout</Link>
        {/* <Link to="/Friends">Friends</Link> */}
        <Link to="/protected">Protected Page</Link>
    <Switch>
      <PrivateRoute exact path="/protected" component={Friends} />
      {/* <Route path="/Friends" component={Friends}></Route> */}
      <Route path="/Login" component={Login}></Route>
      <Route></Route>
    </Switch>
      </div>
  );
}

export default App;
