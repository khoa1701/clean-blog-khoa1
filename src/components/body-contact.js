/* eslint-disable no-undef */
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
        .min(2, 'Mininum 2 characters')
        .max(15, 'Maximum 15 characters')
        .required('Required!'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      phone: Yup.number()
        .min(8, 'minimum 8 number')
        .max(11, 'Maximum 11 characters')
        .required('Required!'),
      message: Yup.string()
        .min(5, 'Mininum 5 characters')
        .max(500, 'Maximum 500 characters')
        .required('Required!'),
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
                  />
                  <label htmlFor="name">
                    Name
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </label>
                  {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">
                    Email address
                    <input
                      type="text"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </label>
                  {formik.errors.email && formik.touched.email && (
                  <div className="invalid-feedback" data-sb-feedback="name:required">
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
                  />
                  <label htmlFor="phone">
                    Phone Number
                    <input
                      type="text"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                  </label>
                  {formik.errors.phone && formik.touched.phone && (
                  <p>{formik.errors.phone}</p>
                  )}
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style={{ height: '12rem' }}
                    data-sb-validations="required"
                  />
                  <label htmlFor="message">
                    Message
                    <input
                      type="text"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                    />
                  </label>
                  {formik.errors.message && formik.touched.message && (
                  <p>{formik.errors.message}</p>
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
