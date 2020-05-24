import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './footer';
import Introduction from './Introduction';
import Calculation from './Calculation';
import Dashboard from './Dashboard';

class SubComponent extends Component{
  render(){
    return (
    <div className='layout'>
<BodySection/>
    </div>)
  }
}
class BodySection extends Component{
  constructor(){
    super();
    this.name="Avii";
    this.introduction="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  }
  render(){
    return (<div>
    <Header user={this.name}/>
    <hr/>
    <p><Introduction intro={this.introduction}/></p>
    <br/>
    <Calculation/>
<hr/>
<Footer/>
    </div>);
  }
}
class Main extends Component{
  render(){
    return(
      <div>
        <SubComponent/>
        <Dashboard/>
        <script>
          document.write("hello world")
        </script>
      </div>
   
    );
  }
}

ReactDOM.render(<Main/>,document.getElementById("root"));