import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as act from './actions/loginActions'
import { Redirect } from 'react-router-dom'


class Login extends Component {

    constructor(props) {
        super();
        this.state = {
            username: "",
            password: "",
            
        }
        this.checkUserInfo = this.checkUserInfo.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
       
    }

    
    checkUserInfo = (event) => {
        event.preventDefault();
      
        this.props.getUserDetails(this.state.username,this.state.password)
        
  
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    render() {

        
        return (


            <div className="container">
                
            
                <div className="row">
                    <div className="col-sm-3">
               
                    </div>
                    <div className="col-sm-6">
                        <br/><br/>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label text-white">Username</label>
                                <div className="col-sm-10">
                                    <input type="username" className="form-control" name="username" onChange={this.myChangeHandler} placeholder="Username" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label text-white">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" name="password" onChange={this.myChangeHandler}  placeholder="Password" />
                                </div>
                            </div>
                            <input
                                type='submit' className="btn btn-light" onClick={this.checkUserInfo}
                            />
                        </form>
                    </div>
                    <div className="col-sm-3"> </div>
                    {this.props.userData === 'false' && 
                    <p className="text-white">Password incorrect</p>}
                    {this.props.userData && this.props.userData.role === 'user' && 
                    
                    <Redirect to={`/account/${this.props.userData.userid}`}/>}
                     {this.props.userData && this.props.userData.role === 'admin' && 
                    
                    <Redirect to="/adminuser"/>}

                  
                    
                    
                    
                </div>
            </div>
            
        )
    }

}
const mapStateToProps=(state)=> {
    return {
      userData:state.userData
    };
  }
  const mapDispatchToProps = (dispatch) => ({
    getUserDetails: (name,pass) => {
       dispatch(act.getUserDetails(name,pass));
  }
  })
  export default connect(mapStateToProps,mapDispatchToProps)(Login);

