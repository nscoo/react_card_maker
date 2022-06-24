import React from 'react';
import { memo } from 'react';
import styles from './button.module.css';

const Button = memo(({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
));

export default Button;
