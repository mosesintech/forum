import React from 'react';
import { Link } from 'react-router-dom';

function CatBoardCard(props) {
    return (
        <tr className='trow'>
        {console.log(props)}
              <td className="board-name">
                <Link to={'/forum'}>{props.name}</Link>
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
    )
}

export default CatBoardCard;