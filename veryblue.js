var blue = require('./blue.js');
var ColorUtil = require('./lumin.js');

var theArgs = process.argv.slice(2);

var rgb = {
    r: theArgs[0],
    g: theArgs[1],
    b: theArgs[2]
};

var lumin = ColorUtil.luminosity(rgb.r, rgb.g, rgb.b);

console.log("lumin", lumin);