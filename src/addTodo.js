import React, {Component} from 'react';
class AddTodo extends Component{
    state={
        task:""
    }
    changeState=(event)=>{
debugger;
this.setState({
   task:event.target.value ,
   
})
    }
    addTask=(event)=>{
        debugger;
        event.preventDefault();
        this.props.addTodoProps(this.state.task);
        this.setState({
            task:""
         })
 
    }
    render(){
        const {task}=this.state;
        debugger;
        return(
            <div>
                <form onSubmit={this.addTask}>
                    <input type="text" className="form-control" onChange={this.changeState} value={task}/>
                    <button className="btn btn-default btn-primary" type="submit">Add Todo</button>
                </form>
            </div>
            
        )
    }
}
export default AddTodo;