import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurent from './components/Restaurent/Restaurent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';


function App() {
  return (
    <div className="app" >
      <Header></Header>

      <Router>
        <Switch>

          <Route exact path="/resturent">
            <Restaurent></Restaurent>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route exact path="/">
            <Restaurent></Restaurent>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
