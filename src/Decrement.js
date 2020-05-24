import React,{Component} from 'react';
class Decreement extends Component{

render(){
    const {decreement} =this.props;
    return(<div>
        <button className="btn btn-default btn-danger" onClick={decreement}>Substract Counter</button>
    </div>)
}
}
export default Decreement;