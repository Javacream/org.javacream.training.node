function createStringSorter(field, asc){
    return (o1, o2) => {if (asc) {return o1[field].localeCompare(o2[field])} else{return o2[field].localeCompare(o1[field])} }
}

function createNumberSorter(field, asc){
    return (o1, o2) => {if (asc) {return o1[field] > o2[field]} else{return o2[field] > o1[field]} }
}

exports.isbnAscending = createStringSorter("isbn", true)
exports.isbnDescending = createStringSorter("isbn", false)
exports.titleAscending = createStringSorter("title", true)
exports.titleDescending = createStringSorter("title", false)
exports.priceAscending = createNumberSorter("price", true)
exports.priceDescending = createNumberSorter("price", false)
