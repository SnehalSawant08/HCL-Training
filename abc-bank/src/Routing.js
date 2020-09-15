
import React from 'react'
import './index.css'
import { Route, Switch } from 'react-router-dom'
import Login from './Login';
import Account from './Account'
import Home from './Home'
import MiniStatement from './MiniStatement';
import DetailStatement from './DetailStatement';
import Search from './Search';
import AdminUserPage from './AdminUserPage';

const Routing  = ()=>{
    return (
        <div>
          <nav className="navbar navbar-expand-lg  p-0 justify-content-center" />
           <br/>
          <Switch>
            <Route  exact path="/" component={Home}/>
            <Route path="/Login" component={Login} />
            <Route path="/account/:userid" component={Account}/>
            <Route path="/ministat/:acnum" component={MiniStatement}/>
            <Route path="/detailstat/:acnum" component={DetailStatement}/>
            <Route path="/search" component={Search}/>
            <Route path="/adminuser" component={AdminUserPage}/>
          </Switch>
        </div>
    )
}
  export default Routing;