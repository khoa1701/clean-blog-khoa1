import React from 'react';
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
import Homebody from '../components/Body-home';
import Contactrender from '../components/body-contact';
import Aboutrender from '../components/Body-about';
import PostHeader from '../components/PostHeader';
import HomeDetail from '../components/homedetail';
import Postrender from '../components/body-post';

function Home() {
  const headerData = useSelector((state) => state.allProducts.homeheader[0]);
  const {
    pageHeading, subHeading,
  } = headerData;
  const Postheader = useSelector((state) => state.allProducts.postheader[0]);
  const {
    postheading, postheading1, meta,
  } = Postheader;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <Header pageheading={pageHeading} subheading={subHeading} />
            <Aboutrender />
          </Route>
          <Route path="/contact">
            <Header pageheading={pageHeading} subheading={subHeading} />
            <Contactrender />
          </Route>
          <Route exact path="/">
            <Header pageheading={pageHeading} subheading={subHeading} />
            <Homebody />
          </Route>
          <Route exact path="/post">
            <PostHeader postheading={postheading} pageheading={postheading1} meta={meta} />
            <Postrender />
          </Route>
          <Route path="/post/:dataId" component={HomeDetail} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Home;
