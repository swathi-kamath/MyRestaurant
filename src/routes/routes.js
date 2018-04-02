import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/home/home-component';
import Food from '../components/food/food-component';

export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route path= '/home' component={Home}/>
   <Route path= '/food' component={Food}/>
   </Switch>
   </BrowserRouter>
 )
}
