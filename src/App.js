import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 


 export default class App extends Component {

  render() {
     return (
       <Router>
       <div>
         <Navbar/>
         <Switch>
          <Route exact path="/">
          <News  key="general" pagesize={6} country={'in'} category={'General'}/>
         </Route>
         <Route exact path="/sports">
          <News  key="sports" pagesize={6} country={'in'} category={'Sports'}/>
         </Route>
         <Route exact path="/entertainment">
          <News  key="entertainment" pagesize={6} country={'in'} category={'Entertainment'}/>
         </Route>
         <Route exact path="/health">
          <News  key="health" pagesize={6} country={'in'} category={'Health'}/>
          </Route>


    <Route exact path="/business">
          <News  key="business" pagesize={6} country={'in'} category={'business'}/>
         </Route>
             
         <Route exact path="/science">
          <News  key="science" pagesize={6} country={'in'} category={'Science'}/>
         </Route>
        
         <Route exact path="/technology">
          <News  key="technology" pagesize={6} country={'in'} category={'Technology'}/>
         </Route>
        
         </Switch>
       </div>
       </Router>
     )
   }
 }
 