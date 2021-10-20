import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/Notfound/Notfound';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';

import Detail from './Components/Detail/Detail'
import Service from './Components/Home/Service/Service';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router >
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
           
            <PrivateRoute exact path="/service/:serviceId">
              <Detail></Detail>
            </PrivateRoute>
            <Route exact path="/service">
              <Service></Service>
            </Route>
            
            <Route exact path="/login">
              <Login/> 
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
      
     
         
    </div>
  );
}

export default App;
