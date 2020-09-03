import React, { Fragment } from 'react';
import sampleHOCFunction from './sampleHOC';
import DisplayRecords from './DisplayRecords';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            sampleusername: "",
            password: "",
            samplepassword: "",
            isLoggedIn: false,
            error: false

        }
        this.checkUserInfo = this.checkUserInfo.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }


    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    checkUserInfo = (event) => {
        event.preventDefault();
        const matched = this.state.sampleusername === this.state.username && this.state.samplepassword === this.state.password;

        if (matched) {
            this.setState({ isLoggedIn: "true" })
        }
        else {
            //throw new Error("wrong password");
            this.setState({ error: true });
        }
    }

    componentDidMount() {
        this.setState({
            sampleusername: "snehal",
            samplepassword: "snehal"
        })
    }

    shouldComponentUpdate() {
        return true;
    }

    


    render() {
        if (this.state.error === true) {
            throw new Error("wrong password")
        }//why needed to put here?
    const displayMessage = ({ name,loginstate }) => <h5 className="text-white">Hello {name}.You are {loginstate}</h5>;
    const NewComponent = sampleHOCFunction(displayMessage);
        return (

            <div>
                {!this.state.isLoggedIn &&

                    <div>
                        <form className="text-white mt-4">
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
                            <div className="text-center p-2">
                            <input
                                type='submit' className="btn btn-light" onClick={this.checkUserInfo}
                            />
                            </div>
                        </form>
                    </div>
                }
                {
                    this.state.isLoggedIn &&
                    <div>
                    <DisplayRecords/>
                    
                    <NewComponent name={this.state.username} loginstate="logged in"/></div>
                    
                }
            </div>
        )
    }


}

export default Login;
