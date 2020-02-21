import React from 'react';
import {Link} from 'react-router-dom';

function PreThreadsList() {
    return (
        <>
            <section className='prethreadslist'>
                <p className='pagination'>Page: <span className='pagenumber'><Link to='/forum'>1</Link></span><span className='pagenumber'><Link to='/forum'>2</Link></span><span className='pagenumber'><Link to='/forum'>3</Link></span><span className='pagenumber'><Link to='/forum'>4</Link></span><span className='pagenumber'><Link to='/forum'>5</Link></span></p>
                <span className='postthreadlink'><Link to='/newthread'>Post Thread</Link></span>
            </section>
        </>
    )
}

export default PreThreadsList;