import React from 'react';


function sampleHOC(WrappedComponent) {
    // And return a new anonymous component
    return class extends React.Component{
      render() {
        return <WrappedComponent {...this.props}/>;
      }
    }
  }
  export default sampleHOC;