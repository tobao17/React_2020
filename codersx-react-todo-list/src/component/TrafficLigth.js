import React,{Component} from 'react';
import classNames from  'classnames'

// xay dung bien toan cuc

const red=1;
const yellow=2;
const green=3; 
export default class TrafficLight extends Component
{
   

    render(){
        const { currentColor }=this.props

        return (  <div>
            <div className={classNames('red',{
                active: currentColor===red
            })}>
            </div>
            <div className={classNames('yellow',{
                active: currentColor===yellow
            })}>
            </div>
            <div className={classNames('green',{
                active: currentColor===green
            })}>
            </div>
          </div>)
    }
}

