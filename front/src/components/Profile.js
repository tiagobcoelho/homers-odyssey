import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Button } from '@material-ui/core';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            profile: {
                email:  "homer.simpson@wildcodeschool.fr",
                name:  "Homer",
                lastname:  "Simpson"
            }
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

        fetch("/auth/signin",
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
    console.log(this.props)
    return(
        <div className="form">
            <Button className="sign-out-btn" type="submit" variant="contained" color="primary" onClick={this.props.handleLoggedIn}>
                   Sign out
                </Button>
            <List>
                <ListItem>
                    <ListItemText primary="email" secondary={this.state.profile.email}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="first name" secondary={this.state.profile.name}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="last name" secondary={this.state.profile.lastname}/>
                </ListItem>
            </List>
            
        </div>
       
    );
  }
}

export default Profile;