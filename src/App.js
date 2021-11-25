import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/style.css";

import MemberRoute from "components/Routes/MemberRoute";
import GuestRoute from "components/Routes/GuestRoute";

import Login from "pages/Login";
import Register from "pages/Register";
import MyClass from "pages/MyClass";
import Unauthenticated from "pages/401";
import NotFound from "pages/404";

import { populateProfile } from "store/actions/users";
import { setAuthorizationHeader } from "configs/axios";

import UserAPI from "api/users";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  const dispatch = useDispatch();

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("MICOURSE:token")) {
      session = JSON.parse(localStorage.getItem("MICOURSE:token"));
      setAuthorizationHeader(session.token);

      UserAPI.details().then((details) => {
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
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
