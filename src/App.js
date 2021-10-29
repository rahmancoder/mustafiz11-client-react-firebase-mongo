import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Vacation from './Components/Vacation/Vacation';
import Login from './Components/Login/Login';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import MyMap from './Components/MyMap/MyMap';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/vacation">
            <Vacation></Vacation>
          </Route> */}
          {/* <Route path="/tourism">

          </Route> */}

          <Route path="/login">
            <Login></Login>

          </Route>
          <Route path="/admin">
            <AdminDashboard></AdminDashboard>

          </Route>
          {/* <Route path="/map">
            <MyMap></MyMap>
          </Route> */}


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
