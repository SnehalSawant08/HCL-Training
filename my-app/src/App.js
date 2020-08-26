import React, { Fragment } from 'react';

import Login from './Login';
import './App.css';
import ErrorBoundary from './ErrorBoundary'
import Footer from './Footer';

function App(props) {
  
  
  return (
    
    <Fragment>
      <div className="container-fluid h-100">
        <h1 className="text-center p-1" id="header">--- Welcome Techies ---</h1>
    
        <div className="row h-100">
      <div className="col-md-2 yellowcolor"  >
        <h4 className="text-center yellowcolor cursivefont" ><i>Famous Quotes</i></h4>
        <br/>
        <p className="text-center">"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela</p>
        <br/>
        <p className="text-center">"The way to get started is to quit talking and begin doing." -Walt Disney</p>
        <br/>
        <p className="text-center">"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." -Steve Jobs</p>
      </div>
      <div className="col-md-7 ">
        <ErrorBoundary>
            <Login />
            </ErrorBoundary>
      </div>

      <div className="col-md-3" id="div3" >
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <h4 className="text-center cursivefont"  ><i>CSS Syntax</i></h4>
              <br/>
                <ul>
                <li >The selector points to the HTML element you want to style.</li><br/>
                <li>The declaration block contains one or more declarations separated by semicolons.</li><br/>
                <li> Each declaration includes a CSS property name and a value, separated by a colon.</li><br/>
                <li> Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</li><br/>
                </ul>
            </div>
            <div className="carousel-item">
              <h4 className="text-center cursivefont" ><i>CSS Selectors</i></h4>
              <br/>
                <ul>
                  <li>Simple selectors (select elements based on name, id, class)</li><br/>
                  <li>Combinator selectors (select elements based on a specific relationship between them)</li><br/>
                  <li>Pseudo-class selectors (select elements based on a certain state)</li><br/>
                  <li>Pseudo-elements selectors (select and style a part of an element)</li><br/>
                  <li>Attribute selectors (select elements based on an attribute or attribute value)</li><br/>
                </ul>
            </div>
            
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
      </div>
    
    <Footer/>
    </div>
    </Fragment>
  );
}

export default App;
