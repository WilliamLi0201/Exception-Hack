import React from 'react';
import NavBar from './navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateTweet extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            username: '',
            text: '',
            date: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/users/')
            .then(resp => resp.json())
            .then(users => this.setState({users: users}))
            .catch(err => console.log(err))
    }

    onChange = (e) => {
        // sets the state variable with the name of evt.target.id(name or email)
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value})
    }

    onSubmit = (e) => {
        const newTweet = {
            username: this.state.username,
            text: this.state.text,
            date: this.state.date
        }
        console.log(newTweet);

        fetch('/tweets/add', {
            method: "POST",
            body: JSON.stringify(newTweet)
        })
            .then(resp => resp.json())
            .then(data => console.log("Success", data))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <NavBar></NavBar>
                <div className = "container" style = {{marginTop: 10}}>
                    <h3>Create Tweet</h3>
                    <Form onChange={this.onChange} onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>UserName:</Form.Label>
                            <Form.Control id="username" as="select" onChange={this.onChange}>
                            {this.state.users.map(user => {
                                return(
                                    <option key={user.name} value={user.name}>
                                        {user.name}
                                    </option>
                                )
                            })}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Text Area</Form.Label>
                        <Form.Control as="textarea" rows="3" id = "text" placeholder='Write down your day!' />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="text" id = "date" laceholder="Enter Date" ></Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Create Tweet
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default CreateTweet;