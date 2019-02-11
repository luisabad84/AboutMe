import React, { Component } from 'react';
import './App.css';
import MyHeader from './components/header';
import MyProfile from './components/profile';
import NewPost from './components/newpost';
import MyPost from './components/post';
import Myfooter from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">


        </header>
        <body>
        <MyHeader/>
        <MyProfile/>
        <NewPost/>
        <MyPost/>
        <Myfooter/>
        </body>
      </div>
    );
  }
}

export default App;
