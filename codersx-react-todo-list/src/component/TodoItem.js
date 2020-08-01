import React from 'react';


class TodoItem extends React.Component
{
 
    render(){
        let className='TodoItem';
        const {item,onclick}=this.props  //destructuring
        if ( item.isComplete){
            className+=' todo-done'
        }
        return (
        <div className={className}>
           <p onClick={()=>onclick()}>{this.props.item.title}</p>
        </div>
    );
        } 
}
export default TodoItem;