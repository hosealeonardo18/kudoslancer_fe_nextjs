import React, { useState } from 'react';
import style from './button.module.css';

export default function ButtonAuth(props) {
  return (
    <button className={`${style.btnWarning} btn mb-2`} onClick={props.click}>
      {props.Button}
    </button>
  );
}
