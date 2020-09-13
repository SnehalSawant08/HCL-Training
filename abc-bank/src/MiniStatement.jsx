
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as act from './actions/loginActions'


class MiniStatement extends Component {


    constructor(props) {
        super(props);
        this.acnum = props.match.params.acnum
    }
    componentDidMount(){
        this.props.getTransactionsMini(this.acnum);
    }
   

    render() {
        return (
            <div>
                <p className="text-white">Mini Statement Page </p>
                <p className="text-white">Account Number {this.acnum}</p>

                {this.props.transactions &&
                <table className="text-white table-bordered">
                    <thead>
                        <tr>
                            <th>Transaction date</th>
                            <th>Transaction remarks</th>
                            <th>Transaction type</th>
                            <th>Balance on date</th>
                            <th>Transaction amount</th>
                            <th>From_account number</th>
                            <th>To account number</th>
                            <th>Transaction time stamp</th>
                            <th>Transaction id</th>
                            <th>Transaction status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactions.map((transaction, id) => (
                            <tr key={id}>
                                <td>{transaction.Transaction_date}</td>
                                <td>{transaction.Transaction_remarks}</td>
                                <td>{transaction.Transaction_type}</td>
                                <td>{transaction.Balance_on_date}</td>
                                <td>{transaction.Transaction_amount}</td>
                                <td>{transaction.From_account_number}</td>
                                <td>{transaction.To_account_number}</td>
                                <td>{transaction.Transaction_time_stamp}</td>
                                <td>{transaction.Transaction_id}</td>
                                <td>{transaction.Transaction_status}</td>

                        
                        
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
        
        transactions: state.transactions
    };
}

const mapDispatchToProps = (dispatch) => ({
    getTransactionsMini: (acnum) => {
        dispatch(act.getTransactionsMini(acnum));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(MiniStatement);