import React from 'react';
import NavBar from './navbar';
import Figure from 'react-bootstrap/Figure';
//import Card from 'react-bootstrap/Card';

class TweetList extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: []
        }
    }

    componentDidMount() {
        fetch('/tweets/')
            .then(resp => resp.json())
            .then(tweets => this.setState({tweets: tweets}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className = "container" style = {{marginTop: 10}}>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src="holder.js/171x180"
                        />
                        <Figure.Caption>
                            Write down something.
                        </Figure.Caption>
                    </Figure>
                </div>
            </div>
        )
    }
}

export default TweetList;