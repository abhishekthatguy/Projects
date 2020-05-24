import React,{Component} from 'react';
import Axios from 'axios';
class Posts extends Component{
    state={
        posts:[]
    }
    componentDidMount(){
        const {user} =  this.props;
        // user.id=2;
        console.log(this.props);
        this.getData(user.id);
    
    }
    getData=(id)=>{
        Axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`).then((result)=>{
            this.setState({
                posts:result.data
            })

        })
    }
    componentDidUpdate(prevProps,prevState){
console.log("prev props", prevProps.user.id,prevState);
console.log("state props", this.state,this.props.user.id);
if(prevProps.user.id !==this.props.user.id){
    this.getData(this.props.user.id);
}

    }
    render(){
        const {posts}=this.state;
        console.log(posts);
        return (<div>
{posts.map((post)=>{
    return (
        <div className="card" style={{ width: "18rem",color:"red" }} key={post.id}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">
      {post.body}
    </p>
  </div>
</div>
    )
})}
        </div>)
    }
}
export default Posts;