import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import menage from '../prepose-menage.svg';
import "../styles/style.css";





class RegistrationForm extends Form {
  
  state = {
    data: { Name: "", Surname: "", Address: "", Phone: "", Email: "" },
    years: [],
    months: ["January", "February", "March", "April", "May", "June", "July", "August"," September", "October", "November", "December" ],
    days:[],
    
    errors: {}
  };

  schema = {
    Name: Joi.string()
      .required()
      .label("Name"),
    Surname: Joi.string()
      .required()
      .label("Surname"),
    Address: Joi.string()
      .required()
      .label("Type an address and choose one"),
    Phone: Joi.string()
      .max(10)
      .min(10)
      .required()
      .label("Cell phone number"),
    Email: Joi.string()
      .email()
      .required()
      .label("Email"),
    BDate: Joi.date()
      .required()
      .max('now')
      .less('01-01-2000')
      .label("Date of birth"),
  };
  years() {
    var startYear = 1940;
    var currentYear = new Date().getFullYear(), years = []; 
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }
  
    return years;
  }
  daysInmonth(year, month) {
    return new Date(year, month, 0).getDate();  
  }
  getnumbDays(numDays = 31) {
    
    var days=[];
    for (var i = 1; i < numDays; i++)
      days.push (i); 
    return days
  }
  componentDidMount(){
    const year = this.years();
    
    this.setState ({ years :year  });
    
  }
  render() {
    
    const year = this.years();
    const day = this.getnumbDays();
    
    return (
     
      
      <div className="col-md-12">
      <div className="card card-container">
          <h3 className="mb-3" >Join the todoo team</h3>
          <p>To join the Tigidoo please fill out this form. we will review your <br></br>
            application and get backto you within 48 hours</p>
         
          
          <form className="container">
           
              <div className="row " >
              <div class="col-lg col-md col-sm-6">
               
               
                <div className="row ">    
                <div class="col-lg-6 col-md-6 col-sm">    
                    {this.renderInput("Name", "Name", "form-group col ", "form-control col-sm-10 shadow  bg-body rounded")}  
                  </div> 
                  <div class="col-lg-6 col-md-6 col-sm"> 
                {this.renderInput("Surname", "Surname", "form-group col", "form-control col-sm-10 shadow  bg-body rounded")}
              </div>
              </div>
                <div className="row">   
                <div class="col-lg-6 col-md-6 col-sm"> 
                {this.renderInput("Address", "Address", "form-group col", "form-control col-sm-10 shadow  bg-body rounded border border-success ")}
                </div>
                    <div class="col-lg-6 col-md-6 col-sm"> 
                    {this.renderInput("City", "City", "form-group col", "form-control col-sm-10 shadow  bg-body rounded adr ")}
                </div>
                  </div>
                <div className="row"> 
                <div class="col-lg-4 col-md-4 col-sm">   
                    {this.renderInput("Province", "", "form-group col", "form-control col-sm-10 shadow  bg-body rounded ")}
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm"> 
                    {this.renderInput("Country", "", "form-group col", "form-control col-sm-10 shadow  bg-body rounded ")}
                    </div>
                      <div class="col-lg-4 col-md-4 col-sm"> 
                    {this.renderInput("Post Code", "", "form-group col", "form-control col-sm-10 shadow  bg-body rounded ")}
                    </div>
                </div>
                
            {this.renderInput("Phone", "Cell phone number","form-group","form-control shadow  bg-body rounded", "tel")}
            {this.renderInput("Email", "Email address","form-group","form-control shadow  bg-body rounded", "email")}
           
         
          
              </div>
              
              <div className="col-lg col-md col-sm-6 c2">
                <div className="big">
                <div className="under">
                <div className="row BD">
                <label>Date of Birth</label>
                {this.renderSelect("year", "", "form-group col", "form-select form-select-sm shadow  bg-body rounded", year)}
                  {this.renderSelect("year", "", "form-group col", "form-select form-select-sm shadow  bg-body rounded", this.state.months)}
                  {this.renderSelect("year", "", "form-group col", "form-select form-select-sm shadow  bg-body rounded",day )}
                </div>

                <label>What languages do you speaks?</label> 
              <div className="input">
              {this.renderInput("French", "French", "form-check form-check-inline F1", "form-check-input mt-4 ", "form-check-label l ", "checkbox")}
              {this.renderInput("English", "english","form-check form-check-inline","form-check-input  mt-4","form-check-label l", "checkbox")}
                  </div>
                  </div>
                <div className="A">
                <label>Are you over 18 years old and legally authorized to work in canada?</label>
                <div className="input">
              {this.renderInput("language", "Yes", "form-check form-check-inline", "form-check-input mt-4", "form-check-label l", "radio")}
              {this.renderInput("language", "No","form-check form-check-inline","form-check-input mt-4","form-check-label l", "radio")}
                </div>
                
               
                    <label>Do you have a crimenal history?</label>
                    <p>(A background check will be performed.)</p>
                <div className="input criminal">
              {this.renderInput("criminal", "Yes", "form-check form-check-inline", "form-check-input mt-4", "form-check-label l", "radio")}
                  {this.renderInput("criminal", "No", "form-check form-check-inline", "form-check-input mt-4", "form-check-label l", "radio")}
                   
                  </div>
                  <div className="child d-grid gap-2 md-flex sm-flex justify-content-md-end">
                    <div className="image">
                      <img className="image" src={menage} alt="menage" align="right" id="hp" /> 
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-primary"> Next </button>
                      </div>
                    </div>
                </div>
                
                </div>
                </div>
                </div>
          </form>    
              
        </div>
    </div>
    
     
    );
  }
}

export default RegistrationForm;
