import React from 'react';
import {Link} from 'react-router-dom';
import PreThreadsList from '../Misc/PreThreadsList';

function SingleBoard() {
    return (
        <div>
            <section className='breadcrumbs'>
                <Link to="/">Home</Link> / <Link to='/category'>Forum Category</Link> / Forum Board
            </section>
            <PreThreadsList />
            <section>
                <table>
                <th colspan="4" className="cat-page">Threads in <Link to ='/forum'>Board</Link></th>
                <tbody>
                    <tr className='tcat'>
                    <td>Thread / Author</td>
                    <td className="num">Replies</td>
                    <td className="num">Views</td>
                    <td className="latest-thread">Last Posts</td>
                    </tr>
                    <tr className='tkind'>
                    <td colspan='4'>Important Threads</td>
                    </tr>
                    <tr className='trow'>
                    <td className="board-name">
                        <Link to='/thread'>Thread One</Link>
                        <br />
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    <td className="num">42</td>
                    <td className="num">590</td>
                    <td className="latest-thread">
                        <Link to='/lastpost'>11 hours ago</Link>
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    </tr>
                    <tr className='trow'>
                    <td className="board-name">
                        <Link to='/thread'>Thread Two</Link>
                        <br />
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    <td className="num">42</td>
                    <td className="num">590</td>
                    <td className="latest-thread">
                        <Link to='/lastpost'>excerpt from the latest post...</Link>
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    </tr>
                    <tr className='tkind'>
                    <td colspan='4'>Normal Threads</td>
                    </tr>
                    <tr className='trow'>
                    <td className="board-name">
                        <Link to='/thread'>Thread Three</Link>
                        <br />
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    <td className="num">42</td>
                    <td className="num">590</td>
                    <td className="latest-thread">
                        <Link to='/lastpost'>excerpt from the latest post...</Link>
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    </tr>
                    <tr className='trow'>
                    <td className="board-name">
                        <Link to='/thread'>Thread Four</Link>
                        <br />
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    <td className="num">42</td>
                    <td className="num">590</td>
                    <td className="latest-thread">
                        <Link to='/lastpost'>excerpt from the latest post...</Link>
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    </tr>
                    <tr className='trow'>
                    <td className="board-name">
                        <Link to='/thread'>Thread Five</Link>
                        <br />
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    <td className="num">42</td>
                    <td className="num">590</td>
                    <td className="latest-thread">
                        <Link to='/lastpost'>excerpt from the latest post...</Link>
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    </tr>
                                        <tr className='trow'>
                    <td className="board-name">
                        <Link to='/thread'>Thread Six</Link>
                        <br />
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    <td className="num">42</td>
                    <td className="num">590</td>
                    <td className="latest-thread">
                        <Link to='/lastpost'>excerpt from the latest post...</Link>
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    </tr>
                                        <tr className='trow'>
                    <td className="board-name">
                        <Link to='/thread'>Thread Seven</Link>
                        <br />
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    <td className="num">42</td>
                    <td className="num">590</td>
                    <td className="latest-thread">
                        <Link to='/lastpost'>excerpt from the latest post...</Link>
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    </tr>
                                        <tr className='trow'>
                    <td className="board-name">
                        <Link to='/thread'>Thread Eight</Link>
                        <br />
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    <td className="num">42</td>
                    <td className="num">590</td>
                    <td className="latest-thread">
                        <Link to='/lastpost'>excerpt from the latest post...</Link>
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    </tr>
                                        <tr className='trow'>
                    <td className="board-name">
                        <Link to='/thread'>Thread Nine</Link>
                        <br />
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    <td className="num">42</td>
                    <td className="num">590</td>
                    <td className="latest-thread">
                        <Link to='/lastpost'>excerpt from the latest post...</Link>
                        <p>posted by <Link to='/user'>User</Link></p>
                    </td>
                    </tr>                    
                </tbody>
                </table>
            </section>
            <PreThreadsList />
        </div>
    );
}

export default SingleBoard;