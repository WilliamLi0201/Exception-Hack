import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateUser from './components/create-user';
import CreateTweet from './components/create-tweet';
import TweetList from './components/tweet-list';
//import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/list" component={TweetList}></Route>
        <Route path="/list/user" component={CreateUser}></Route>
        <Route path="/list/tweet" component={CreateTweet}></Route>
      </Router>  
    </div>
  );
}

export default App;