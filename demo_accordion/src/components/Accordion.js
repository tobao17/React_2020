import React from 'react'
class Accordion extends React.Component{
    constructor()
    {
        super();
        this.state={
            isCollapsed:false
        };
        this.onclick=this.onclick.bind(this)
    }
    onclick(){
        this.setState({
            isCollapsed:!this.state.isCollapsed
        })
    }
    render()
    {
        const {title,children}=this.props;
        return (
            <div className='Accordion'>
                <h4 onClick={this.onclick}>{title}</h4>
               {this.state.isCollapsed && children }
            </div>
        )
    }
}
export default Accordion;