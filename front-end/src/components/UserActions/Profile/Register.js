import React from 'react';

function Register() {
    return (
        <span className='form'>
        <form>
            <h2>Sign Up!</h2>
            <span className='userinfoform'>
                <label>
                    Username:
                    <input type='text' placeholder='Username' />
                </label>
                <label>
                    Email Address:
                    <input type='text' placeholder='email@address.com' />
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

export default Register;

/*
USER PROFILE INFORMATION:
    Username: Elegant Totality
    Password: ********
    Email Address: elegant_totality@yahoo.com
 */