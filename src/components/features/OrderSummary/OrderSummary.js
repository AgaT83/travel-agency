import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';

const OrderSummary = ({cost, options}) => (
  <h2 className={ styles.component}>Total: <strong>{formatPrice(calculateTotal(cost, options))}</strong></h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
