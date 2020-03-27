import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getCatForums } from "../../../../actions/actions";
import CatBoardCard from './CatBoardCard';

function AllBoardsCard(props) {

  useEffect(() => {
    async function getCatChildren() {
      const result = await props.forums.map(id => {
            props.getCatForums(id);
      })
    //   return result;
    }
    getCatChildren();
    console.log(props)
    // getCatForums(props.id);
  }, []);

    return (
        <table>
          <th colspan="4">
            <Link to={`/category/${props.id}`}>{props.name}</Link>
            <span className='cat-description'>{props.description}</span>
          </th>
          <tbody>
            <tr className='tcat'>
              <td>Category</td>
              <td className="num">Thread</td>
              <td className="num">Posts</td>
              <td className="latest-thread">Last Posts</td>
            </tr>
            <CatBoardCard key={props.forums.id} name={props.forums.name} description={props.forums.description} />
          </tbody>
        </table>
    )
}

const mapStateToProps = state => {
  return {
    forums: state.forums
  };
};

export default connect(
  mapStateToProps,
  { getCatForums }
)(AllBoardsCard);

// export default AllBoardsCard;