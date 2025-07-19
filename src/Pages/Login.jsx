// src/pages/Login.jsx
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase' // import from your firebase.js
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase' // import from your firebase.js

const Login = () => {
  const navigate = useNavigate()

  // State to manage email, password and error
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault()
    setError('') // reset error

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Get user's profile data from Firestore
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log("User profile data:", userData);

        // Option 1: Store in localStorage (if needed across pages)
        localStorage.setItem('userData', JSON.stringify(userData));

        // Option 2: Navigate with state (temporary)
        navigate('/userprofile', { state: { userData } });

      } else {
        console.log("No profile found for this user");
        // You can redirect them to profile setup page if needed
        navigate('/profilesetup');
      }
    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen font-body bg-background">
      <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow-lg bg-tertiary">
        <h2 className="text-2xl font-highlights text-center">Welcome Back 👋</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 text-white bg-primary rounded-md hover:bg-secondary transition"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account? <Link to="/signup" className="text-primary underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
