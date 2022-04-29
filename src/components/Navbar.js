import React, { Component } from 'react';
import logo from "../logo.svg";




function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <div className="container-fluid">
          <img className='image me-2' src={logo} alt="" width="5" height="5" />
          
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Services </a>
      <a class="nav-item nav-link" href="#">Become a todoo</a>
    </div>
  </div>      
         
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            
          <form className="form-inline my-2 my-lg-0">
   
              <button className="btn-outline-success"> <b>Log in</b></button>  
              <select className="custom-select ">
  <option value="Fr">Fr</option>
  <option value="En">En</option>
  
</select>
                     
  </form>
          </div> 
        </div>  
      </nav>
      
      
      );
}

export default NavBar;