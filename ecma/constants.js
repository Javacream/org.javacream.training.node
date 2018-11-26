'use strict'
const message = ["Hugo"]
Object.freeze(message) //freeze, preventExtension, seal
//message[0] = "Emil" //Im strict mode fehler
console.log(message[0])
