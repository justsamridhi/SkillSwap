import React , {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'  // adjust path if needed
import { Link } from 'react-router-dom';


const Signup = () => {
    const navigate= useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('')
        if (password !== confirmPassword) {
            setError('Password and Confirm Password do not match');
        }
        else {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                console.log('User created successfully')
                navigate('/profilesetup')
            }
            catch (error) {
                setError(error.message)
                console.log(error)
            }
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen font-body bg-background">
      <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow-lg bg-tertiary" >
        <h1 className='text-3xl font-highlights text-center' >Signup</h1>
        <form className="space-y-4" onSubmit={handleSignup} >
            <div>
                <label className="block text-sm font-medium text-gray-700">Name:</label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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

            <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
                />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
            type="submit"
            className="w-full py-2 text-white bg-primary rounded-md hover:bg-secondary transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-primary underline">Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
