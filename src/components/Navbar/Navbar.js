import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1]
console.log(queryInput)

class Navbar extends Component {
  // Setting the component's initial state
  state = {
    stock: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

 if(queryInput) {
    window.location.href = "/results/" + this.state.stock + "/#" +  queryInput
    }

    if (!this.state.stock) {
      alert("Please enter a stock you'd like to search for");
    } else {

      this.setState({
        stock: ""    
      });
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <strong>EarningStats</strong>
            </Link>
          </div>
          <form className="navbar-form navbar-left">
              <input
                className="form-control"
                value={this.state.stock}
                name="stock"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Search for a Stock"
              />
           
               <button 
                  className="btn btn-secondary my-2 my-sm-0" 
                  onClick={this.handleFormSubmit}><i className="fa fa-search" aria-hidden="true"></i></button>
          </form>
        </div>
      </nav>
    )
  }
}
export default Navbar;