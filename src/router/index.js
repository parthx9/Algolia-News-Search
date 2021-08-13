import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "../views/Home";
import News from "../views/News";


const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/news/:newsID" component={News} />
      </Switch>
    </Router>
  )
}

export default RouterConfig