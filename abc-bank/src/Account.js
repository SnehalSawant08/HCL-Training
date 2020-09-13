import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as act from './actions/loginActions'
import {NavLink} from 'react-router-dom'
class Account extends Component {


    constructor(props) {
        super(props);
        this.viewUserAccounts = this.viewUserAccounts.bind(this);
        
    }

    viewUserAccounts = (event) => {
        event.preventDefault();
        this.props.getUserAccounts('1');

    }

    
    render() {
        return (
            <div>
                <p>hello {this.props.role} with id {this.props.userid}</p>
                <button onClick={this.viewUserAccounts}>View Accounts</button>
                <br/>
                <p></p>
                {this.props.accounts &&
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
                                <td>{account.accountnumber}</td>
                                <td>{account.accountname}</td>
                                <td>{account.balance}</td>
                                <td>{account.Last_transaction}</td>
                        
                        <td><NavLink to={`/ministat/${account.accountnumber}`} > Mini statement </NavLink></td>
                        <td><NavLink to={`/detailstat/${account.accountnumber}`}> Detail statement </NavLink></td>
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
    console.log("accounts:" + state)
    return {
        role: state.role,
        userid: state.userid,
        accounts: state.accounts
    };
}
const mapDispatchToProps = (dispatch) => ({
    getUserAccounts: (userid) => {
        dispatch(act.getUserAccounts(userid));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Account);