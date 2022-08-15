import React, {Component} from 'react'
import Link from './Link'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', email: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.username});
        this.setState({email: event.target.email});
        this.setState({experience: event.target.experience});
        this.setState({level: event.target.level});
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Link />
                <h3>Search player</h3><br/>
                <form onSubmit={this.handleSubmit}>
                    <label for="username">Username:</label><br />
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} /><br />

                    <label for="email">Email:</label><br />
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}  /><br />

                    <label for="experience">Experience:</label><br />
                    <input type="string" id="password" name="experience"  value={this.state.experience} onChange={this.handleChange} /><br />

                    <label for="level">Experience:</label><br />
                    <input type="string" id="level" name="level"  value={this.state.level} onChange={this.handleChange} /><br />

                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            )
    }
}

export default Search