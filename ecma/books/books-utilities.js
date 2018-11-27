let util = require('../util/utilities')

exports.isbnAscending = util.sorter.string("isbn", true)
exports.isbnDescending = util.sorter.string("isbn", false)
exports.titleAscending = util.sorter.string("title", true)
exports.titleDescending = util.sorter.string("title", false)
exports.priceAscending = util.sorter.number("price", true)
exports.priceDescending = util.sorter.number("price", false)
