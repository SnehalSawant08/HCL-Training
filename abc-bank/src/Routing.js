
import React from 'react'

import './index.css'
import { Route, Link, Switch } from 'react-router-dom'

import Login from './Login'



const Routing  = ()=>{
    return (
        <div>
          <nav className="navbar navbar-expand-lg  p-0 justify-content-center" />
          <Link to="/" className="mr-3">Home</Link>
              <Link to="/Login" className="mr-3">Login</Link>
            
              {/* <Link to="/AccountSummary" className="mr-3">Account Summary</Link>
            
              <Link to="/Search">Search</Link></nav> */}
           <br/>
          <Switch>
            <Route  exact path="/" />
            <Route path="/Login" component={Login} />
            {/* <Route path="/Search" component={Search} />
            <Route path="/AccountSummary" component={AccountSummary} />
            <Route component={NotFound} /> */}
                     </Switch>
        </div>
    
    )
    
}
  export default Routing;