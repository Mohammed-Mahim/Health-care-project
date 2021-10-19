
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';





function App() {
  return (
    <div>
        <Router >
          <Header></Header>
          <Switch>
            <Route exact to="/">
              <Home></Home>
            </Route>
            <Route to="/home">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
