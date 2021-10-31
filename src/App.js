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
import MyBooking from './Components/MyBooking/MyBooking';
import ManageAllBooking from './Components/ManageAllBooking/ManageAllBooking';
import AddTravelBlog from './Components/AddTravelBlog/AddTravelBlog';
import TravelList from './Components/TravelList/TravelList';
import SingleTravelListInfo from './Components/SingleTravelListInfo/SingleTravelListInfo';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ConfirmBooking from './Components/ConfirmBooking/ConfirmBooking';
import AddNewTravel from './Components/AddNewTravel/AddNewTravel';
import GalleryImage from './Components/GalleryImage/GalleryImage';
import AllBlogList from './Components/AllBlogList/AllBlogList';
// import MyMap from './Components/MyMap/MyMap';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/gallery">
              <GalleryImage></GalleryImage>
            </Route>
            {/* <Route path="/vacation">
            <Vacation></Vacation>
          </Route> */}
            {/* <Route path="/tourism">

          </Route> */}


            <Route path="/travel">
              <TravelList></TravelList>

            </Route>
            {/* <Route path="/travelbooking/:travelId">
              <SingleTravelListInfo></SingleTravelListInfo>


            </Route> */}


            <PrivateRoute path="/travelbooking/:travelId">
              <SingleTravelListInfo></SingleTravelListInfo>


            </PrivateRoute>


            <Route path="/confirmbooking">
              <ConfirmBooking></ConfirmBooking>

            </Route>

            <Route path="/login">
              <Login></Login>

            </Route>
            <Route path="/admin">
              <AdminDashboard></AdminDashboard>

            </Route>
            <Route path="/mybooking">
              <MyBooking></MyBooking>

            </Route>
            <Route path="/manageallbooking">
              <ManageAllBooking></ManageAllBooking>

            </Route>

            <Route path="/addtravel">
              <AddNewTravel></AddNewTravel>

            </Route>
            <Route path="/addtravelblog">
              <AddTravelBlog></AddTravelBlog>

            </Route>
            <Route path="/showallblog">
              <AllBlogList></AllBlogList>

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
      </AuthProvider>

    </div>
  );
}

export default App;
