import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Vacation from './Components/Vacation/Vacation';

function App() {
  return (
    <div className="App">

      <Router>
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
          <Route path="/tourism">

          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>

      </Router>

    </div>
  );
}

export default App;
