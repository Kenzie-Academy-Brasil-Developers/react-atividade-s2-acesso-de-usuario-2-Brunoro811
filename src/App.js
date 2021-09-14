import "./App.css";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import Customer from "./Pages/Customer";
import Company from "./Pages/Company";
function App() {
  return (
    <div className="App App-header">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Customer/:id">
          <Customer />
        </Route>
        <Route path="/Company/:id">
          <Company />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
