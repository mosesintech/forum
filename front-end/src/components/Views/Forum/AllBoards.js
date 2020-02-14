import React from 'react';
import {Link} from 'react-router-dom';

function AllBoards() {
    return (
        <section>
        <table>
          <th colspan="4"><Link to ='/category'>Forum</Link></th>
          <tbody>
            <tr className='tcat'>
              <td>Category</td>
              <td>Thread</td>
              <td>Posts</td>
              <td>Last Posts</td>
            </tr>
            <tr className='trow'>
              <td>
                <Link to='/forum'>Board One</Link>
                <br />
                <p>Board description here.</p>
              </td>
              <td>13,900</td>
              <td>543,990</td>
              <td><Link to='/thread'>Title of Latest Thread</Link></td>
            </tr>
            <tr className='trow'>
              <td>
                Board Two
                <br />
                <p>Board description here.</p>
              </td>
              <td>13,900</td>
              <td>543,990</td>
              <td>Title of Latest Thread</td>
            </tr>
            <tr className='trow'>
              <td>
                Board Three
                <br />
                <p>Board description here.</p>
              </td>
              <td>13,900</td>
              <td>543,990</td>
              <td>Title of Latest Thread</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
}

export default AllBoards;