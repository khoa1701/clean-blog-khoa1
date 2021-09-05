/* eslint-disable camelcase */
import '../App.css';
import { useSelector } from 'react-redux';
import PostHeader from '../components/PostHeader';
import Navbar from '../components/nav-bar';
import Footer from '../components/Footer';

function Home() {
  const headerData = useSelector((state) => state.allProducts.homeheader[0]);
  const {
    post_heading, page_heading, meta,
  } = headerData;
  return (
    <>
      <Navbar />
      <PostHeader post_heading={post_heading} page_heading={page_heading} meta={meta} />
      <Footer />
    </>
  );
}

export default Home;
