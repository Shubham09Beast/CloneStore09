import React, { Component } from "react";

class Visitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //message: "Welcome Visitor", 
      count: 0
    };
  }

  increment(){
    //this.state.count = this.state.count + 1
    this.setState({
        count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        {/* <h2>{this.state.message}</h2> */}
        <div>
        Count - {this.state.count}
        
        <button onClick={ () => this.increment()}>Click Me</button>
        </div>
       
      </div>
    );
  }
}

export default Visitor;
