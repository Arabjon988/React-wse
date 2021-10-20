import React, { useState } from 'react'
import { auth } from '../../firebase'
import './Login.css'
import { useStateValue } from '../../context/stateProvider/StateProvider'

function Login() {
    const [ {user}, dispatch] = useStateValue()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = (e) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                if (user) {
                    dispatch({
                        type: "REGISTER_USER",
                        user: user.email
                    })
                }
            })
            .catch(err => console.log(err))
        e.preventDefault()
    }

    const signInUser = (e) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                if (user) {
                    dispatch({
                        type: "SIGN_IN_USER",
                        user: user.email
                    })
                }
            })
            .catch(err => console.log(err))
        e.preventDefault(user)
    }


    return (
        <div className="login">
        <h3>Sign In Facebook</h3>
            <form>
                <p>Login: </p>
                <input type="email" placeholder="Username or email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>Password:</p>
                <input type="password" id="#" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={registerUser}>Create user</button>
                <button onClick={signInUser}>Sign In</button>

            </form>
        </div>
    )
}

export default Login
