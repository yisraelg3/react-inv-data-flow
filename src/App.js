import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

import InputField from './components/InputField'
import TextDisplay from './components/TextDisplay'


class App extends Component{

  state={
    whatUserTyped: ""
  }

  changeWhatUserTyped = (infoFromChild) => {
    // When this function is invoked, it'll receive some information from the Child
    // What do you want to do with this information?  
      // Hint: You want to save it to state
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* PROPS ??? */}
          <InputField />
          <TextDisplay />

          {/* PROPS ??? */}

        </header>
      </div>
    );
  }
  
}

export default App;
