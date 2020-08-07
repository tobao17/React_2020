import React from 'react';

import PropTypes from 'prop-types';

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


TodoItem.propTypes={
    onclick:PropTypes.func,
    item:PropTypes.shape({
        isComplete:PropTypes.bool,
        title:PropTypes.string.isRequired
    })


}

export default TodoItem;