import React from 'react';
import { Button } from 'reactstrap';
import './App.css';
import TodoItem from './component/TodoItem'
class App extends React.Component {
 
  constructor(){
    super();
    this.state={
      TodoItem:[{title:"đi chợ",isComplete:true},{title:'học tại coderx',isComplete:true},{title:'nấu ăn',isComplete:true}]
    };
  
    this.onItemClick=this.onItemClick.bind(this);
  }
  componentDidMount()
  {

  this.getdata().then(data=>console.log(data))
  }
  async getdata()
  {
  var data =await fetch('https://demoexpress200.herokuapp.com/api/books');
  var data2=await data.json();
  return data2;
  }
  onItemClick(item)
  {
    return ()=>{
      const {isComplete}=item;
      const {TodoItem}=this.state;
      const index = this.state.TodoItem.indexOf(item);
      this.setState({
        TodoItem:[
          ...TodoItem.slice(0,index),
          {...item,isComplete:!isComplete },
          ...TodoItem.slice(index+1)
        ]
      })
  
  }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {
           
            this.state.TodoItem.length>0 &&  this.state.TodoItem.map(item => <TodoItem key={item.title.toString()} item={item} onclick={this.onItemClick(item)}></TodoItem>)
          }
          {
            this.state.TodoItem.length===0 && 'Nothing Here!'
          }
          <Button>cc</Button>
           
        </header>
      </div>
    );
  }
  }
  
export default App;
