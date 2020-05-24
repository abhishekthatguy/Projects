import REact,{Component} from 'react';

class Toogle extends Component{

    render(){
        return(
            <div>
           <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
  <button type="submit" className="btn btn-primary btn-outline-success">
    Submit
  </button>
</form>
     </div>
        );
    }

}
export default Toogle;