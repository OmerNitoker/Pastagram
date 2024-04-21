import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
// import { ImgUploader } from './ImgUploader'

export function LoginSignup({ loginUser, signupUser }) {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(false)
    const [users, setUsers] = useState([])




    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        const existingUser = users.find(user => user.username === credentials.username && user.password === credentials.password);
        if (!existingUser) return
        loginUser(existingUser)
        clearState()
    }

    function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname) return
        signupUser(credentials)
        clearState()
    }

    function toggleSignup() {
        setIsSignup(!isSignup)
    }

    function loginGuest() {
        const guestUsername = 'guy_yaakov'
        const guestPassword = 'guy123'
        const guestUser = users.find(user => user.username === guestUsername && user.password === guestPassword)
        if (!guestUser) {
            alert('Sorry! there was a problem connecting as guest. Please login or signup')
            return
        }
        loginUser(guestUser)
        clearState()
    }

    // function onUploaded(imgUrl) {
    //     setCredentials({ ...credentials, imgUrl })
    // }

    return (
        <div className="login-page">

            {/* <div className="login-image"> */}
            <img className="loginsignup-image" src="src/assets/img/login-image.png" alt="mockup" />
            {/* </div> */}

            {/* <p>
                <button className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button>
            </p> */}
            {!isSignup && <form className="login-form" onSubmit={onLogin}>
                {/* <select
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                >
                    <option value="">Select User</option>
                    {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                </select> */}

                {/* <h1 className="logo">Vistagram</h1> */}
                <div className="pasta-logo">
                    <img src="../src/assets/img/logo-png.png" alt="" />
                </div>
                <input
                    type="mail"
                    name="username"
                    value={credentials.username}
                    placeholder="Username"
                    onChange={handleChange}
                    required
                    autoFocus
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <button className='login-submit-btn'>Login!</button>
                <p>Don't have an account? <span className='login-signup-btn' onClick={toggleSignup}>Sign up</span></p>
                <p>or</p>
                <button className="login-demo-btn" onClick={loginGuest}> Continue as guest</button>

            </form>}
            <div className="signup-section">
                {isSignup && <form className="signup-form" onSubmit={onSignup}>
                    <h1 className="logo">Vistagram</h1>
                    <input
                        type="text"
                        name="fullname"
                        value={credentials.fullname}
                        placeholder="Fullname"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    {/* <ImgUploader onUploaded={onUploaded} /> */}
                    <button className='signup-submit-btn'>Signup!</button>
                    <p>Have an account? <span className='login-signup-btn' onClick={toggleSignup}>Log in</span></p>
                    <button className="login-demo-btn" onClick={loginGuest}> Continue as guest</button>
                </form>}
            </div>
        </div>
    )
}