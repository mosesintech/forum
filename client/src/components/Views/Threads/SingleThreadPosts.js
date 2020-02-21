import React from 'react';
import ThreadUserInfo from './ThreadUserInfo';
import PostInfo from './PostInfo';
import PostSignature from './PostSignature';

function SingleThreadPosts() {
    return (
        <>
        <tr>
            <ThreadUserInfo />
        </tr>
        <tr className='trow'>
            <td className="post">
                <PostInfo />
                <p>
                    Hi, I’m Justin, and I live in Central Ohio, USA. I’ve been on the MyBB team since April 2006, back in the days of MyBB 1.1. I’m currently a junior in high school. In my free time, I run a roller coaster simulator fansite called RCTgo, and also do some web design through my portfolio, Belloman Design. I obviously love roller coasters, and I play the alto saxophone in my school’s jazz, concert, and marching bands.
                    How did you discover MyBB?
                </p>
                <PostSignature />
            </td>
        </tr>
        </>
    );
}

export default SingleThreadPosts;