import './App.css';
import Cart from './Pages/Cart';
import Header from './components/Header';
import Home from './Pages/Home';
import { Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/cart" exact>
                <Cart/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
