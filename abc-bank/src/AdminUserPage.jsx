import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import Modal from "react-modal";
import * as act from './actions/loginActions';
import { connect } from 'react-redux';

class AdminUserPage extends Component {

    constructor(props) {
        super()
        this.state = {
            displaycreateform: false,
            showpopup: false,
            customerid: '',
            customername: '',
            showids: false,
            selcustomername: '',
            balance: 0,
            accountname: '',
            branchname: '',
            displayaccnum: false,
            logout: false

        }
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }

    logoutapp = (event) => {
        event.preventDefault();
        this.props.logout();
        this.setState({ logout: true })
    }

    displayForm = (event) => {
        event.preventDefault();
        this.setState({
            displaycreateform: true
        })
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    showModal = (event) => {
        event.preventDefault();
        this.setState({
            showpopup: !this.state.showpopup
        })
    }

    searchCustomer = (event) => {
        event.preventDefault();
        this.props.getCustomerId(this.state.customername);
        this.setState({
            showids: !this.state.showids
        })
    }

    idselected = (i, n) => {
        this.setState({
            customerid: i,
            showpopup: !this.state.showpopup,
            selcustomername: n
        })
    }
    componentDidMount() {
        this.props.getBranches();
    }

    finalsubmit = (event) => {
        event.preventDefault();
        this.setState({
            displaycreateform: false,
            displayaccnum: true
        })
        const data = {
            "userid": this.state.customerid,
            "accountname": this.state.accountname,
            "balance": this.state.balance,
            "Last_transaction": "",
            "ownername": this.state.customername,
            "branch": this.state.branchname
        }
        this.props.postAccountData(data);
        setTimeout(() => {
            this.setState({
                displayaccnum: false
            })
        }, 3000);
    }


    render() {
        return (
            <div>
                <p className="text-white"> Admin User Page</p>
                <p>
                </p>
                <NavLink to='/search' > Search Accounts </NavLink>
                <p />
                <button onClick={this.displayForm}>Create an Account</button>
                <button className="m-3" onClick={this.logoutapp}>Logout</button>
                {this.state.logout === true &&
                    <Redirect to="/" />}
                <p />
                {this.state.displaycreateform &&
                    <div className='row'>
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8">
                            <form onSubmit={this.finalsubmit}>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label text-white">Customer Id</label>
                                    <div className="col-sm-6">
                                        <input type="customerid" className="form-control" name="customerid" readOnly value={this.state.customerid} placeholder="Customer Id" />
                                    </div>
                                    <div className="col-sm-3">
                                        <button onClick={this.showModal}>Search Customer</button>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label text-white">Customer Name</label>
                                    <div className="col-sm-6">
                                        <input type="selcustomername" className="form-control" name="selcustomername" readOnly value={this.state.selcustomername} placeholder="Customer Id" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label text-white">Branch Name</label>
                                    <div className="col-sm-6">
                                        <select className="form-control" name="branchname" id="branchname" onChange={this.myChangeHandler}>
                                            {this.props.branches.map((name, id) => (
                                                <option key={id} value={name.name}>{name.name}</option>
                                            ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label text-white">Balance</label>
                                    <div className="col-sm-6">
                                        <input type="number" className="form-control" name="balance" onChange={this.myChangeHandler} placeholder="Balance" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label text-white">Account Type</label>
                                    <div className="col-sm-6">
                                        <select className="form-control" name="accountname" id="accountname" onChange={this.myChangeHandler}>
                                            <option value=""></option>
                                            <option value="Savings Account">Savings Account</option>
                                            <option value="Checking Account">Checking Account</option>
                                            <option value="CD">CD</option>
                                        </select>
                                    </div>
                                </div>

                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                }
                {this.state.displayaccnum &&
                    <p className="text-white" > Your new Account number is {this.props.id}</p>
                }


                <Modal
                    isOpen={this.state.showpopup}
                    onRequestClose={this.showModal}
                    contentLabel="My dialog">
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Search </label>
                        <div className="col-sm-6">
                            <input type="customername" className="form-control" name="customername" onChange={this.myChangeHandler} placeholder="Enter Customer Name" />
                        </div>
                        <div className="col-sm-3">
                            <button onClick={this.searchCustomer}>Search Customer</button>
                        </div>
                    </div>
                    <p>
                    {this.props.message === "Network error" && 
                    <p className="text-white">Network issue. Try Later</p>
                    }
                    </p>

                    {this.state.showids &&
                        <div>
                            {this.props.customeriddata.map((iddata, id) => (
                                <div className="form-check" key={id}>
                                    <input className="form-check-input" type="radio" name="customerid" id={iddata.userid} value={iddata.userid} onClick={() => this.idselected(iddata.userid, iddata.ownername)} />
                                    <label className="form-check-label">
                                        Customer id: {iddata.userid} and Customer Name: {iddata.ownername}
                                    </label>
                                </div>

                            ))}
                        </div>}

                </Modal>

            </div>

        )
    }


}

const mapStateToProps = (state) => {
    return {
        customeriddata: state.customeriddata,
        branches: state.branches,
        id: state.id,
        logout: state.accounts,
        message:state.message
    };
}

const mapDispatchToProps = (dispatch) => ({
    getCustomerId: (custid) => {
        dispatch(act.getCustomerId(custid));
    },
    getBranches: () => { dispatch(act.getBranches()); },
    postAccountData: (data) => { dispatch(act.postAccountData(data)) },
    logout: () => { dispatch(act.logout()) }
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminUserPage);
