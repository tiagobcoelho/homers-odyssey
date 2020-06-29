import React, {Component} from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
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


        fetch("/auth/signup",
        {
            method: 'POST',
            headers: new Headers({
                    'Content-Type': 'application/json'
        }),
            body: JSON.stringify(this.state),
        })
        .then(res => res.json())
        .then(
            res => this.setState({"flash": res.flash}),
            err => this.setState({"flash": err.flash})
        )
    }

  render() {
    return(
        <div className="form">
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
                <TextField className="input" type="text" label="first name" name="name" onChange={this.handleChange} />
                <TextField className="input" type="text" label="last name" name="lastname" onChange={this.handleChange} />
                <TextField className="input" type="email" label="email" name="email" onChange={this.handleChange} />
                <TextField className="input" type="password" label="password" name="password" onChange={this.handleChange} margin-bottom="normal" />
                <Button className="submit-btn" type="submit" variant="contained" color="primary">
                    <Link to="/">Submit</Link>
                </Button>
            </form>
            <p>Have an account? <Link to="/signin">Login</Link></p>
        </div>
       
    );
  }
}

export default SignUp;