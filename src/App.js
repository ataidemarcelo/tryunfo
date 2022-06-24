import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import Footer from './components/Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />

        <main className="main">
          <div className="main-container">
            <Form />
            <Card />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
