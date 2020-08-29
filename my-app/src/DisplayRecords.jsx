import React from 'react';
import ApiContext from './ApiContext';

class DisplayRecords extends React.Component{
    render(){
        return(
            <ApiContext.Consumer>
                {mssg => (
            <h1> {mssg} </h1>
        )}
            </ApiContext.Consumer>
        )
    }
     



}

export default DisplayRecords;