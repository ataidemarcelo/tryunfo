import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import Footer from './components/Footer';
import cardsStoraged from './mock/data';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      card: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      },
      cards: [...cardsStoraged],
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      filters: {
        nameFilter: '',
        rareFilter: 'todas',
        trunfoFilter: false,
      },
    };
  }

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

  isValidForm = () => {
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
    if (!this.isValidForm()) {
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

  onSaveButtonClick = () => {
    const { card } = this.state;
    if (card.cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((prev) => ({
      cards: [...prev.cards, card],
    }));
    this.clearForm();
  }

  removeCard = (cardName, trunfo) => {
    const { cards } = this.state;
    if (trunfo) {
      this.setState({ hasTrunfo: false });
    }
    this.setState({
      cards: cards.filter((item) => item.cardName !== cardName),
    });
  }

  handleChange = ({ target }) => {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    const { filters } = this.state;
    const newFilters = filters;
    newFilters[name] = value;
    this.setState({ filters: newFilters });
  }

  render() {
    const { card, cards, hasTrunfo, isSaveButtonDisabled, filters } = this.state;
    const { nameFilter, rareFilter, trunfoFilter } = filters;
    return (
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="main-container">
            <div className="form-container">
              <Form
                { ...card }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
                hasTrunfo={ hasTrunfo }
                isSaveButtonDisabled={ isSaveButtonDisabled }
              />
            </div>
            <div className="card-container">
              <Card { ...card } />
            </div>
          </div>
          <div className="filter-container">
            <h2>Todas as Cartas!</h2>
            <p>Filtros de busca:</p>
            <input
              className="block"
              data-testid="name-filter"
              name="nameFilter"
              type="text"
              placeholder="Nome da carta"
              onChange={ this.handleChange }
              disabled={ trunfoFilter }
            />
            <select
              className="block"
              data-testid="rare-filter"
              name="rareFilter"
              value={ rareFilter }
              onChange={ this.handleChange }
              disabled={ trunfoFilter }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
            <div>
              <input
                data-testid="trunfo-filter"
                type="checkbox"
                name="trunfoFilter"
                onChange={ this.handleChange }
              />
              <span>
                Super Trybe Trunfo
              </span>
            </div>
          </div>
          <div className="card-list-container">
            {cards
              .filter((item) => (rareFilter === 'todas'
                ? true
                : item.cardRare === rareFilter))
              .filter((item) => (trunfoFilter
                ? item.cardTrunfo === trunfoFilter
                : true
              ))
              .filter((item) => item.cardName
                .toLowerCase()
                .includes(nameFilter.toLowerCase()))
              .map((cardItem) => (
                <div className="card-list" key={ cardItem.cardName }>
                  <Card { ...cardItem } />
                  <button
                    data-testid="delete-button"
                    type="button"
                    onClick={ () => this.removeCard(
                      cardItem.cardName,
                      cardItem.cardTrunfo,
                    ) }
                  >
                    Excluir
                  </button>
                </div>
              ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
