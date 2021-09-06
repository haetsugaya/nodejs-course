// CommonJS, every file is module (by default)
// Modules = Encapsulated Code (only share minimum)
// module.exports => What you share

const names = require('./4-names')
const sayHi = require('./5-utils')

// alternative way to get shared data
const stuff = require('./6-alternative-flavor')
require('./7-mind-grenade')

// console.log(names)

sayHi(`susan`)
sayHi(names.john)
sayHi(names.peter)

