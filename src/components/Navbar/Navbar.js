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
            <FormControl componentClass="select">
              <option value="" selected>Select a Stock</option>
              <option value="AAPL">AAPL</option>
              <option value="AMGN">AMGN</option>
              <option value="AMZN">AMZN</option>
              <option value="BA">BA</option>
              <option value="BABA">BABA</option>
              <option value="BIDU">BIDU</option>
              <option value="CAT">CAT</option>
              <option value="CELG">CELG</option>
              <option value="CMG">CMG</option>
              <option value="COST">COST</option>
              <option value="DIS">DIS</option>
              <option value="FB">FB</option>
              <option value="FDX">FDX</option>
              <option value="GILD">GILD</option>
              <option value="GOOG">GOOG</option>
              <option value="GS">GS</option>
              <option value="HD">HD</option>
              <option value="IBM">IBM</option>
              <option value="LULU">LULU</option>
              <option value="MCD">MCD</option>
              <option value="NFLX">NFLX</option>
              <option value="NKE">NKE</option>
              <option value="NTES">NTES</option>
              <option value="NVDA">NVDA</option>
              <option value="PCLN">PCLN</option>
              <option value="PEP">PEP</option>
              <option value="STZ">STZ</option>
              <option value="TGT">TGT</option>
              <option value="TSLA">TSLA</option>
              <option value="UPS">UPS</option>
              <option value=""></option>
            </FormControl>
          </FormGroup>
        </Nav>
      </Navbar>
    )
  }
}
export default Navbar;