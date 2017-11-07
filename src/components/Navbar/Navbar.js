import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const placeHolderInput= window.location.href.split("#");
const queryInput = placeHolderInput[1]
console.log(queryInput)

class Navbar extends Component {
  // Setting the component's initial state
  state = {
    skills: ""
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

	};

  render() {
    return (
    	<Navbar>
    		<Navbar.Header>
      			<Navbar.Brand>
        			<a href="/">EarningStats</a>
      			</Navbar.Brand>
    		</Navbar.Header>
    	<Nav>
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    </Nav>
  </Navbar>