import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {
  state = {
    stocks: []
  };

  componentDidMount() {
    this.loadResults();
  }

  componentDidUpdate() {
    this.loadResults();
  }

  loadResults = () => {
    API.getStock(this.props.match.params.stock)
    .then(res => this.setState({ stocks: res.data }))
    .catch(err => console.log(err));
  };

    render() {
      	return (
        	<div>
        		<p>Results Page</p>

        	</div>
        );
  	}
}
          
export default Results;