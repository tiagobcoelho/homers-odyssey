import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: ""
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
        //console.log(this.state)
        this.props.handleLoggedIn()


    //    fetch("/auth/signin",
    //    {
    //        method: 'POST',
    //        headers: new Headers({
    //                'Content-Type': 'application/json'
    //    }),
    //        body: JSON.stringify(this.state),
    //    })
    //    .then(res => res.json())
    //    .then(res => {
    //        console.log(res)
    //        if(res[0].password === this.state.password){
    //            this.props.handleLoggedIn()
    //            this.props.handleUserInfo(res)
    //        }
    //    }
    //    )
    }

  render() {
    return(
        <div className="form">
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
                <TextField type="email" label="email" name="email" onChange={this.handleChange} />
                <TextField type="password" label="password" name="password" onChange={this.handleChange} margin-bottom="normal" />
                <Button className="submit-btn" type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
            <Link to="/signup">Create an account</Link>
        </div>
       
    );
  }
}

export default SignIn;