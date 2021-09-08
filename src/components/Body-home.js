/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import {
  Link,
} from 'react-router-dom';
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
    const fullDate = (new Date({ createdAt }.createdAt));
    const monthNum = fullDate.getMonth();
    const months = ['January', 'February', 'March', 'Aprill', 'May', 'June', 'August', 'September', 'October', 'November', 'December'];
    const month = months[monthNum];
    const date = fullDate.getDate();
    const year = fullDate.getUTCFullYear();

    return (
      <div>
        <div key={id} className="post-preview">
          <Link to={`/api/${id}`}>
            <h2 className="post-title">{title}</h2>
            <h3 className="post-subtitle">{author}</h3>
          </Link>
          <p className="post-meta">
            Posted by
            {' '}
            {author}
            {' '}
            on
            {' '}
            {month}
            {' '}
            {date}
            ,
            {' '}
            {year}
          </p>
        </div>
        <hr className="my-4" />
      </div>
    );
  });
  return bodylist;
}

export default Homerender;
