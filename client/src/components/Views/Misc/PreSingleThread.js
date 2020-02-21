import React from 'react';
import {Link} from 'react-router-dom';

function PreSingleThread() {
    return (
        <>
            <section className='prethread'>
                <p className='pagination'>Page: <span className='pagenumber'><Link to='/forum'>1</Link></span><span className='pagenumber'><Link to='/forum'>2</Link></span><span className='pagenumber'><Link to='/forum'>3</Link></span><span className='pagenumber'><Link to='/forum'>4</Link></span><span className='pagenumber'><Link to='/forum'>5</Link></span></p>
                <span className='postthreadlink'><Link to='/newreply'>New Reply</Link></span>
            </section>
        </>
    )
}

export default PreSingleThread;