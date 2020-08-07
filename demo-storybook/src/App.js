import React, { Component } from 'react';
import WeeklySongListItem from './components/WeeklySongListItem';
import Booklist from './components/Booklist'
class App extends Component {
  render() {
    return <div className="App">
      <WeeklySongListItem
        order="01"
        title="Em Không Thể"
        singer="Tiên Tiên, Touliver"
        viewCount={3000} />
         <Booklist 
  description="tôi thấy sách siêu hay"
  imageBookurl="http://res.cloudinary.com/dncg2zipn/image/upload/v1594295320/ygudluf07ja3sdo6oooa.jpg"
  title="sách hay"
      >
  </Booklist>
    </div>;
  }
}

export default App;
