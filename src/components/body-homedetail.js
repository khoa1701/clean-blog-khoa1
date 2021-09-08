/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import {
  useParams,
} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  // removeSelectedProduct,
} from '../redux/actions/productActions';

function Detailrender() {
  const { apiId } = useParams();
  const detail = useSelector((state) => state.apidata.api);
  const {
    title,
    description,
  } = detail;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://js-post-api.herokuapp.com/api/${id}`)
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(selectedProduct(response.data));
  };

  // useEffect(() => {
  //   if (apiId && apiId !== '') fetchProductDetail(apiId);
  //   return () => {
  //     dispatch(removeSelectedProduct());
  //   };
  // }, [apiId]);
  return (
    <article className="mb-4">
      {Object.keys(detail).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h2 className="section-heading">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default Detailrender;
