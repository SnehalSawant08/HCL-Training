import React, { Fragment } from 'react';



class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            sampleusername: "",
            password: "",
            samplepassword: "",
            isLoggedIn: false
            
        }
    }


    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    checkUserInfo = (event) => {
        event.preventDefault();
        const matched = this.state.sampleusername === this.state.username &&  this.state.samplepassword === this.state.password;
        
        if(matched){
            this.setState({isLoggedIn:"true"})
        }
        else{
            throw new Error("wrong password");
        }
    }

    componentDidMount() {
        this.setState({
            sampleusername: "snehal",
            samplepassword: "snehal"
        })
    }

    shouldComponentUpdate(){
        return true;
    }

    
    render() {

        return (
            
            <div>
                {!this.state.isLoggedIn &&

                    <div>
                        <form className="text-white">
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Username :</label>
                                <div className="col-10">
                                    <input className="form-control" type="textbox" name="username" onChange={this.myChangeHandler} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-2 col-form-label">Password :</label>
                                <div className="col-10">
                                    <input className="form-control" type="password" name="password" onChange={this.myChangeHandler} />
                                </div>
                            </div>
                            <input
                                type='submit' onClick={this.checkUserInfo}
                            />
                        </form>
                    </div>
                }
                {
                    this.state.isLoggedIn && 
                    <h5 className="text-white">You are logged in</h5>
                    }
            </div>

            



        )
    }


}

export default Login;
