import React,{Component} from 'react';
import AddTodo from './addTodo';
import ItemTodo from './itemTodo';
import axios from 'axios';
import './todo.css'
class ToDoList extends Component{

        state={
            Todo:[
                
        ]
        }

        componentDidMount(){
axios.get("http://localhost:8888/tasks").then((result)=>{
    this.setState({
        Todo:result.data
    })
})
        }
  
    addTodo=(text)=>{
        debugger;
        const todo=this.state.Todo;
       
        axios.post("http://localhost:8888/tasks",{
            task:text,
            completed:false

        }).then(()=>{
            const newTodo=this.state.Todo.concat({
                task:text
            });
            this.setState({
                Todo:newTodo
            })
        });
        // this.setState({
        //     Todo:newTodo});
    }
    deleteTodo=(index)=>{
        debugger;
        const {Todo}=this.state;
        const todo=Todo[index];

        axios.delete("http://localhost:8888/tasks/"+todo.id).then((result)=>{
            const newTodo=Todo.filter((x,i)=>{
                if(index===i){
    return false;
                }
                return true;
            });
            this.setState({
                Todo:newTodo});
        })
       
    }
    toggleTask=(task)=>{
        debugger;
        const todo=this.state.Todo[task];
        const newTodo=this.state.Todo.map((x,i)=>{
            if(task===i){
                return{
                    ...x,
                    completed: !x.completed
                }
            }
            return x;
            
        });
        axios.put("http://localhost:8888/tasks/"+todo.id,{
            ...todo,
            completed: !todo.completed,

        }).then(()=>{
            this.setState({
                Todo:newTodo
            })
        });
       
    }
    editTask=(task,newTask)=>{
        debugger;
        const todo=this.state.Todo[task];
        
        axios.put("http://localhost:8888/tasks/"+todo.id,{
            ...todo,
            task: newTask,

        }).then(()=>{
            const newTodo=this.state.Todo.map((x,i)=>{
                if(task===i){
                    return{
                        ...x,
                        task: newTask
                    }
                }
                return x;
                
            });
            this.setState({
                Todo:newTodo
            })
        });
    }
  
    render(){
        debugger;
        return(
            <div>
                <ul>{
                    
                    this.state.Todo.map((x,index)=>{
                        debugger;
                        return<ItemTodo
                        deleteTodo={this.deleteTodo}
                         toggleTask={this.toggleTask} 
                         editTask={this.editTask}
                         index={index} 
                         key={index} 
                         todo={x}/>
                    })
                }</ul>
                <AddTodo 
                addTodoProps={this.addTodo}/>
            </div>
        );
    }

}
export default ToDoList;