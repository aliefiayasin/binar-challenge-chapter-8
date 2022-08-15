import React, {Component} from 'react'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.email});
        this.setState({password: event.target.password});
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Edit</h1><br/>
                <form onSubmit={this.handleSubmit}>
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

export default Edit