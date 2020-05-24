import React, {Component} from 'react';
class Square extends Component{
    render(){
        const {square}=this.props;
        return(<div>
            <button className="btn btn-default btn-primary btn-lg" onClick={square}>Square</button>
        </div>);
    }
}
export default Square;