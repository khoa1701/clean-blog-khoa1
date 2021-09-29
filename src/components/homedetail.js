import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeSelectedProduct } from '../redux/actions/productActions';

export default function HomeDetail() {
  const { dataId } = useParams();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://js-post-api.herokuapp.com/api/posts/${id}`)
      .catch((err) => {
        console.log('Err: ', err);
      });
    setData(response.data);
  };
  useEffect(() => {
    if (dataId && dataId !== '') fetchProductDetail(dataId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dataId]);
  if (data) console.log(data);
  return (
    <>
      <header className="masthead" style={{ backgroundImage: `url(${data.imageUrl})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>
                  {data.author}
                </h1>
                <span className="subheading">
                  {data.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {data.description}
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
