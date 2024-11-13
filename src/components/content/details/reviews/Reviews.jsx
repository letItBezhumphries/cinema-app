/* eslint multiline-ternary: ["error", "never"] */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import './Reviews.scss';

const Reviews = (props) => {
  const { movie } = props;
  const [reviews] = useState(movie[4]);

  return (
    <>
      <div className="movie-reviews">
        <div className="div-title">Reviews {reviews.results.length > 0 ? reviews.results.length : ''}</div>
        {reviews.results.length ? (
          reviews.results.map((review) => (
            <div className="reviews" key={uuidv4()}>
              <h3>{review.author}</h3>
              <div>{review.content}</div>
            </div>
          ))
        ) : (
          <p>No reviews to show</p>
        )}
      </div>
    </>
  );
};

Reviews.propTypes = {
  movie: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, {})(Reviews);
