import './App.css';
import Header from '../header/Header';
// import Nav from '../nav/Nav';
import Main from '../main/Main';
// import Footer from '../footer/Footer';
import React from 'react';

class App extends React.Component {

  render() {
    let nav = this.props.nav;
    let navLeft = this.props.navLeft;
    return (

      <div className="App">
        <Header title="New site" nav={nav} navLeft={navLeft} />
        {/* <Nav nav={nav} /> */}
        <Main />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;