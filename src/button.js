import React from 'react';
import './index.css';

const Button = ({ value, clickHandler }) => {

    return (
            <button type="submit" onClick={() => clickHandler(value)}>{value}
            </button>
    )
}

export default Button;