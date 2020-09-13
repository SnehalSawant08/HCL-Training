
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as act from './actions/loginActions';
import ReactExport from "react-data-export";


class DetailStatement extends Component {


    constructor(props) {
        super(props);
        this.acnum = props.match.params.acnum;
        this.state = {
            basedOnAmount: false,
            condition: '',
            amount: 0
        }
        this.myChangeHandler = this.myChangeHandler.bind(this);
    }
    componentDidMount() {

    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

        if (nam === 'amount') {
            this.setState({ amount: val })
        }
        
        switch (val) {
            case 'lesser': return this.setState({ condition: val })
            case 'greater': return this.setState({ condition: val })
            case 'Amount': return this.setState({ basedOnAmount: true })
            default: return 'default'
        }

    }

    getfile = (event) => {
        event.preventDefault();
        this.props.getTransactionsByAmount(this.acnum, this.state.condition, this.state.amount)
    }

    render() {
        const ExcelFile = ReactExport.ExcelFile;
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
        const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
        return (
            <div>
                <p className="text-white">Detail Statement Page </p>
                <p className="text-white">Account Number {this.acnum}</p>
                <select name="options" id="options" onChange={this.myChangeHandler}>
                    <option value=""></option>
                    <option value="Amount">Based on Amount</option>

                </select>
                {this.state.basedOnAmount &&
                    <div>
                        <p className="text-white">Enter Amount to get report based on that.</p>
                        <input type="amount" width="25%" className="form-control" name="amount" onChange={this.myChangeHandler} />
                        <p></p>
                        <select name="optionsamount" id="optionsamount" onChange={this.myChangeHandler}>
                            <option value=""></option>
                            <option value="greater">Greater than equal</option>
                            <option value="lesser">Less than equal</option>

                        </select>
                        <p></p>
                        <button onClick={this.getfile}>Get File</button>
                        <p>
                        </p>
                        <ExcelFile>
                            <ExcelSheet data={this.props.transbyamount} name="Transaction">
                            
                               
                                
                                <ExcelColumn label="accountnumber" value="accountnumber" />
                                <ExcelColumn label="Transaction_date" value="Transaction_date" />
                                <ExcelColumn label="Transaction_remarks" value="Transaction_remarks" />
                                <ExcelColumn label="Transaction_type" value="Transaction_type" />
                                <ExcelColumn label="Balance_on_date" value="Balance_on_date" />
                                <ExcelColumn label="Transaction_amount" value="Transaction_amount" />
                                <ExcelColumn label="From_account_number" value="From_account_number" />
                                <ExcelColumn label="To_account_number" value="To_account_number" />
                                <ExcelColumn label="Transaction_time_stamp" value="Transaction_time_stamp" />
                                <ExcelColumn label="Transaction_id" value="Transaction_id" />
                                <ExcelColumn label="Transaction_status" value="Transaction_status" />
                            </ExcelSheet>
                            
                        </ExcelFile>


                    </div>
                }
            </div>
        )
    }


}
const mapStateToProps = (state) => {
    console.log("accounts:" + state)
    return {

        transbyamount: state.transbyamount
    };
}

const mapDispatchToProps = (dispatch) => ({
    getTransactionsByAmount: (acnum, cond, amount) => {
        dispatch(act.getTransactionsByAmount(acnum, cond, amount));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(DetailStatement);