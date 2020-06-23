import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:""
        };
        this.updateEmailField = this.updateEmailField.bind(this);
    }

    updateEmailField(event){
        const userEmail = event.target.value;
        console.log(event)
        this.setState({ email:userEmail })
    }

  render() {
    return(
        <div>
            <h1>{this.state.email}</h1>
            <input type="email" name="email" onChange={this.updateEmailField}/>
        </div>
       
    );
  }
}

export default SignUp;