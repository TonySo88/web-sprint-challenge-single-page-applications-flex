import React from "react";
import { Route, Link } from "react-router-dom";
import Pizza from "./components/Pizza";
import PizzaList from "./components/PizzaList";

const App = () => {
  const [nameState, setNameState] = useState({
    name: "",
  });

  const addName = (newName) => {
    setNameState([...nameState, newName]);
  };

  return (
    <div className="App">
      <h1>Lambda City Pizza</h1>
      <p>The best pizza delivery in the entire Northeast Lambda City region!</p>
      <div className="nav-links">
        <Link to="/">Pizza</Link>
        <Link to="/pizza-list">Build Your Pizza!</Link>
      </div>
      <Route
        exact
        path="/pizza-list/"
        component={PizzaList}
        addName={addName}
      />
      <Route path="/" component={Pizza} Pizza={nameState} />
    </div>
  );
};
export default App;
