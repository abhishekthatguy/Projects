import React,{Component} from 'react';
import Axios from 'axios';
import Posts from './postList';
import './dashboard.css';

class Dashboard extends Component{

  state={
      users:[],
      selectedUSer:null
  }

    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
            console.log(result);
            this.setState({
                users:result.data,
                selectedUSer:result.data[0]
            })
        })
    }
    changeSelecetUser=(user)=>{
        this.setState({
            selectedUSer:user
        })
    }
 render(){

    const {users,selectedUSer}=this.state;

     return(<div className="container">
     <div className="row">
         <section className="col-sm">
         {users.length===0 ? "loading...":(

        
         <ul className="list-group">
         {
             users.map((user,index)=>{

                 return <li key={user.id} 
                 className={`list-group-item lists ${user.id===selectedUSer.id ? "Active" : ""}`}
                  onClick={()=>{this.changeSelecetUser(user)}}>{user.name}</li>
             })
         }
  
  
</ul>
 )
         }

         </section>
         <section className="col-md-6">
         {selectedUSer !==null &&  <Posts user={selectedUSer}/>}
         </section>
         </div>
     </div>);
 }
} 
export default Dashboard;