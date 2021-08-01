import React, { useState } from 'react';
import BankBtn from './BankBtn';
import { bankOne, bankTwo } from './database';
import Display from './Display';
import DrumPad from './DrumPad';
import PowerBtn from './PowerBtn';
import VolumeBtn from './VolumeBtn';

function App() {
    const [displayId, setDisplayId] = useState(String.fromCharCode(160));
    const [power, setPower] = useState(true);
    const [bankContent, setBankContent] = useState(bankOne);
    const [volume, setVolume] = useState(5);

    function powerSwitch() {
        if (power) {
            setPower((prevState) => !prevState);
            setDisplayId(String.fromCharCode(160));
            setBankContent(bankOne);
        } else {
            setPower((prevState) => !prevState);
        }
    }

    function bankSwitch() {
        if (!power) {
            return;
        }
        if (bankContent === bankOne) {
            setBankContent(bankTwo);
        } else {
            setBankContent(bankOne);
        }
    }

    function displayChanger(_displayId) {
        setDisplayId(_displayId);
    }

    function volumeAdjuster(event) {
        const id = event.currentTarget.id;
        if (!power) {
            return;
        }
        if (id === 'volumeDown' && volume > 0) {
            setVolume((prevState) => prevState - 1);
        } else if (id === 'volumeUp' && volume < 10) {
            setVolume((prevState) => prevState + 1);
        }
    }

    const drumPad = bankContent.map((content, index, arr) => {
        return (
            <DrumPad
                key={arr[index].keyCode}
                keyCode={arr[index].keyCode}
                displayId={arr[index].id}
                keyTrigger={arr[index].keyTrigger}
                url={arr[index].url}
                power={power}
                displayChanger={displayChanger}
                volume={volume}
            />
        );
    });

    return (
        <div id="container">
            <h1>DRUM MACHINE</h1>
            <div id="drum-machine">
                <div id="left">
                    <div id="drum-pads"> {drumPad}</div>
                </div>
                <div id="right">
                    <div id="buttons">
                        <PowerBtn onClick={powerSwitch} power={power} />
                        <BankBtn onClick={bankSwitch} bankContent={bankContent} power={power} />
                    </div>
                    <VolumeBtn volume={volume} power={power} onClick={volumeAdjuster} />
                    <Display displayId={displayId} />
                    <h3 className="logo">RYOINCIONG</h3>
                </div>
            </div>
        </div>
    );
}

export default App;
