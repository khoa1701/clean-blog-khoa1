/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

function Aboutbody() {
  const bodydata = useSelector((state) => state.allProducts.aboutbody);
  const bodylist = bodydata.map((data) => {
    const {
      text_first,
      text_secound,
      text_third,
    } = data;
    return (
      <div>
        <main className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <p>{text_first}</p>
                <p>{text_secound}</p>
                <p>{text_third}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  });
  return bodylist;
}

export default Aboutbody;
