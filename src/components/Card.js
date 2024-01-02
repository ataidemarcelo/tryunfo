import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Card.css';

class Card extends Component {
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
    } = this.props;
    return (
      <div className="card">
        <div className="card-title">
          <h2 data-testid="name-card">{ cardName }</h2>
        </div>
        <div className="card-image">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>

        <div className="card-description">
          <p data-testid="description-card">{ cardDescription }</p>
        </div>

        <div className="card-attr-container">
          <div className="card-attr">
            <p>
              Attr01.........................
            </p>
            <span data-testid="attr1-card">
              { cardAttr1 }
            </span>
          </div>
          <div className="card-attr">
            <p>
              Attr02.........................
            </p>
            <span data-testid="attr2-card">
              { cardAttr2 }
            </span>
          </div>
          <div className="card-attr">
            <p>
              Attr03.........................
            </p>
            <span data-testid="attr3-card">
              { cardAttr3 }
            </span>
          </div>
        </div>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        {/* <p>{hasTrunfo }</p> */}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
};

export default Card;
