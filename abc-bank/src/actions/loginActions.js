import axios from 'axios'

export const logout=()=>{
  return{
    type:'LOGOUT'
  }
}

export const getUserDetailsSuccess = (userData) => {
  return {
    type: 'LOGIN_SUCCESS',
    userData
  }
};

export const getUserDetailsFailure = (userData) => {
  return {
    type: 'LOGIN_FAILURE',
    userData
  }
};

export const getUserDetails = (name, pass) => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/users/', {
      params: {
        username: name
      }
    })
      .then(response => {
        if (response.data[0].password === pass) {
          dispatch(getUserDetailsSuccess(response.data[0]));
        }
        else {
          dispatch(getUserDetailsFailure('false'))
        }
      })
  };
}

export const getUserAccountsSuccess = (accountsData) => {
  return {
    type: 'GET_USER_ACCOUNTS_SUCCESS',
    accountsData
  }
};

export const getUserAccounts = (id) => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/accounts/', {
      params: {
        userid: id
      }
    })
      .then(response => {
        dispatch(getUserAccountsSuccess(response.data));


      })
  };
}

export const getTransactionsMiniSuccess = (accountsData) => {
  return {
    type: 'GET_TRANSACTIONS_MINI_SUCCESS',
    accountsData
  }
};

export const getTransactionsMini = (acnum) => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/transactions/?accountnumber=?&_sort=Transaction_id&_order=desc&_limit=10', {
      params: {
        accountnumber: acnum
      }
    })
      .then(response => {
        dispatch(getTransactionsMiniSuccess(response.data));
      })
  };
}


export const getTransactionsByAmountSuccess = (accountsData) => {
  return {
    type: 'GET_TRANSACTIONS_BY_AMOUNT_SUCCESS',
    accountsData
  }
};

export const getTransactionsByAmount = (acnum, option, amount) => {
  if (option === "greater") {
    return (dispatch) => {
      return axios.get('http://localhost:3000/transactions/?accountnumber=?&Transaction_amount_gte=?', {
        params: {
          accountnumber: acnum,
          Transaction_amount_gte: amount
        }
      })
        .then(response => {
          dispatch(getTransactionsByAmountSuccess(response.data));

        })
    };

  } else {
    return (dispatch) => {
      return axios.get('http://localhost:3000/transactions/?accountnumber=?&Transaction_amount_lte=?', {
        params: {
          accountnumber: acnum,
          Transaction_amount_lte: amount
        }
      })
        .then(response => {
          dispatch(getTransactionsByAmountSuccess(response.data));


        })
    };
  }




}

export const getSearchResultsSuccess = (accountsData) => {
  return {
    type: 'GET_SEARCH_RESULTS',
    accountsData
  }
};

export const getSearchResults = (searchtext, searchoption) => {
  return (dispatch) => {
    switch (searchoption) {
      case 'primary_owner': {
        return axios.get('http://localhost:3000/accounts/', {
          params: { ownername_like: searchtext }
        }).then(response => {
          dispatch(getSearchResultsSuccess(response.data));
        })
      }
      case 'acnum': {
        return axios.get('http://localhost:3000/accounts/', {
          params: { id: searchtext }
        }).then(response => {
          dispatch(getSearchResultsSuccess(response.data));
        })
      }
      case 'acname': {
        return axios.get('http://localhost:3000/accounts/', {
          params: { accountname_like: searchtext }
        }).then(response => {
          dispatch(getSearchResultsSuccess(response.data));
        })
      }
      default: return 'no data';

    }

  };//end of return 
}

export const getCustomerId = (custname) => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/users', {
      params: {
        ownername_like: custname
      }
    })
      .then(response => {
        dispatch(getCustomerIdSuccess(response.data));
      })
  };
}

export const getCustomerIdSuccess = (accountsData) => {
  return {
    type: 'GET_CUSTOMER_ID_SUCCESS',
    accountsData
  }
};

export const getBranches = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/branches')
      .then(response => {
        dispatch(getBranchesSuccess(response.data));
      })
  };
}

export const getBranchesSuccess = (accountsData) => {
  return {
    type: 'GET_BRANCHES_SUCCESS',
    accountsData
  }
};

export const postAccountData = (data) => {
  return (dispatch) => {
    return axios.post('http://localhost:3000/accounts',
      data
    )
      .then(response => {
        dispatch(postAccountDataSuccess(response.data.id));
      })
  };
}

export const postAccountDataSuccess = (id) => {
  return {
    type: 'POST_ACCOUNT_SUCCESS',
    id
  }
};