
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import OrderReviw from './Components/OrderReviw/OrderReviw';
import Shop from './Components/Shop/Shop';



function App() {
  return (
    <div >
        
        <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route exact path="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path="/review">
               <OrderReviw></OrderReviw>
            </Route>
            <Route exact path="/inventory">
               <Inventory></Inventory>
            </Route>
            <Route  path="*">
               <NotFound></NotFound>
            </Route>

          </Switch>




        </Router>
        
    </div>
  );
}

export default App;
