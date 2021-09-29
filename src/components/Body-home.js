import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { setApi } from '../redux/actions/productActions';
import Pagination from './Pagination';

export default function Homebody() {
  const [staff, setStaff] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 5,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _limit: 5,
    _page: 1,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const paramString = queryString.stringify(filters);
    const api = axios.create({
      baseURL: `https://js-post-api.herokuapp.com/api/posts?${paramString}`,
    });
    api.get('/').then((res) => {
      setStaff(res?.data);
      setPagination(res.data.pagination);
    });
  }, [filters]);
  dispatch(setApi(staff));
  const bodydata = useSelector((state) => state.apidata.api.data);
  let bodylist = '';
  if (bodydata) {
    bodylist = bodydata.map((data) => {
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
            <Link to={`post/${id}`}>
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
  }
  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {bodylist}
            <Pagination
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
