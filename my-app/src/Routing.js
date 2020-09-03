
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Login from './Login'
import Register from './Register';
import NotFound from './NotFound'

const Routing  = ()=>{
    return (
        <div>
          <nav className="navbar navbar-expand-lg  p-0 justify-content-center" >
              <Link to="/" className="mr-3">Home</Link>
            
              <Link to="/Login" className="mr-3">Login</Link>
            
              <Link to="/Register">Register</Link></nav>
           <br/>
          <Switch>
            <Route  exact path="/" />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route component={NotFound} />
                     </Switch>
        </div>
    
    )
    
}
  export default Routing;