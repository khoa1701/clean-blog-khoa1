/* eslint-disable no-alert */
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

function Contactrender() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Maximum 15 characters')
        .required('A name is required.'),
      email: Yup.string()
        .email('Email is not valid.')
        .required('An email is required.'),
      phone: Yup.number()
        .min(8, 'minimum 8 number')
        .max(11, 'Maximum 11 characters')
        .required('A phone number is required.'),
      message: Yup.string()
        .min(5, 'Mininum 5 characters')
        .max(500, 'Maximum 500 characters')
        .required('A message is required.'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <main className="mb-4">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <p>
              Want to get in touch?
              Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div className="my-5">
              <form
                data-sb-form-api-token="API_TOKEN"
                onSubmit={formik.handleSubmit}
              >
                <div className="form-floating">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <label htmlFor="name">
                    Name
                    {/* <input
                      name="name"
                      type="text"
                    /> */}
                  </label>
                  {formik.errors.name && formik.touched.name && (
                  <div style={{ color: 'red' }}>A name is required.</div>
                  )}
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    data-sb-validations="required,email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="email">
                    Email address
                    {/* <input
                      type="text"
                      name="email"
                    /> */}
                  </label>
                  {formik.errors.email && formik.touched.email && (
                  <div style={{ color: 'red' }}>
                    {formik.errors.email}
                  </div>
                  )}
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number..."
                    data-sb-validations="required"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="phone">
                    Phone Number
                    {/* <input
                      type="text"
                      name="phone"
                    /> */}
                  </label>
                  {formik.errors.phone && formik.touched.phone && (
                  <div style={{ color: 'red' }}>
                    {formik.errors.phone}
                  </div>
                  )}
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: '12rem' }}
                    data-sb-validations="required"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="message">
                    Message
                    {/* <input /> */}
                  </label>
                  {formik.errors.message && formik.touched.message && (
                  <p style={{ color: 'red' }}>
                    {formik.errors.message}
                  </p>
                  )}
                </div>
                <br />
                <button
                  className="btn btn-primary text-uppercase"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contactrender;
