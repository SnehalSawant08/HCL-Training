import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Home extends Component{




    render(){
        return(
            <div>
               
            <Link to="/Login" className="mr-3">Login</Link>
            </div>
        )
    }
}
export default Home;



