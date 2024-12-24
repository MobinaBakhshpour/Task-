import './App.css';
import React from 'react';
import Box from './box/Box';
import Select from './selectElement/Select';
import dataList from './datas';

function App() {
  console.log(dataList);
  
  return (
    <div className="App">
      <Box title="All Data" name="Add">
      <div className="selects">
      {Object.entries(dataList).map(([key, data]) => (        
        <Select idElm={key} quantity={data.length} />
      ))}
      
      </div>
      </Box>
      <Box title="Selected Data" name="Delete" />
    </div>
  );
}

export default App;
