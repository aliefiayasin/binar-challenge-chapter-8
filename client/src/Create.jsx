import React, {Component} from 'react'
import Link from './Link'

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', email: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.username});
        this.setState({email: event.target.email});
        this.setState({password: event.target.password});
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Link />
                <h3>Create new player</h3><br/>
                <form onSubmit={this.handleSubmit}>
                    <label for="username">Username:</label><br />
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} /><br />

                    <label for="email">Email:</label><br />
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}  /><br />

                    <label for="password">Password:</label><br />
                    <input type="password" id="password" name="password"  value={this.state.password} onChange={this.handleChange} /><br />

                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            )
    }
}

export default Create