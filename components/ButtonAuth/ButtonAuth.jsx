import React from 'react';
import style from './button.module.css';

export default function ButtonAuth(props) {
  const handleSubmit = () => {};
  return (
    <a href="../../index.html">
      <button className={`${style.btnWarning} btn mb-2`} onClick={handleSubmit}>
        {props.Button}
      </button>
    </a>
  );
}
