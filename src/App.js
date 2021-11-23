import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import "./assets/style.css";

import { MemberRoute } from "components/Routes/MemberRoute";
import { GuestRoute } from "components/Routes/GuestRoute";

import Login from "pages/Login";
import NotFound from "pages/404";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
