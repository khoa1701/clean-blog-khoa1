// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setApi } from '../redux/actions/productActions';
// import { api1 } from '../redux/api';

// function Postrender() {
//   const [staff, setStaff] = useState([]);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     api1.get('/').then((res) => {
//       setStaff(res?.data);
//     });
//   }, []);
//   dispatch(setApi(staff));
//   const bodydata = useSelector((state) => state.apidata.api.data);
//   const bodylist = bodydata?.map((data) => {
//     const {
//       title,
//       author,
//       description,
//       imageUrl,
//     } = data;
//     return (
//       <article className="mb-4">
//         <div className="container px-4 px-lg-5">
//           <div className="row gx-4 gx-lg-5 justify-content-center">
//             <div className="col-md-10 col-lg-8 col-xl-7">
//               <p>{description}</p>
//               <p>{description}</p>
//               <p>{description}</p>
//               <p>{description}</p>
//               <p>{description}</p>
//               <h2 className="section-heading">{title}</h2>
//               <p>{description}</p>
//               <p>{description}</p>
//               <blockquote className="blockquote">{description}</blockquote>
//               <p>{description}</p>
//               <h2 className="section-heading">{title}</h2>
//               <p>{description}</p>
//               <a href="#!">
//                 <img className="img-fluid" src={imageUrl} alt="..." />
//               </a>
//               <span className="caption text-muted">{description}</span>
//               <p>{description}</p>
//               <p>{description}</p>
//               <p>
//                 Placeholder text by
//                 <a href="http://spaceipsum.com/">{title}</a>
//                 &middot; Images by
//                 <a href="https://www.flickr.com/photos/nasacommons/">{author}</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </article>
//     );
//   });
//   return bodylist;
// }

// export default Postrender;
