import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as act from './actions/loginActions';
import {NavLink, Redirect} from 'react-router-dom'

class Search extends Component {

    constructor(props) {
        super();
        this.state = {
            searchtext: '',
            searchoption: '',
            displaysearch:false,
            goback:false
        }
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.searchData = this.searchData.bind(this);
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    searchData=(event)=>{
        event.preventDefault();
        console.log(this.state.searchoption)
        console.log(this.state.searchtext)
        this.props.getSearchResults(this.state.searchtext,this.state.searchoption)
        this.setState({
            displaysearch:true
        })
    }

    routeback=(event)=>{
        event.preventDefault();
        this.setState({goback:true})
    }

    render() {
        return (
            <div>
                <form className="text-white">
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Search :</label>
                        <div className="col-8">
                            <input className="form-control" type="textbox" name="searchtext" onChange={this.myChangeHandler} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Search option :</label>
                        <div className="col-8">
                            <select name="searchoption" id="searchoption" onChange={this.myChangeHandler}>
                                <option value=""></option>
                                <option value="primary_owner">Primary Owner Name</option>
                                <option value="acnum">Account Number</option>
                                <option value="acname">Account Name</option>
                            </select>
                        </div>
                    </div>
                    <input
                        type='submit' onClick={this.searchData}
                    />
                    <button className="m-3"  onClick={this.routeback}>Go Back</button>
                    {this.state.goback &&
                    <Redirect to="/adminuser"/>

                    }
                </form>
                <p></p>
                {this.state.displaysearch && this.props.searchresults &&
                <table className="text-white table-bordered">
                    <thead>
                        <tr>
                            <th>Account Primary Owner Name</th>
                            <th>Account Number</th>
                            <th>Type</th>
                            <th>Balance </th>
                            <th>Branch Name</th>
                            <th>Link to Mini statement</th>
                            <th>Link to Detail statement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.searchresults.map((search, id) => (
                            <tr key={id}>
                                <td>{search.ownername}</td>
                                <td>{search.id}</td>
                                <td>{search.accountname}</td>
                                <td>{search.balance}</td>
                                <td>{search.branch}</td>
                                <td><NavLink to={`/ministat/${search.accountnumber}`} > Mini statement </NavLink></td>
                        <td><NavLink to={`/detailstat/${search.accountnumber}`}> Detail statement </NavLink></td>
                            
                            </tr>
                        ))} 
                        </tbody>
                </table>
    }
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    
    return {

        searchresults: state.searchresults
    };
}

const mapDispatchToProps = (dispatch) => ({
    getSearchResults: (text,opt) => {
        console.log(text+' '+opt)
        dispatch(act.getSearchResults(text,opt));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Search);