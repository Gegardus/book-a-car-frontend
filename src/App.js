import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getCarsFromAPI } from './redux/reducers/cars';
import Splash from './pages/splashcreen/SplashScreen';
import Home from './pages/Home';
import DeleteCar from './pages/DeleteCar';
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
          <Route path="/delete" component={withAuth(DeleteCar)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
