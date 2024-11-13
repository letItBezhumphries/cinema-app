import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IMAGE_URL } from '../../../../services/movies.service';
import PropTypes from 'prop-types';

import './Media.scss';

const Media = (props) => {
  const { movie } = props;
  const [images] = useState(movie[2]);
  const [videos] = useState(movie[3]);

  return (
    <>
      <div className="media">
        <div>
          <div className="media-title">Watch Trailer</div>
          <div className="media-videos">
            {videos.results.map((video) => (
              <div className="video" key={video.key}>
                <iframe
                  title="Avengers"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="media-title">Photos ({images.posters.length})</div>
          <div className="media-images">
            {images.posters.map((image, i) => (
              <div
                key={i}
                className="image-cell"
                style={{
                  backgroundImage: `url(${IMAGE_URL}${image.file_path})`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Media.propTypes = {
  movie: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, {})(Media);
