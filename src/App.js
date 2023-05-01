import React from 'react';
import './App.css';
import CardDisplay from './CardDisplay';
import CardForm from './CardForm';

class App extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      name: "",
      nmail: "",
      linkedIn: "", 
      github: ""
    }
}

    updateState = (stateKey, newValue) => {
      this.setState({
        [stateKey]: newValue
      });
}

    render(){
      return (
      <div className="App">
        <CardDisplay card={this.state} updateState={this.updateState}/>
        <CardForm card={this.state} />
      </div>
    );
 }
}

export default App;
