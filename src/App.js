import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import Footer from './components/Footer';

import './App.css';

// const cards = [{
//   cardName: 'JavaScript',
//   cardDescription: 'Uma descrição qualquer!!!',
//   cardAttr1: '90',
//   cardAttr2: '80',
//   cardAttr3: '70',
//   cardImage: 'http://endereco-de-uma-image',
//   cardRare: 'raro',
//   cardTrunfo: false,
//   hasTrunfo: false,
//   isSaveButtonDisabled: true,
// }];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = () => {}

  render() {
    return (
      <div className="wrapper">
        <Header />

        <main className="main">
          <div className="main-container">
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
            <Card { ...this.state } />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
