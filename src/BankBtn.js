import React from 'react';
import { bankOne } from './database';

function BankBtn({ onClick, bankContent, power }) {
    const style = !power ? { border: '2px solid #9e9e9e' } : { border: '2px solid #00ff77' };

    return (
        <div id="button">
            <p>Bank</p>
            <button onClick={onClick} style={style}>
                {bankContent === bankOne ? `1` : `2`}
            </button>
        </div>
    );
}

export default BankBtn;
