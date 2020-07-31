import React from 'react';

import './App.css';
import TrafficLight from './component/TrafficLigth.js'
const red=1;
const yellow=2;
const green=3; 
class App extends React.Component {
 
  constructor()
  {
      super();
      this.state={
          currentColor: green
      };
      //console.log(this.state.currentColor)
      setInterval(  ()=>{
        this.setState({
              currentColor:this.getNextColor(this.state.currentColor)
          });
      },1000)
     
  }
 
  getNextColor(color ){
      //console.log(color)
      if (color===red)
         return yellow;
      else if (color===yellow)
        return green;
      else
       return red;
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <TrafficLight currentColor={this.state.currentColor}></TrafficLight>
        </header>
      </div>
    );
  }
  }
  
export default App;
