import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardBody,CardGroup
} from 'reactstrap';

const Example = (props) => {
  const{description,imageBookurl,title}=props
  return (
<CardGroup style={ { margin: "5px 0 0 0"}  }> <Card style={ { padding: "5px"}}>
        <CardImg top width="100%" src={imageBookurl}/>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          
          <CardText>{description}</CardText>
          <Button>Add to Card</Button>
        </CardBody>
      </Card></CardGroup>
     
     
    
  );
};

export default Example;