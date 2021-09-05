/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/named */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setApi } from '../actions/productActions';
import Homerender from '../../components/Body-home';

const api = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api/posts?_litmit=10&_page=1%C6%B0',
});

export default function Homebody() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get('/').then((res) => {
      const { data } = res.data;
      setData(data);
    });
  }, []);
  dispatch(setApi(data));
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <Homerender />
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
