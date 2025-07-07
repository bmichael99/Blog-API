import { useState, useEffect } from 'react'
import './LogIn.css'
import Navbar from './components/Navbar.jsx'
import { useOutletContext, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  function LogInAuth(){

  }

  function SignUpAuth(){

  }

  const  handleSubmit = async (event) =>{
    event.preventDefault();

    const data = {
      first_name: firstName,
      username: username,
      password: password,
    };

    const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(response);

    if(response.status == 200){
      navigate('/log-in')
    }
    
  }
  


  return (
    <>
      <Navbar />
      <main>
        <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Log In</button>
        </form>
      </main>
    </>
  )
}

export default SignUp
