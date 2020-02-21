import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <h1><Link to='/'>Forum by MosesIn.Tech</Link></h1>
            <nav>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </header>
    );
}

export default Header;