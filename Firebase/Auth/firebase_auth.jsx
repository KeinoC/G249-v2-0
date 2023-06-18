import React, { useState } from 'react';
import { app, googleProvider, facebookProvider } from '../firebase-config';
import firebase from 'firebase/app';
import 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      // Signup successful
    } catch (error) {
      console.log(error.message);
      // Handle signup error
    }
  };

  const handleSocialSignup = async (provider) => {
    try {
      await app.auth().signInWithPopup(provider);
      // Social signup successful
    } catch (error) {
      console.log(error.message);
      // Handle social signup error
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup with Email</button>
      <button onClick={() => handleSocialSignup(googleProvider)}>Signup with Google</button>
      <button onClick={() => handleSocialSignup(facebookProvider)}>Signup with Facebook</button>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      // Login successful
    } catch (error) {
      console.log(error.message);
      // Handle login error
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await app.auth().signInWithPopup(provider);
      // Social login successful
    } catch (error) {
      console.log(error.message);
      // Handle social login error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login with Email</button>
      <button onClick={() => handleSocialLogin(googleProvider)}>Login with Google</button>
      <button onClick={() => handleSocialLogin(facebookProvider)}>Login with Facebook</button>
    </div>
  );
};

export { Signup, Login };
