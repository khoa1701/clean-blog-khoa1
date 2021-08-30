import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api/posts?_litmit=10&_page=1%C6%B0',
});

export default function Apidata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.get('/').then((res) => {
      const { datas } = res.datas;
      setData(datas);
    });
  }, []);
  /* eslint-disable no-console */
  console.log(data);
  return (
    <div>
      <h1>setdata</h1>
    </div>
  );
}
