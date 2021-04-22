import React from 'react';
import './BuyButton.css';
import { Link } from 'react-router-dom';
import { PayPalBtn } from '../../images/products';

function BuyButton(props) {

  return (
      <div className="btn-buy-paypal">
        <Link to={props.route}>
            <p>Comprar</p>
            <img src={PayPalBtn} alt={"buy"} />
        </Link>
      </div>
  );
}

export default BuyButton;
