// var theArgs = process.argv.slice(2);

// var rgb = {
//     r: theArgs[0],
//     g: theArgs[1],
//     b: theArgs[2]
// };

// console.log(rgb);

var luminosity = function(red, green, blue) {
    // console.log("rgb:", red, green, blue);
    var lumin = (0.2126 * red) + (0.7152 * green) + (0.0722 * blue);
    var shade = lumin <= 154 ?
        'dark' : 'light';
    // console.log(shade);

    return lumin;
}

// var thisLumin = luminosity(rgb.r, rgb.g, rgb.b);

// var shade = thisLumin <= 154 ?
//     'dark' : 'light';

// console.log("luminosity:", luminosity, "shade:", shade);

module.exports = {
    luminosity: luminosity
};