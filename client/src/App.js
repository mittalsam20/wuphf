import "./App.css";
import Home from "./pages/home/home";
import { Person } from "@material-ui/icons";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
