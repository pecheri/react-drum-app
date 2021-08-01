import React from 'react';

function PowerBtn({ onClick, power }) {
    const style = power ? { border: '2px solid #00ff77' } : { border: '2px solid #ff2424' };

    return (
        <div id="button">
            <p>Power</p>
            <button onClick={onClick} style={style}>
                {power ? `on` : `off`}
            </button>
        </div>
    );
}

export default PowerBtn;
