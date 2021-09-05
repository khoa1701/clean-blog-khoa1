/* eslint-disable camelcase */
import '../App.css';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Navbar from '../components/nav-bar';
import Footer from '../components/Footer';
import Aboutbody from '../components/Body-about';

function About() {
  const headerData = useSelector((state) => state.allProducts.aboutheader[0]);
  const {
    page_heading, sub_heading,
  } = headerData;
  return (
    <>
      <Navbar />
      <Header page_heading={page_heading} sub_heading={sub_heading} />
      <Aboutbody />
      <Footer />
    </>
  );
}

export default About;
