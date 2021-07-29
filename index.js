const core = require('elementary-core');
const el = require('@nick-thompson/elementary');
const path = require('path');

let voices = [
    { gate: 0.0, freq: 440, 'v1' },
    { gate: 0.0, freq: 440, 'v2' },
    { gate: 0.0, freq: 440, 'v3' },
    { gate: 0.0, freq: 440, 'v4' },
];

let nextVoice = 0;

function synthVoice(voice) {
    return el.mul(0.2 * voice.gate, el.cycle(voice.freq));
}

core.on('load', function() {
    setInterval(function(){
        core.render(el.cycle(440 + Math.random() * 440))
    }, 500)
})
