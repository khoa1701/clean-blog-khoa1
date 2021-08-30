/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

function Homebody() {
  const bodydata = useSelector((state) => state.allProducts.homebody);
  const bodylist = bodydata.map((data) => {
    const {
      post_title,
      post_subtitle,
      post_meta,
    } = data;
    return (
      <div>
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">{post_title}</h2>
            <h3 className="post-subtitle">{post_subtitle}</h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            {post_meta}
          </p>
        </div>
        <hr className="my-4" />
      </div>
    );
  });
  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          {bodylist}
          <div className="d-flex justify-content-end mb-4">
            <a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebody;
