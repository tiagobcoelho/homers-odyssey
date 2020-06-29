import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper, Button } from '@material-ui/core';

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
        this.props.toggleOpen()

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
            <h1 style={{ textAlign:"left"}}>Sign Up</h1>
            <form style={{ marginRight:"20px", display:"flex", flexDirection: "column"}} onSubmit={this.handleSubmit}>
                <TextField style={{width:"100%"}} type="text" label="first name" name="name" onChange={this.handleChange} />
                <TextField style={{width:"100%"}} type="text" label="last name" name="lastname" onChange={this.handleChange} />
                <TextField style={{width:"100%"}} type="email" label="email" name="email" onChange={this.handleChange} />
                <TextField style={{width:"100%"}} type="password" label="password" name="password" onChange={this.handleChange} margin-bottom="normal" />
                <Button style={{width: "fit-content", marginTop: "20px", alignSelf:"flex-end"}} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
            
        </div>
       
    );
  }
}

export default SignUp;