/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import Footer from './components/Footer';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      card: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      },
      cards: [],
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  // Rever a lógica das validações (true e false)
  areFieldsEmpty = () => {
    const { card } = this.state;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = card;

    if (cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0
      || cardAttr1.length === 0
      || cardAttr2.length === 0
      || cardAttr3.length === 0) {
      return true;
    }
    return false;
  }

  areAttrValid = () => {
    const { card } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = card;
    const min = 0;
    const max = 90;
    const maxTotal = 210;

    const total = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const isBiggerThan210 = total > maxTotal;

    if (isBiggerThan210) return true;
    if (cardAttr1 < min || cardAttr1 > max) return true;
    if (cardAttr2 < min || cardAttr2 > max) return true;
    if (cardAttr3 < min || cardAttr3 > max) return true;

    return false;
  }

  isValidateForm = () => {
    if (this.areFieldsEmpty()) {
      // console.log('Campos Inválidos!!!');
      return true;
    }
    if (this.areAttrValid()) {
      // console.log('Atributos Inválidos!!!');
      return true;
    }
    // console.log('Válido!!!');
    return false;
  };

  enableButtonSave = () => {
    if (!this.isValidateForm()) {
      this.setState({ isSaveButtonDisabled: false });
      return;
    }
    this.setState({ isSaveButtonDisabled: true });
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const { card } = this.state;
    const value = type === 'checkbox' ? target.checked : target.value;
    const newCard = card;
    newCard[name] = value;
    this.setState({
      card: newCard,
    }, () => this.enableButtonSave());
  }

  clearForm = () => {
    this.setState({
      card: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      },
      isSaveButtonDisabled: true,
    });
  }

  // Você já tem um Super Trunfo em seu baralho' é renderizado caso já exista uma carta Super Trunfo no baralho
  onSaveButtonClick = () => {
    const { card } = this.state;
    if (card.cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((prev) => ({
      cards: [card, ...prev.cards],
    }));
    this.clearForm();
  }

  render() {
    const { card, cards, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div className="wrapper">
        <Header />

        <main className="main">
          <div className="main-container">
            <Form
              { ...card }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
            />
            <Card { ...card } />
          </div>
          <div>
            {cards.map((cardItem) => (
              <Card key={ cardItem.cardName } { ...cardItem } />))}
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
