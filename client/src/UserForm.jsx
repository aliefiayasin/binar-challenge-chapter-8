import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id:'',
        value: '',
        email: '',
        experience: '',
        level: '',
        title: 'Create new player',
        playerList: [{id: 1, name:"alief", email:"alief@gmail.com"}, {id: 2, name:"alief2", email:"alief2@gmail.com"}],
        mode: 1
      }
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEditPlayer = this.handleEditPlayer.bind(this);
      this.handleEditSavePlayer = this.handleEditSavePlayer.bind(this);
      this.handleDeletePlayer = this.handleDeletePlayer.bind(this);      
      this.handleCreateNew = this.handleCreateNew.bind(this); 
      this.handleSearch = this.handleSearch.bind(this);
      this.handleExperienceChange = this.handleExperienceChange.bind(this);
      this.handleLevelChange = this.handleLevelChange.bind(this);
   }
    
    handleNameChange (event) {
        this.setState({ value: event.target.value });
    }
    handleEmailChange (event) {
        this.setState({ email: event.target.value });
    }
    handleExperienceChange(event) {
        this.setState({ experience: event.target.value });
    }
    handleLevelChange(event) {
        this.setState({ level: event.target.value });
    }
  
    handleSubmit(event) {
        let list = this.state.playerList;
        let maxid = list[list.length - 1].id;
        let playerId = maxid+1;
        let player = {id: playerId, name : this.state.value, email : this.state.email};
        this.setState({ 
            playerList : [...this.state.playerList, player]
        });
      event.preventDefault();
    }

    handleEditPlayer(event) {        
        let player = this.state.playerList.find(x => x.id == event.target.id);
        this.setState({ 
            title: "Edit Player",
            value: player.name,
            email: player.email,
            experience: player.experience,
            level: player.level,
            id: player.id,
            mode: 2
        });
    }

    handleEditSavePlayer(event){
        let player = this.state.playerList.find(x => x.id == this.state.id);
        var index = this.state.playerList.indexOf(player)
         if (index != -1) {
            this.state.playerList[index].name = this.state.value;
            this.state.playerList[index].email = this.state.email;
            this.state.playerList[index].experience = this.state.experience;
            this.state.playerList[index].level = this.state.level;
            this.setState({ 
                title: "Create new player",
                value: '',
                email: '',
                mode: 1
            });
            event.preventDefault();
        }
    }

    handleCreateNew(event){
        this.setState({ 
            title: "Create new player",
            value: '',
            email: '',
            mode: 1
        });
        event.preventDefault();
    }

    handleSearch(event){
        this.setState({ 
            title: "Search player",
            value: '',
            email: '',
            experience: '',
            level: '',
            mode: 3
        });
        event.preventDefault();
    }

    handleDeletePlayer(event) {
        let id = event.target.id.replace('delete_','');
        let array = [...this.state.playerList]
        let player = this.state.playerList.find(x => x.id == id);
        var index = array.indexOf(player)
         if (index != -1) {
            array.splice(index, 1);
            this.setState({ 
                value: '',
                email: '',
                mode: 1,
                playerList: array
            });
          }
        
    }

    renderFormButton(param){
        switch(param){
            case 1: return <input type="submit" value="Submit" onClick={this.handleSubmit} />;
            case 2: return <input type="submit" value="Save" onClick={this.handleEditSavePlayer}/>;
            case 3: return <input type="submit" value="Search" onClick={this.handleSubmit}/>;
            default: return <></>;
        }    
    }

    renderEmailText(param){
        if(param==1)
            return <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
    }

    renderExperience(param){
        if(param!=1)
            return <Form.Group className="mb-3" controlId="formBasicExperience">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control type="text" placeholder="Enter experience" value={this.state.experience} onChange={this.handleExperienceChange} />
                    </Form.Group>
    }

    renderLevel(param){
        if(param!=1)
            return <Form.Group className="mb-3" controlId="formBasicLevel">
                        <Form.Label>Level</Form.Label>
                        <Form.Control type="text" placeholder="Enter level" value={this.state.level} onChange={this.handleLevelChange} />
                    </Form.Group>
    }
  
    render() {
        const divMarginStyle = {
            margin:'25px 30px 25px 30px'
        }
      return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">{this.state.title}</h1><br/>
            <div className="col-lg-4" style={divMarginStyle}>
                <Form onSubmit={this.handleSubmit}>
                    <input type="hidden" value={this.state.id} />
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" value={this.state.value} onChange={this.handleNameChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
                        {this.renderEmailText(this.state.mode)}
                    </Form.Group>
                    {this.renderExperience(this.state.mode)}
                    {this.renderLevel(this.state.mode)}
                    {this.renderFormButton(this.state.mode)}
                
                </Form>
            </div>
        <br/>
        <div>
            <h2>Player list</h2>
            <div className="text-end"><Button onClick={this.handleCreateNew}>Create New</Button>&nbsp;<Button onClick={this.handleSearch}>Search</Button></div><br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Experience</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.playerList.map(player => {
                    return  <tr key={player.id}>
                                <td>{player.name}</td>
                                <td>{player.email}</td>
                                <td>{player.experience}</td>
                                <td>{player.level}</td>
                                <td>
                                    <Button variant="success" id={player.id} type="button" onClick={this.handleEditPlayer}>Edit</Button>&nbsp;
                                    <Button variant="danger" id={"delete_" + player.id} type="button" onClick={this.handleDeletePlayer}>Delete</Button>
                                </td>
                            </tr>
                    })
                }
                </tbody>               
            </Table>
            
        </div>
        
        </div>
        
      );
    }
  }

  
export default UserForm;