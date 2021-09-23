import React from 'react';
import PropTypes from 'prop-types';
import image from './assets/img/post-bg.jpg';

export default function PostHeader({ postheading, pageheading, meta }) {
  return (
    <div>
      <header className="masthead" style={{ backgroundImage: `url(${image})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-heading">
                <h1>{postheading}</h1>
                <h2 className="subheading">{pageheading}</h2>
                <span className="meta">
                  Posted by
                  <a href="#!">Start Bootstrap</a>
                  {meta}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

PostHeader.propTypes = {
  postheading: PropTypes.string.isRequired,
  pageheading: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
};
