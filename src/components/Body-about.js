import React from 'react';
import { useSelector } from 'react-redux';

function Aboutrender() {
  const bodydata = useSelector((state) => state.allProducts.bodyabout[0]);
  const {
    text,
    text2,
    text3,
  } = bodydata;
  return (
    <main className="mb-4">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <p>{text}</p>
            <p>{text2}</p>
            <p>{text3}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Aboutrender;
