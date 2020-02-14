import React from 'react';

function AllBoards() {
    return (
        <section>
        <table>
          <th colspan="4">Forum</th>
          <tbody>
            <tr className='tcat'>
              <td>Category</td>
              <td>Thread</td>
              <td>Posts</td>
              <td>Last Posts</td>
            </tr>
            <tr className='trow'>
              <td>
                Board One
                <br />
                <p>Board description here.</p>
              </td>
              <td>13,900</td>
              <td>543,990</td>
              <td>Title of Latest Thread</td>
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