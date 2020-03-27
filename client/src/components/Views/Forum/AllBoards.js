import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getCategories } from "../../../actions/actions";
import AllBoardsCard from './ForumViewsCards/AllBoardsCard';

function AllBoards(props) {

  useEffect(() => {
    async function getLandingData() {
      const result = await props.getCategories();
      // return result;
    }
    getLandingData();
  }, []);

    return (
        <section>
          {props.categories.map(category => (
            <AllBoardsCard
              key={category.id}
              id={category.id}
              name={category.name}
              description={category.description}
              forums={category.forums}
              // fids={category.forumIds}
            />
          ))}
        </section>
    );
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(
  mapStateToProps,
  { getCategories }
)(AllBoards);