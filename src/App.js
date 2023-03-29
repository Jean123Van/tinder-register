import React, {useState} from 'react'
import './App.css';
import {GiFlamer} from 'react-icons/gi'
import axios from 'axios'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function submit(username,password){
    axios.post('http://localhost:3000/register', {username,password})
    
  }

  return (
    <div className="App">
      <div className="register_body">
        <GiFlamer style={{color:"red", height:"40px", width:"40px"}}/>
        <h1 className="header_name">GET STARTED</h1>
        <p>By clicking register, you agree with our Terms and Privacy Policy.</p>
        <div className="register_input">
          <div className="register_fields">
            <input type="text" placeholder='username' onChange={(e) => {setUsername(e.target.value)}} value={username}></input>
            <input type="text" placeholder='password' onChange={(e) => {setPassword(e.target.value)}} value={password}></input>
          </div>
          <button className="register_button" onClick={() => submit(username, password)}>JOIN TINDER!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
