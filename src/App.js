import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import About from './components/About.js';


const routes = {
  home: Home,
  projects: Projects,
  About: About,
}


export default class App extends Component {

  state = {
    currentPage: 'home',
  }


  changePage = (page) => {
    this.setState({currentPage: page})
  }


  render() {

    //gives me the name of the "page/view" that will be shown, by using the object "routes" and the currentPage state, and used in the return
    const Page = routes[this.state.currentPage];

    return (
      <div className="App">
        <Header goTo={this.changePage}/>
        <Home/>
      </div>
    );
  }
}