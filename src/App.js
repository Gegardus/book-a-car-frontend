import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getCarsFromAPI } from './redux/reducers/cars';
import Splash from './pages/splashcreen/SplashScreen';
import Home from './pages/Home';
import Reserve from './pages/reservations/Reserve';
import Reservations from './pages/reservations/Reservations';
import DeleteCar from './pages/DeletePage/DeleteCar';
import withAuth from './components/auth/withAuth';
import './App.css';

function App() {
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
          <Route path="/reservations" component={withAuth(Reservations)} />
          <Route path="/delete" component={withAuth(DeleteCar)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
