import axios from 'axios'



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
export const getUserDetails=(name,pass)=>{
    // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return axios.get('http://localhost:3000/users/',{
        params: {
          username: name
        }
      })
      .then(response => {
        //console.log(response.data[0].username)
        console.log(pass);
        if(response.data[0].password === pass)
        {
          dispatch(getUserDetailsSuccess(response.data[0]));
          
        }
        else{
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

export const getUserAccounts=(id)=>{
  // Returns a dispatcher function
// that dispatches an action at a later time
return (dispatch) => {
  // Returns a promise
  return axios.get('http://localhost:3000/accounts/',{
      params: {
        userid: id
      }
    })
    .then(response => {
      console.log(response.data);
      
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

export const getTransactionsMini=(acnum)=>{
  // Returns a dispatcher function
// that dispatches an action at a later time
return (dispatch) => {
  // Returns a promise
  return axios.get('http://localhost:3000/transactions/?accountnumber=?&_sort=Transaction_id&_order=desc&_limit=1',{
      params: {
        accountnumber: acnum
      }
    })
    .then(response => {
      console.log(response.data);
      
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

export const getTransactionsByAmount=(acnum,option,amount)=>{
  // Returns a dispatcher function
// that dispatches an action at a later time

if(option === "greater"){
  console.log(option);
  return (dispatch) => {
    // Returns a promise
    
    return axios.get('http://localhost:3000/transactions/?accountnumber=?&Transaction_amount_gte=?',{
        params: {
          accountnumber: acnum,
          Transaction_amount_gte:amount
        }
      })
      .then(response => {
        console.log(response.data);
            dispatch(getTransactionsByAmountSuccess(response.data));
 
      })  
  };

} else {
  console.log(option);
  return (dispatch) => {
    // Returns a promise
    
    return axios.get('http://localhost:3000/transactions/?accountnumber=?&Transaction_amount_lte=?',{
        params: {
          accountnumber: acnum,
          Transaction_amount_lte:amount
        }
      })
      .then(response => {
        console.log(response.data);
        
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

export const getSearchResults=(searchtext,searchoption)=>{
  // Returns a dispatcher function
// that dispatches an action at a later time
console.log(searchtext + '' +searchoption)
return (dispatch) => {
  // Returns a promise
  
  switch(searchoption){
    case 'primary_owner': {
      return axios.get('http://localhost:3000/accounts/',{params: {ownername_like: searchtext }
    }).then(response => {
      console.log(response.data);
          dispatch(getSearchResultsSuccess(response.data)); 
    })
  }
  case 'acnum':{
    return axios.get('http://localhost:3000/accounts/',{params: {accountnumber: searchtext }
  }).then(response => {
    console.log(response.data);
        dispatch(getSearchResultsSuccess(response.data)); 
  })
}
case 'acname':{
  return axios.get('http://localhost:3000/accounts/',{params: {accountname_like: searchtext }
}).then(response => {
  console.log(response.data);
      dispatch(getSearchResultsSuccess(response.data)); 
})
}
   default: return 'no data';
    
  }

};//end of return 
}