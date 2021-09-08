/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
import React from 'react';
import { useSelector } from 'react-redux';

function Aboutrender() {
  const bodydata = useSelector((state) => state.apidata.api[0]);
  const {
    id,
    description,
  } = bodydata;
  return (
    <main className="mb-4">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7" key={id}>
            <p>{description}</p>
            <p>{description}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Aboutrender;
