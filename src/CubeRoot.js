import React , {Component} from "react";
class CubeRoot extends Component{
    render(){
        const {cuberoot} = this.props;
        return (
            <div><button className="btn btn-default btn-info" onClick={cuberoot}>CubeRoot</button></div>
        )
    }
}
export default CubeRoot;