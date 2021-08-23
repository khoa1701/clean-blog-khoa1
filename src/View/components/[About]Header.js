import React from 'react';
import image from '../assets/img/about-bg.jpg';

export default function AboutHeader() {
  return (
    <div>
      <header className="masthead" style={{ backgroundImage: `url(${image})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>About Me</h1>
                <span className="subheading">This is what I do.</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
