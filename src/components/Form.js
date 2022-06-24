import React, { Component } from 'react';

import '../styles/Form.css';

class Form extends Component {
  render() {
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
              name="name-input"
              id="name-input"
            />
          </label>

          <label htmlFor="description-input">
            Descrição:
            <textarea
              className="block"
              data-testid="description-input"
              type="text"
              placeholder="Digite uma descrição..."
              name="description-input"
              id="description-input"
            />
          </label>

          <label className="attr" htmlFor="attr1-input">
            Attr01:
            <input
              className="block"
              data-testid="attr1-input"
              type="number"
              name="attr1-input"
              id="attr1-input"
            />
          </label>

          <label className="attr" htmlFor="attr2-input">
            Attr02:
            <input
              className="block"
              data-testid="attr2-input"
              type="number"
              name="attr2-input"
              id="attr2-input"
            />
          </label>

          <label className="attr" htmlFor="attr3-input">
            Attr03:
            <input
              className="block"
              data-testid="attr3-input"
              type="number"
              name="attr3-input"
              id="attr3-input"
            />
          </label>

          <label htmlFor="image-input">
            Imagem:
            <input
              className="block"
              data-testid="image-input"
              type="text"
              name="image-input"
              id="image-input"
            />
          </label>

          <label htmlFor="rate-input">
            Raridade
            <select
              data-testid="rare-input"
              name="rare-input"
              id="rare-input"
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
              name="trunfo-input"
              id="trunfo-input"
            />
            <span>
              Super Trybe Trunfo
            </span>
          </div>

          <button
            className="btn"
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
