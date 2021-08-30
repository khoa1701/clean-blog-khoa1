/* eslint-disable camelcase */
/* eslint-disable no-console */
import '../App.css';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navbar from '../components/nav-bar';
import Footer from '../components/Footer';
import Homebody from '../components/Bodyhome';

function Home() {
  const headerData = useSelector((state) => state.allProducts.homeheader[0]);
  const {
    page_heading, sub_heading,
  } = headerData;
  return (
    <>
      <Navbar />
      <Header page_heading={page_heading} sub_heading={sub_heading} />
      <Homebody />
      <Footer />
    </>
  );
}

export default Home;
