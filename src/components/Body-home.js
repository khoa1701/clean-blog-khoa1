/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

function Homerender() {
  const bodydata = useSelector((state) => state.apidata.api);
  const bodylist = bodydata.map((data) => {
    const {
      id,
      title,
      author,
      createdAt,
    } = data;
    return (
      <div>
        <div key={id} className="post-preview">
          <a href="post.html">
            <h2 className="post-title">{title}</h2>
            <h3 className="post-subtitle">{author}</h3>
          </a>
          <p className="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            {createdAt}
          </p>
        </div>
        <hr className="my-4" />
      </div>
    );
  });
  return bodylist;
}

export default Homerender;
