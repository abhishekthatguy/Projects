import React, {Component} from 'react';

class ItemTodo extends Component{
    state={
        isEditing:false,
    }
    toggleEditHandler=()=>{
        this.setState({
            isEditing:!this.state.isEditing,
        })
    }
    clickHandler=()=>{
        // alert(this.props.index);
        this.props.toggleTask(this.props.index);
    }
    deleteHandler=()=>{
        this.props.deleteTodo(this.props.index);
    }
    // update task 
    updateTaskHandler=(event)=>{
    event.preventDefault();
    this.props.editTask(this.props.index,this.newTask.value);
    this.toggleEditHandler();

    }
    render(){
        const {todo}=this.props;
        const {isEditing}=this.state;
if(isEditing){
return(
    <li>
        <form onSubmit={this.updateTaskHandler}>
            <input type="text" defaultValue={todo.task} ref={x=>{
                this.newTask=x;
            }}
            />
            <button type="submit">Save</button>
            <button onClick={this.toggleEditHandler}>Cancel</button>
        </form>
    </li>
);
}

        return(<li className={todo.completed?"completed" :"" }><span onClick={this.clickHandler} >{todo.task}</span>
        <span><button onClick={this.deleteHandler}>Delete</button></span>
        &nbsp;
        <span><button onClick={this.toggleEditHandler}>Edit</button></span>
        </li>)
    }
}
export default ItemTodo;