var request = require('request');

var colorName = process.argv[2];

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json',
    function(error, response, body) {
        var parsedJson = JSON.parse(body);
        printRGB(parsedJson, colorName);
    });

var printRGB = function(webColors, color) {
    var foundColor = webColors.filter(function(c) {
        return c.name.toLowerCase() === color.toLowerCase()
    })[0];
    console.log(foundColor);
}