import {LOGOUT,POST_ACCOUNT_SUCCESS,GET_BRANCHES_SUCCESS,GET_CUSTOMER_ID_SUCCESS,LOGIN_SUCCESS,LOGIN_FAILURE,GET_USER_ACCOUNTS_SUCCESS,GET_TRANSACTIONS_MINI_SUCCESS,GET_TRANSACTIONS_BY_AMOUNT_SUCCESS,GET_SEARCH_RESULTS} from '../actions/types'

 const initialState = {
    role: '',
    id:0,
    accounts:[],
    transactions:[],
    transbyamount:[],
    searchresults:[],
    customeriddata:[],
    branches:[],
    userData:[]
  };
 
/* function reducer(state=initialState, action) {
    return {
      auth: state
    };
  } */

  export default (state=initialState, action = {}) => {
    switch(action.type) {
      case LOGOUT:
        return {accounts:undefined}

      case LOGIN_SUCCESS: 
        return  {userData:action.userData}
          
      case LOGIN_FAILURE:
      { 
        return {userData:action.userData}
      }

      case GET_USER_ACCOUNTS_SUCCESS:
      {
        return {
                ...state,
                accounts:action.accountsData
              }
      }
      
      case GET_TRANSACTIONS_MINI_SUCCESS:
      {
                
        return {
                  ...state,
                  transactions:action.accountsData
                }
      }

      case GET_TRANSACTIONS_BY_AMOUNT_SUCCESS:
      {
        return {...state,transbyamount:action.accountsData}
      }
              
      case GET_SEARCH_RESULTS:
      {      
        return {...state,searchresults:action.accountsData}
      }
      
      case GET_CUSTOMER_ID_SUCCESS:{
      return {
                  ...state,
                  customeriddata:action.accountsData
                }
              }
      
      case GET_BRANCHES_SUCCESS:
      {
        return {
                  ...state,
                  branches:action.accountsData
                }
                }
              
      case POST_ACCOUNT_SUCCESS:
      {
          return {
                    ...state,
                    id:action.id
                  }
      }
            
        default:
          return state;
      }
  }