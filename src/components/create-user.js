import React from 'react';
import NavBar from './navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateUser extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            bio: ''
        }
    }

    onChange = (e) => {
        // sets the state variable with the name of evt.target.id(name or email)
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            "name": this.state.name,
            "email": this.state.email,
            "bio": this.state.bio
        };

        console.log(newUser)
        
        fetch('http://localhost:5000/users/add', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newUser)
        })
            .then(resp => resp.json())
            .then(data => console.log("Success", data))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className = "container" style = {{marginTop: 10}}>
                    <h3>Create User</h3>
                    <Form onChange={this.onChange} onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" id = "name" placeholder="Enter Name" ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" id = "email" placeholder="Enter Email" ></Form.Control>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Bio</Form.Label>
                            <Form.Control type="text" id = "bio" placeholder="Enter Bio" ></Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Create User
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default CreateUser;