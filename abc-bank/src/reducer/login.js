import {LOGIN_SUCCESS,LOGIN_FAILURE,GET_USER_ACCOUNTS_SUCCESS,GET_TRANSACTIONS_MINI_SUCCESS,GET_TRANSACTIONS_BY_AMOUNT_SUCCESS,GET_SEARCH_RESULTS} from '../actions/types'

 const initialState = {
    role: '',
    id:0,
    accounts:[],
    transactions:[],
    transbyamount:[],
    searchresults:[]
  };
 
/* function reducer(state=initialState, action) {
    return {
      auth: state
    };
  } */

  export default (state=initialState, action = {}) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
          { console.log(action.userData)
            return action.userData;
          }
          case LOGIN_FAILURE:
            { console.log(action.userData)
              return action.userData;
            }
            case GET_USER_ACCOUNTS_SUCCESS:
            {
              console.log(action.accountsData)
              return {
                ...state,
                accounts:action.accountsData
              }
            }
            case GET_TRANSACTIONS_MINI_SUCCESS:
              {
                console.log(action.accountsData)
                return {
                  ...state,
                  transactions:action.accountsData
                }
              }
              case GET_TRANSACTIONS_BY_AMOUNT_SUCCESS:
              {
                console.log(action.accountsData)
                return {
                  ...state,
                  transbyamount:action.accountsData
                }
              }
              case GET_SEARCH_RESULTS:
              {
                console.log(action.accountsData)
                return {
                  ...state,
                  searchresults:action.accountsData
                }
              }
            
        default:
          return state;
      }
  }