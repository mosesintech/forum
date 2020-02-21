import React from 'react';
import {Link} from 'react-router-dom';

function ThreadUserInfo() {
    return (
        <td className='userthread'>
            <span className='threaduserinfoleft'>
                <p className='username'><Link to='/user'>User</Link></p>
                <img src='https://avatarfiles.alphacoders.com/219/219973.jpg' alt ='Username' />
            </span>
            <span className='threaduserinforight'>
                <p>Posts: <Link to='/user/posts'>5,275</Link></p>
                <p>Threads: <Link to='/user/threads'>24</Link></p>
                <p>Joined Date: 02/13/2020</p>
                <p>Reputation: <span className='repgood'><Link to='/user/reputation'>55</Link></span></p>
            </span>
        </td>
    )
}

export default ThreadUserInfo;