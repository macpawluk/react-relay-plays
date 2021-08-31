import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { AppConstants } from "./AppConstants";
import FriendDetails from "./components/FriendDetails";
import Friends from "./components/Friends";
import Viewer from "./components/Viewer";

function App() {
  return (
    <Router>
      <div>
        <Route path={AppConstants.Routing.Details} component={FriendDetails} />
        <Route
          exact={true}
          path={AppConstants.Routing.Viewer}
          component={Viewer}
        />
        <Route
          exact={true}
          path={AppConstants.Routing.Home}
          component={Friends}
        />
      </div>
    </Router>
  );
}

export default App;
