import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            
        }
        this.checkUserInfo = this.checkUserInfo.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
       
    }

    
    checkUserInfo = (event) => {
        event.preventDefault();
        if(this.state.username && this.state.password)
        {
        axios.get('http://localhost:3000/users/',{
            params: {
              username: this.state.username
            }
          })
        .then(res=> {
           
            console.log(res.data[0].password)
        })} 
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    render() {

        
        return (


            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
               
                    </div>
                    <div class="col-sm-6">
                        <br/><br/>
                        <form>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-white">Username</label>
                                <div class="col-sm-10">
                                    <input type="username" class="form-control" name="username" onChange={this.myChangeHandler} placeholder="Username" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-white">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="password" onChange={this.myChangeHandler}  placeholder="Password" />
                                </div>
                            </div>
                            <input
                                type='submit' className="btn btn-light" onClick={this.checkUserInfo}
                            />
                        </form>
                    </div>
                    <div class="col-sm-3">
                 
                    </div>
                </div>
            </div>
            
        )
    }

}

export default Login;