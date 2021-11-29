import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { populateProfile } from "./store/actions/users";
import { setAuthorizationHeader } from "./configs/axios";

import UsersAPI from "./api/user";

import MemberRoute from "./components/Routes/MemberRoute";
import GuestRoute from "./components/Routes/GuestRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import MyClass from "./pages/MyClass";
import DetailsClass from "./pages/DetailsClass";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import Joined from "./pages/Joined";
import Unauthenticated from "./pages/401";
import NotFound from "./pages/404";

import "./assets/style.css";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  const dispatch = useDispatch();

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("MICOURSE:token")) {
      session = JSON.parse(localStorage.getItem("MICOURSE:token"));
      setAuthorizationHeader(session.token);

      UsersAPI.details().then((details) => {
        dispatch(populateProfile(details.data));
      });
    }
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <GuestRoute path="/private" component={Unauthenticated} />
          <MemberRoute exact path="/" component={MyClass} />
          <MemberRoute exact path="/joined/:class" component={Joined} />
          <MemberRoute
            exact
            path="/courses/:class/:chapter/:uid"
            component={DetailsClass}
          />
          <MemberRoute exact path="/courses/:class" component={DetailsClass} />
          <MemberRoute path="/settings" component={Settings} />
          <MemberRoute path="/transactions" component={Transactions} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
