import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import LogIn from './views/LogIn';
import Register from './views/Register';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/log-in'><LogIn /></Route>
          <Route path='/register'><Register /></Route>

          <Route path='/'><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
