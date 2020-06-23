import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
            passwordconf: "",
            name: "",
            lastname: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name
        console.log(event)
        this.setState({ 
            [name]: value
         })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
    }

  render() {
    return(
        <div>
            <h1>{JSON.stringify(this.state,1,1)}</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" onChange={this.handleChange}/> 
                <input type="text" name="lastname" onChange={this.handleChange}/> 
                <input type="email" name="email" onChange={this.handleChange}/> 
                <input type="password" name="password" onChange={this.handleChange}/> 
                <input type="password" name="passwordconf" onChange={this.handleChange}/> 
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
       
    );
  }
}

export default SignUp;