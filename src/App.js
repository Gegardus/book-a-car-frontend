import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Splash from './pages/splashcreen/SplashScreen';
import Home from './pages/Home';
import DeleteCar from './pages/DeleteCar';
import './App.css';

import withAuth from './components/auth/withAuth';

function App() {
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
