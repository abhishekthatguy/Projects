import React ,{Component} from 'react';
import DateComponent from './DateComponent';
class Header extends Component{
    render(){
      return(
        <div><h1>Hello Mr. <span className='userName'>{this.props.user}</span></h1>
        <div><DateComponent/></div>
        </div>
      )
    }
  }
  export default Header;