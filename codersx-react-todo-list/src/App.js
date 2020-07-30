import React from 'react';

import './App.css';
import TodoItem from './component/TodoItem'
class App extends React.Component {
 
  constructor(){
    super();
    this.TodoItem=[{title:'đi chợ',isComplete:true},{title:'học tại coderx',isComplete:true},{title:'nấu ăn',isComplete:true}]
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {
            this.TodoItem.length>0 &&  this.TodoItem.map(item => <TodoItem item={item}></TodoItem>)
          }
          {
            this.TodoItem.length===0 && 'Nothing Here!'
          }
           
        </header>
      </div>
    );
  }
  }
  
export default App;
