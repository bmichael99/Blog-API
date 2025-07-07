import { useState, useEffect } from 'react'
import './LogIn.css'
import Navbar from './components/Navbar.jsx'
import { useOutletContext, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from './hooks/useAuth.jsx'

function LogIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const { auth, setAuth } = useAuth();

  function LogInAuth(){

  }

  function SignUpAuth(){

  }

  const  handleSubmit = async (event) =>{
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log(responseData);

    setAccessToken(responseData.accessToken);
    setUser(responseData.user);
    setAuth({accessToken: responseData.accessToken, user: responseData.user});

    if(response.status == 200){
      navigate('/posts');
    }
    
  }
  


  return (
    <>
      <Navbar />
      <main>
        <form className="auth-form" onSubmit={handleSubmit}>
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

export default LogIn
