import React,{Component}from 'react';

class Increement extends Component{
    render(){
        const {increement}=this.props;
        return (<div>
            <button className="btn btn-defualt" onClick={increement}>Add Counter</button>
        </div>)
    }
}
export default Increement;