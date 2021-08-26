import "./App.css";
import Home from "./pages/home/home";
import { Person } from "@material-ui/icons";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <login />
          </Route>
          <Route path="/register" exact>
            <register />
          </Route>
          <Route path="/profile/:username" exact>
            <register />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
