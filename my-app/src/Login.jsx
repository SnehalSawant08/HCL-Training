import React, { Fragment } from 'react';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      displayData: false,
      date: "",
      gender: "",
      address:""
    }
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  displayUserInfo = (event) => {
    event.preventDefault();
    this.setState({
      displayData: !this.state.displayData
    });

  }
  render() {
    return (
      <div>
        <form className="text-white">
        <div className="form-group row">
        <label  className="col-2 col-form-label">Name :</label>
        <div className="col-10">
        <input className="form-control" type="textbox" name="name" onChange={this.myChangeHandler}/>
        </div>
        </div>

        <div className="form-group row">
            <label  className="col-2 col-form-label">Date :</label>
            <div className="col-10">
                <input className="form-control" type="date" name="date" onChange={this.myChangeHandler} />
            </div>
        </div>

        <div className="form-group row">
            <label  className="col-2 col-form-label">Gender :</label>
            <div className="col-10">
            <input type="radio" name="gender" value="female" checked={this.state.gender === "female"}
                  onChange={this.myChangeHandler} />
                <label className="p-2">Female</label><br />
                <input type="radio" name="gender" value="male" checked={this.state.gender === "male"}
                  onChange={this.myChangeHandler} />
                <label className="p-2">Male</label><br />
                <input type="radio" name="gender" value="other" checked={this.state.gender === "other"}
                  onChange={this.myChangeHandler} />
                <label className="p-2">Other</label><br />
            </div>
        </div>
             
        <div className="form-group row">
            <label  className="col-2 col-form-label">Address :</label>
            <div className="col-10">
            <textarea className="form-control mb-2" rows="4" name="address" cols="50" placeholder="Please enter your address"></textarea>
            </div>
        </div>
        
        {/* <div className="form-group row">
            <label  class="col-2 col-form-label">Tech stack :</label>
            <div className="col-10">
            <input type="checkbox" name="techstack" value="Html" checked={this.state.techstack === "Html"}
                  onChange={this.myChangeHandler}/>
            <label className="p-2">HTML</label>
            <input type="checkbox" name="techstack" value="React" checked={this.state.techstack === "React"}
                  onChange={this.myChangeHandler}/>
            <label className="p-2">React</label>
            <input type="checkbox" name="techstack" value="Java" checked={this.state.techstack === "Java"}
                  onChange={this.myChangeHandler}/>
            <label className="p-2">Java</label>
            </div>
        </div> */}





          <input
            type='submit' onClick={this.displayUserInfo}
          />
        </form>
        <br />
        {this.state.displayData &&
          <div>
            <table className="table text-center table-bordered text-white" >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Address</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.name}</td>
                  <td>{this.state.date}</td>
                  <td>{this.state.gender}</td>
                  <td>{this.state.address}</td>
              
                </tr>
              </tbody>
            </table>
          </div>
        }
      </div>


    );
  }

}

export default Login;