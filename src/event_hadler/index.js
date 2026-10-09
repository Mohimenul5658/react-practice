import React, { Component } from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       changedValue : ''
    }
  }

  handleClick = () =>{
    console.log("clicked");
  }

  handleChange = (e) =>{
    this.setState({changedValue: e.target.value},
     ()=>{
       console.log(this.state.changedValue);
     }
    )
    
  }

  render() {
    return (
      <div>
        <input type="text" placeholder='text' onChange={this.handleChange}/>
        <p>{this.state.changedValue}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
export default Index;
