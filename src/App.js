import './App.css';
import React from 'react';
import Box from './box/Box';
import Select from './selectElement/Select';

function App() {
  return (
    <div className="App">
      <Box title="All Data" name="Add">
        <div className="selects">
          <Select id='A' quantity='1' />
        </div>
      </Box>
      <Box title="Selected Data" name="Delete" />
    </div>
  );
}

export default App;
