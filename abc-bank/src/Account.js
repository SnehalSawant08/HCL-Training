import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as act from './actions/loginActions'
import {NavLink, Redirect} from 'react-router-dom'
class Account extends Component {


    constructor(props) {
        super();
        this.viewUserAccounts = this.viewUserAccounts.bind(this);
        this.userid = props.match.params.userid;
        this.state={
            logout:false
        }
       
    }

    
    viewUserAccounts = (event) => {
        
        
        this.props.getUserAccounts(this.userid);
    }

    logoutapp=(event)=>{
        event.preventDefault();
        this.props.logout();
        this.setState({logout:true})
    }

    
    render() {
        return (
            <div>
                <p className="text-white">Hello  !!!</p>
                <button onClick={this.viewUserAccounts}>View Accounts</button>
                <button className="m-3" onClick={this.logoutapp}>Logout</button>
                {this.state.logout === true&&
                <Redirect to="/"/>

                }
                <br/>
                <p></p>
                {this.props.accounts !== undefined &&
                <table className="text-white table-bordered">
                    <thead>
                        <tr>
                            <th>Account Number</th>
                            <th>Account Type</th>
                            <th>Account Balance</th>
                            <th>Last Transaction</th>
                            <th>Link to Mini statement</th>
                            <th>Link to Detail statement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.accounts.map((account, id) => (
                            <tr key={id}>
                                <td>{account.id}</td>
                                <td>{account.accountname}</td>
                                <td>{account.balance}</td>
                                <td>{account.Last_transaction}</td>
                        
                        <td><NavLink to={`/ministat/${account.id}`} > Mini statement </NavLink></td>
                        <td><NavLink to={`/detailstat/${account.id}`}> Detail statement </NavLink></td>
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
        accounts: state.accounts,
        logout:state.accounts
    };
}
const mapDispatchToProps = (dispatch) => ({
    getUserAccounts: (userid) => {
        dispatch(act.getUserAccounts(userid));
    },
    logout:() =>{dispatch(act.logout())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Account);