import React from 'react';

import './App.css';
import Accordion from  './components/Accordion.js'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

function App() {
  let string ='chung ta khong thuoc ve nhau giac mo khong la cua nhau'
  return (
    <div className="App">
      <header className="App-header">
      <Accordion title='click vao day' > 
      <p>{string}</p>
      </Accordion>
      <DatePicker></DatePicker>
      </header>
    </div>
  );
}

export default App;
