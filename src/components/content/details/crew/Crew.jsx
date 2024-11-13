import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { IMAGE_URL } from '../../../../services/movies.service';
import PropTypes from 'prop-types';
import './Crew.scss';

const Crew = (props) => {
  const { movie } = props;
  const [credits] = useState(movie[1]);
  return (
    <>
      <div className="cast">
        <div className="div-title">Crew</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          {credits.crew.map((crewMember) => (
            <tbody key={uuidv4()}>
              <tr>
                <td>
                  <img src={crewMember.profile_path ? `${IMAGE_URL}${crewMember.profile_path}` : 'http://placehold.it/54x81'} alt="" />
                </td>
                <td>{crewMember.name}</td>
                <td>{crewMember.department}</td>
                <td>{crewMember.job}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

Crew.propTypes = {
  movie: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, {})(Crew);
