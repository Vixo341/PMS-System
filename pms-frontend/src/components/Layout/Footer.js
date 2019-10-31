import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (

     <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-4">
     <div className="container">
         <a className="navbar-brand" href="Dashboard.html">
             PMS System
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
             <span className="navbar-toggler-icon" />
         </button>

         <div className="collapse navbar-collapse" id="mobile-nav">

             
         </div>
     </div>
 </nav>
        );
    }
}


export default Footer;