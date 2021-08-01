import React, { useEffect, useState } from 'react';
// import App from './App';

function DrumPad({ keyCode, displayId, keyTrigger, url, power, displayChanger, volume }) {
    useEffect(() => {
        function keyPress(e) {
            if (e.keyCode === keyCode) {
                playSound();
            }
        }
        window.addEventListener('keydown', keyPress);
        return function cleanup() {
            window.removeEventListener('keydown', keyPress);
        };
    });

    const [active, setActive] = useState(false);

    function activeSwitch() {
        if (power) {
            setActive((prevState) => !prevState);
        }
    }

    function playSound() {
        const sound = document.getElementById(keyTrigger);
        if (power) {
            sound.volume = volume / 10;
            sound.play();

            displayChanger(displayId);
        }
    }

    return (
        <div
            className={active ? `pad-active drum-pad` : `drum-pad`}
            id={displayId}
            onClick={playSound}
            onMouseDown={activeSwitch}
            onMouseUp={activeSwitch}
        >
            <audio id={keyTrigger} src={url}></audio>
            {keyTrigger}
        </div>
    );
}

export default DrumPad;

// key={arr[index].keyCode}
// displayId={arr[index].id}
// onClick={playSound}
// keyTrigger={arr[index].keyTrigger}
// url={arr[index].url}
