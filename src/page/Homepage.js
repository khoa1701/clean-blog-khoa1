/* eslint-disable camelcase */
/* eslint-disable no-console */
import '../App.css';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/nav-bar';
import Footer from '../components/Footer';
import Homebody from '../redux/api/api';
import Aboutrender from '../components/Body-about';
import Detailrender from '../components/body-homedetail';
import Contactrender from '../components/body-contact';
import PostHeader from '../components/PostHeader';
import Postrender from '../components/body-post';

function Home() {
  const headerData = useSelector((state) => state.allProducts.homeheader[0]);
  const {
    page_heading, sub_heading,
  } = headerData;
  const postData = useSelector((state) => state.allProducts.postheader[0]);
  const {
    post_heading, meta,
  } = postData;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <Header page_heading={page_heading} sub_heading={sub_heading} />
            <Aboutrender />
          </Route>
          <Route exact path="/contact">
            <Header page_heading={page_heading} sub_heading={sub_heading} />
            <Contactrender />
          </Route>
          <Route path="/:id">
            <Detailrender />
          </Route>
          <Route exact path="/">
            <Header page_heading={page_heading} sub_heading={sub_heading} />
            <Homebody />
          </Route>
          <Route exact path="/post">
            <PostHeader post_heading={post_heading} page_heading={page_heading} meta={meta} />
            <Postrender />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Home;
