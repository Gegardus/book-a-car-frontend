import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getCarsFromAPI } from './redux/reducers/cars';
import Splash from './pages/splashcreen/SplashScreen';
import Home from './pages/Home';
import Reserve from './pages/reservations/Reserve';
import AddReservation from './pages/reservations/AddReservation';
import Reservations from './pages/reservations/Reservations';
import AddCar from './components/cars/AddCar';
import DeleteCar from './pages/DeletePage/DeleteCar';
import withAuth from './components/auth/withAuth';
import CarDetailsPage from './pages/CarDetails/CarDetailsPage';
import './App.css';

function App( {currentUser } ) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsFromAPI());
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/home" component={withAuth(Home)} />
          <Route path="/reserve" component={withAuth(Reserve)} />
          <Route path="/add_reservations" component={withAuth(AddReservation)} />
          <Route path="/reservations" component={withAuth(Reservations)} />
          {currentUser.role === 'admin' && (
            <Route path="/add_car" component={withAuth(AddCar)} />
          )}
          {currentUser.role === 'admin' && (
            <Route path="/delete" component={withAuth(DeleteCar)} />
          )}
          <Route path="/CarDetails/:Id" component={withAuth(CarDetailsPage)} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = ({ auth: { currentUser } }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(App);
