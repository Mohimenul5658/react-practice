import React, { Component } from 'react';
import HomePage from './homePage';
import LoginPage from './login';

class Conditional_Rendering extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : false
    }
  }

  render() {
    
    if(this.state.isLoggedIn){
        return <HomePage />
    }
    else{
        return <LoginPage />
    }
  }
}
export default Conditional_Rendering;