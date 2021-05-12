import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import GridMasonry from './obscure-css/grid-masonry/GridMasonry';
import ClipPath from './obscure-css/clip-path/ClipPath';

function App() {
  return (
    
    <div className="App">
      <Switch>
        <Route path='/masonry' component={GridMasonry} />
        <Route path='/clip-path' component={ClipPath} />
      </Switch>
    </div>
  );
}

export default App;
