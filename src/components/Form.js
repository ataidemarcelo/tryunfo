import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Form.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form-container">
        <h2>Adicionar nova Carta</h2>
        <form className="form">
          <label htmlFor="name-input">
            Nome:
            <input
              className="block"
              data-testid="name-input"
              type="text"
              placeholder="Nome"
              name="cardName"
              id="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Descrição:
            <textarea
              className="block"
              data-testid="description-input"
              type="text"
              placeholder="Digite uma descrição..."
              name="cardDescription"
              id="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label className="attr" htmlFor="attr1-input">
            Attr01:
            <input
              className="block"
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label className="attr" htmlFor="attr2-input">
            Attr02:
            <input
              className="block"
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label className="attr" htmlFor="attr3-input">
            Attr03:
            <input
              className="block"
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            Imagem:
            <input
              className="block"
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rate-input">
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              id="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <div className="trunfo-input">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            <span>
              Super Trybe Trunfo
            </span>
          </div>

          <button
            className="btn"
            data-testid="save-button"
            type="button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
