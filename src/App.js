import "./App.css";
import { Route, Switch } from "react-router-dom";
import GridMasonry from "./obscure-css/grid-masonry/GridMasonry";
import Home from "./obscure-css/home";
import ClipPath from "./obscure-css/clip-path/ClipPath";
import Dogs from "./react-query/Dogs";
import QueryDogs from "./react-query/QueryDogs";

function App() {

  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/query-dogs" component={QueryDogs} />
          <Route path="/masonry" component={GridMasonry} />
          <Route path="/clip-path" component={ClipPath} />
        </Switch>
      </div>
  );
}

export default App;
