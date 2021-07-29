const core = require('elementary-core');
const el = require('@nick-thompson/elementary');

core.on('load', function() {
    setInterval(function(){
        core.render(el.cycle(440 + Math.random() * 440))
    }, 500)
})
