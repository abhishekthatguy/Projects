import React, {Component} from 'react';
class Divide extends Component{
    render(){
        const {divide} = this.props;
        return (
            <div>
                <button className="btn btn-default btn-primary" onClick={divide}>Divide</button>
            </div>
        )
    }
}
export default Divide;