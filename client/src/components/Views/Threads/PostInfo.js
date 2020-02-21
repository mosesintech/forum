import React from 'react';
import {Link} from 'react-router-dom';

function PostInfo() {
    return (
        <>
        <span className="postinfo">
            <p>02/16/2020, 12:11 AM</p>
            <p className='postnumberlink'><Link to='/thread'>Post #</Link></p>
        </span>
        <hr />
        </>
    );
}

export default PostInfo;