/* eslint multiline-ternary: ["error", "never"] */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from '../../../redux/actions/movies';
import { IMAGE_URL } from '../../../services/movies.service';
import { pathURL } from '../../../redux/actions/routes';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Details.scss';
import Rating from '../rating/Rating';
import Spinner from '../../spinner/Spinner';
import Tabs from './tabs/Tabs';
import Overview from './overview/Overview';
import Reviews from './reviews/Reviews';
import Media from './media/Media';
import Crew from './crew/Crew';

const Details = (props) => {
  const { movie, getMovieDetails, match, pathURL } = props;
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    pathURL(match.path, match.url);
    if (movie.length === 0) {
      getMovieDetails(id);
    }
    setDetails(movie[0]);
    // eslint-disable-next-line
  }, [id, movie]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        details && (
          <div className="movie-container">
            <div
              className="movie-bg"
              style={{
                backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})`
              }}
            ></div>
            <div className="movie-overlay"></div>
            <div className="movie-details">
              <div className="movie-image">
                <img src={`${IMAGE_URL}${details.poster_path}`} alt="" />
              </div>
              <div className="movie-body">
                <div className="movie-overview">
                  <div className="title">
                    {details.title} <span>{details.release_date}</span>
                  </div>
                  <div className="movie-genres">
                    <ul className="genres">
                      {details.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rating">
                    <Rating className="rating-stars" rating={details.votes_average} totalStars={10} />
                    &nbsp;
                    <span>{details.votes_average}</span> <p>({details.vote_count}) reviews</p>
                  </div>
                  <Tabs>
                    <div label="Overview">
                      <Overview />
                    </div>
                    <div label="Crew">
                      <Crew />
                    </div>
                    <div label="Media">
                      <Media />
                    </div>
                    <div label="Reviews">
                      <Reviews />
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

Details.propTypes = {
  getMovieDetails: PropTypes.func.isRequired,
  movie: PropTypes.array.isRequired,
  pathURL: PropTypes.func,
  match: PropTypes.object
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, { getMovieDetails, pathURL })(Details);
