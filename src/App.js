import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import Footer from './components/Footer';

import './App.css';

const cards = [{
  cardName: 'JavaScript',
  cardDescription: 'Uma descrição qualquer!!!',
  cardAttr1: '90',
  cardAttr2: '80',
  cardAttr3: '70',
  cardImage: 'http://endereco-de-uma-image',
  cardRare: 'raro',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
}];

class App extends React.Component {
  onInputChange = () => {}

  onSaveButtonClick = () => {}

  render() {
    return (
      <div className="wrapper">
        <Header />

        <main className="main">
          <div className="main-container">
            <Form
              { ...cards[0] }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
            <Card />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
