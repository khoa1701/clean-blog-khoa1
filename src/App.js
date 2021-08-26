/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import './App.css';
import Header from './View/components/[Home]Header';
import Navbar from './View/components/nav-bar';
import Footer from './View/components/Footer';
import Homebody from './View/components/[body]Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Homebody />
      <Footer />
    </div>
  );
}

export default App;
