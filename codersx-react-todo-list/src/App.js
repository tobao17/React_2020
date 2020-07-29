import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './component/TodoItem'
class App extends React.Component {
 
  constructor(){
    super();
    this.TodoItem=['di cho','nấu ăn','học coderx']
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {
            this.TodoItem.map(item => <TodoItem title={item}></TodoItem>)
          }
          
        </header>
      </div>
    );
  }
  }
  
export default App;
