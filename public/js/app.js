let Rx = require("rx-lite")
Rx.DOM = require("rx-dom")
require("./utils/viewport.js")()
//put in two lines because webpack will strip this
let gridGenerator = require("gridGenerator.js")
gridGenerator()

// resposive menu handler
// let mobileMneu = require('./utils/mobileMenu.js')();

accordion()
