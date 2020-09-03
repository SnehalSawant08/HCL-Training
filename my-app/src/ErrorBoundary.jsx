import React, { Fragment } from 'react';


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }
  
    render() {
      if (this.state.errorInfo){
        return <h5 className="text-white">You entered wrong password</h5>;
      }
  
      return this.props.children; 
     // return null;
    }
  }
  export default ErrorBoundary;