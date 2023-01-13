
import './App.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { TextareaAutosize, TextField } from '@mui/material';


function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    //fetch('http://localhost:3001/',{
      fetch('http://satish-panpattes-macbook-pro.local:3001/',{

      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({message})
    })
    .then ((res) => res.json())
    .then ((data) => setResponse(data.message))
  }

  return (
    <div className="App">
    <h1>Ask Hilti CEO</h1>
    <form onSubmit={handleSubmit}>
      <TextField
        InputProps={{ sx: { width: 600 } }}  
        value={message}
        placeholder='Ask CEO anything'
        onChange={(e) => setMessage(e.target.value)}>
      Ask your question here
      </TextField> 
      <Button type="submit" variant="contained">Ask</Button>
    </form>
    <div>
      {response && <TextField 
      InputProps={{ sx: { width: 600 } }}
      multiline 
      value={response}></TextField>
      }
    </div>
    </div>
  );
}


export default App;
