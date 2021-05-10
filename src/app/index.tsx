import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import LocalWeather from "../pages/local";
import ExtendedWeather from "../pages/extendedForecast";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="nav-route">
          <Link className="page-link__local" to="/">
            Local weather
          </Link>
          <Link className="page-link__16day" to="/extended">
            16 Day Forecast
          </Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <LocalWeather />
          </Route>
          <Route exact path="/extended">
            <ExtendedWeather />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
