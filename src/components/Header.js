/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropType from 'prop-types';
import image from './assets/img/home-bg.jpg';

function Header({ page_heading, sub_heading }) {
  return (
    <>
      <header className="masthead" style={{ backgroundImage: `url(${image})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>
                  {page_heading}
                </h1>
                <span className="subheading">
                  {sub_heading}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

Header.propType = {
  page_heading: PropType.string.isRequired,
  sub_heading: PropType.string.isRequired,
};

export default Header;
