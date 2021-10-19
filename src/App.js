
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/Notfound/Notfound';
import Detail from './Components/Detail/Detail';




function App() {
  return (
    <div>
      
      <Router >
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact  path="/service/:serviceId">
              <Detail/>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
     
       
        
    </div>
  );
}

export default App;
