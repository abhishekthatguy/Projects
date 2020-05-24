import React, {Component} from 'react';
import Increement from './Increement';
import Decreement from './Decrement';
import Square from './Square';
import Divide from './Divide';
import CubeRoot from './CubeRoot';
import ToDoList from './TodoList';
class Calculation extends Component{
   constructor(){
       super();
       this.state={
           count:0
       }
       this.increement=this.increement.bind(this);
       this.decreement=this.decreement.bind(this);
       this.square=this.square.bind(this);
       this.divide=this.divide.bind(this);
       this.cuberoot=this.cuberoot.bind(this);
   }
   increement(){
    let {count}=this.state;
    this.setState({
        count:++count
    })
}
decreement(){
    let {count}=this.state;
    this.setState({
        count:--count
    })
}
square(){
    let {count}=this.state;
    this.setState({
        count:count*count
    })
}
divide(){
    let {count}=this.state;
    this.setState({
        count:count/count
    })
}
cuberoot(){
    let {count}=this.state;
    this.setState({
        count:count*count*count
    })
}
    render(){
        const {count} = this.state;
      return(<div>
        <p>{count}</p>
        <div>
    <Increement increement={this.increement}/>
    <Decreement decreement={this.decreement}/>
    <Square square={this.square}/>
    <Divide divide={this.divide}/>
    <CubeRoot cuberoot={this.cuberoot}/>
    <ToDoList/>
      </div></div>);
    }
  }
  export default Calculation;