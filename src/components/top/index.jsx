import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import { render } from 'less'

class Top extends Component{
  constructor(props){
    super(props)
    
  }

  returnHome = () =>{
    this.props.history.push('/')
  }

  render(){
    return (
     <div onClick={this.returnHome}>示例</div>
    )
  }
}
export default Top