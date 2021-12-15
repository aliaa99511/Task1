
import React, { Component } from 'react'


class Child extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
    }



    render(){

        return (
            <div>
                <div>
                    <button type="submit" name="signup" value={this.props.name} onChange={this.props.handleNameChange} className="btn btn-warning" style={{color:"E5E5E5"}}>Sign up</button>
                    <button type="submit" name="signin" value={this.props.name} onChange={this.props.handleNameChange} className="btn btn-light">Sign in</button>
                </div>

                <br/>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputName4">First name</label>
                            <input type="text" name="firstName" value={this.props.firstName} onChange={this.props.handleNameChange} className="form-control" id="inputName4" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputLastName4">Last Name</label>
                            <input type="text" name="lastName" value={this.props.lastName} onChange={this.props.handleNameChange} className="form-control" id="inputLastName4" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputEmail4">Email</label>
                        <input type="email" name="email" value={this.props.email} onChange={this.props.handleNameChange} className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group">
                        <label for="exampleSelect1">school</label>
                        <select name= "Get schools" value={this.props.name} onChange={this.props.handleNameChange} className="form-control" id="exampleSelect1">
                            <option value={this.props.schoolValue}>school 1</option>
                            <option value={this.props.schoolValue}>school 2</option>
                            <option value={this.props.schoolValue}>school 3</option>
                            <option value={this.props.schoolValue}>school 4</option>
                            <option value={this.props.schoolValue}>school 5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleSelect2">classes</label>
                        <select name= "Get classes by school Id" value={this.props.name} onChange={this.props.handleNameChange} className="form-control" id="exampleSelect2">
                            <option value={this.props.classValue}>class 1</option>
                            <option value={this.props.classValue}>class 2</option>
                            <option value={this.props.classValue}>class 3</option>
                            <option value={this.props.classValue}>class 4</option>
                            <option value={this.props.classValue}>class 5</option>
                        </select>
                    </div>
                    <div className="form-group ">
                        <label for="inputPassword4">Password</label>
                        <input type="password" name="password" value={this.props.password} onChange={this.props.handleNameChange} className="form-control" id="inputPassword4" />
                    </div>
    
                    <button type="submit" className="btn btn-primary" style={{color:"463c74"}}>Sign up</button>
                </form>
    
                

                <p>{this.props.name}</p>

            </div>
    
        );
    }

}
export default Child;


/*
    handleNameChange=(e)=>{
        const {handleNameChange,index} = this.props;
        const name =e.target.value
        handleNameChange(name , index)
    }
*/