import React, {Component} from 'react'

class SignUp extends Component {
    initialState = {
        email: '',
        pass: '',
    };
    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        });
    };
    // submitForm = () => {
    //     this.props.handleSubmit(this.state);
    //     this.setState(this.initialState)

    // };
    handleSubmit = () => {
        
    }

    render(){

        const {email, pass} = this.state

        return(

            <form>
                <label htmlFor='email'>Email</label>
                <input
                type='text'
                name='email'
                id='email'
                value={email}
                onChange={this.handleChange} />
                <label htmlFor='pass'>Password</label>
                <input
                type='password'
                name='pass'
                id='pass'
                value={pass}
                onChange={this.handleChange} />
                <input
                type='button'
                value='Submit'
                onClick={this.submitForm} />

            </form>

        );
    }
}

export default SignUp;