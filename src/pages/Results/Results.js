import React, { Component } from "react";
// import API from "../../utils/API";

class Results extends Component {
  state = {
    skills: []
  };

  componentDidMount() {
    this.loadResults();
  }

  componentDidUpdate() {
    this.loadResults();
  }

  // loadResults = () => {
  //   API.getUserSkill(this.props.match.params.skill)
  //   .then(res => this.setState({ skills: res.data }))
  //   .catch(err => console.log(err));
  // };

    render() {
      	return (
        	<div>
        		<p>Results Page</p>

        	</div>
        );
  	}
}
          
export default Results;