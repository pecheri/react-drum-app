import React, { useState } from 'react';

function VolumeBtn({ volume, onClick, power }) {
    const [active, setActive] = useState(false);
    const style = volume === 0 ? { color: 'red' } : { color: '#00ff77' };

    function activeSwitch() {
        if (power) {
            setActive((prevState) => !prevState);
        }
    }

    return (
        <div className="volumes">
            <p className="volume-p">Volume</p>
            <div className="volume-btns">
                <button
                    id="volumeDown"
                    onMouseDown={activeSwitch}
                    onMouseUp={activeSwitch}
                    onClick={onClick}
                    className={active ? `volume-active` : ``}
                >
                    ▼
                </button>
                <p style={style}>{volume}</p>
                <button
                    id="volumeUp"
                    onClick={onClick}
                    onMouseDown={activeSwitch}
                    onMouseUp={activeSwitch}
                    className={active ? `volume-active` : ``}
                >
                    ▲
                </button>
            </div>
        </div>
    );
}

export default VolumeBtn;
