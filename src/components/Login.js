import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     const response = await fetch(`http://localhost:8080/users?username=${username}&password=${password}`);
//     const data = await response.json();
//     if (data.length > 0) {
//       alert('Login successful!');
//     } else {
//       alert('Login failed!');
//     }
//   };

  const handleLogin = async () => {
    console.log(`Query: http://localhost:8080/users?username=${username}&password=${password}`);
    const response = await fetch(`http://localhost:8080/users?username=${username}&password=${password}`);
    const data = await response.json();
    if (data.length > 0) {
      alert('Login successful!');
    } else {
      alert('Login failed!');
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
