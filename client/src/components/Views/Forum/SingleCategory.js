import React from 'react';
import { Link } from 'react-router-dom';

function SingleCategory() {
    return (
        <div>
            <section className='breadcrumbs'>
                <Link to="/">Home</Link> / Forum Category
            </section>
        <section>
        <table>
          <th colspan="4" className="cat-page">Discussion Boards in <Link to ='/category'>Forum</Link></th>
          <tbody>
            <tr className='tcat'>
              <td>Category</td>
              <td className="num">Thread</td>
              <td className="num">Posts</td>
              <td className="latest-thread">Last Posts</td>
            </tr>
            <tr className='trow'>
              <td className="board-name">
                <Link to='/forum'>Board One</Link>
                <br />
                <p>Board description here.</p>
              </td>
              <td className="num">13,900</td>
              <td className="num">543,990</td>
              <td className="latest-thread">
                <Link to='/thread'>Title of Latest Thread</Link>
                <p>Date of post by <Link to='/user'>User</Link></p>
              </td>
            </tr>
            <tr className='trow'>
              <td className="board-name">
                <Link to='/forum'>Board Two</Link>
                <br />
                <p>Board description here.</p>
                <p className="subforum">Subforums: <Link to='/forum'>Subforum Name</Link></p>
              </td>
              <td className="num">13,900</td>
              <td className="num">543,990</td>
              <td className="latest-thread">
                <Link to='/thread'>Title of Latest Thread</Link>
                <p>Date of post by <Link to='/user'>User</Link></p>
              </td>
            </tr>
            <tr className='trow'>
              <td className="board-name">
                <Link to='/forum'>Board Three</Link>
                <br />
                <p>Board description here.</p>
              </td>
              <td className="num">13,900</td>
              <td className="num">543,990</td>
              <td className="latest-thread">
                <Link to='/thread'>Title of Latest Thread</Link>
                <p>Date of post by <Link to='/user'>User</Link></p>
              </td>
            </tr>
            
          </tbody>
        </table>
      </section>

        </div>
    );
}

export default SingleCategory;