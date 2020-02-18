import React from 'react';

function Login() {
    return (
        <span className='form'>
        <form>
            <h2>Login</h2>
            <span className='userinfoform'>
                <label>
                    Username or Email:
                    <input type='text' placeholder='Username or Email' />
                </label>
                <label>
                    Password:
                    <input type='password' placeholder='Password' />
                </label>
                <button>GO!</button>
            </span>
        </form>
        </span> 
    );
}

export default Login;