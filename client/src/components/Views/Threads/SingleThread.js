import React from 'react';
import {Link} from 'react-router-dom';
import PreSingleThread from '../Misc/PreSingleThread';
import SingleThreadPosts from './SingleThreadPosts';
import ThreadUserInfo from './ThreadUserInfo';
import PostInfo from './PostInfo';
import AddPost from '../../UserActions/Posts/AddPost';

function SingleThread() {
    return (
        <div>
            <section className='breadcrumbs'>
                <Link to="/">Home</Link> / <Link to='/category'>Forum Category</Link> / <Link to='/forum'>Forum Board</Link> / Single Thread
            </section>
            <PreSingleThread />
            <section>
                <table>
                <th colspan="4" className="threadtitle">Title of Thread</th>
                <tbody>
                    <tr className='tcat'>
                    <ThreadUserInfo />
                    </tr>
                    <tr className='trow'>
                    <td className="post">
                        <PostInfo />
                        <p>Justin S. is the first team member to have a go at answering questions, so be nice to him.
                            Tell us a bit about yourself
                            Hi, I’m Justin, and I live in Central Ohio, USA. I’ve been on the MyBB team since April 2006, back in the days of MyBB 1.1. I’m currently a junior in high school. In my free time, I run a roller coaster simulator fansite called RCTgo, and also do some web design through my portfolio, Belloman Design. I obviously love roller coasters, and I play the alto saxophone in my school’s jazz, concert, and marching bands.
                            How did you discover MyBB?
                            My experience with forums all began through the RollerCoaster Tycoon community, so it’s fitting that I found MyBB through one of those forums. I already had a bit of experience administrating forums when I discovered MyBB, as I had already created a forum of my own with InvisionFree. Anyway, at some point I had found a forum of Sebar’s (a notable member of the RCT community), which was running MyBB. I knew a bit about forum softwares at that point – notably vB, IPB, and phpBB – but had never heard of MyBB.
                            Eventually, I decided to check out the website, downloaded a copy of MyBB and installed it on my web hosting account. I fell in love instantly – even at PR2, it had just about everything I wanted, and was enough of an incentive to completely start over my forum with it. It’s been nearly four years since I discovered MyBB and I’m still in love with it.
                            Describe some of the roles you have taken on in the MyBB team
                            When I first became a member of the MyBB team, I was added alongside Ryan Gordon as one of the official MyBB Wiki managers. We were tasked with maintaining the wiki, ensuring all of the articles were of a high quality, and that all of the appropriate articles were there.
                            At some point, I was asked to redesign the MyBB website. A redesign had already been in progress, but we (the team) felt that it could use a bit of a “refresh.” I guess you could say that is where I began my role as designer.
                            For MyBB 1.4, I created the layouts for countless pages in the new MyBB Admin CP. I’d say roughly two-thirds of the layouts were done by me in HTML mockups. At the same time, I also wrote almost all of the wiki documentation for the new features and changes in MyBB 1.4, most noticeably rewriting nearly all of the wiki articles for the Admin CP.
                            Today, my roles are MyBB Lead Designer and Wiki Lead. I’m responsible for almost every new layout that goes into MyBB, as well as (on the side) making sure the Wiki is up to date and being well maintained.
                            Which program/tool do you enjoy using the most while designing the new layout and graphics for MyBB?
                            Pencil and paper go a long way when initially mocking up layouts. With an eraser in hand, I can easily brainstorm how I want a page laid out, as it often takes a bit of time to get something that’s “just right.” Another great thing about paper mockups is that they’re obviously strictly layout, not theme, which I think is important in early stages.
                            Recently, though, I’ve been using a program called Balsamiq Mockups, which is a fantastic tool that tries to imitate pencil and paper mockups. It’s really easy to get things looking exactly how I want them, and I think I’m going to be using it quite a bit more in the future.
                            Here are some pencil mockups that Justin did for 1.4.</p>
                    </td>
                    </tr>
                    <SingleThreadPosts />    
                    <SingleThreadPosts />    
                    <SingleThreadPosts />    
                    <SingleThreadPosts />    
                    <SingleThreadPosts />    
                    <SingleThreadPosts />    
                    <SingleThreadPosts />    
                    <SingleThreadPosts />    
                    <SingleThreadPosts />    
                    <SingleThreadPosts />    
                </tbody>
                </table>
            </section>
            <PreSingleThread />
            <AddPost />
        </div>
    );
}

export default SingleThread;