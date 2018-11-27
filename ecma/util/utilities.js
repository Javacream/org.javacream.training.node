function createStringSorter(field, asc){
    return (o1, o2) => {if (asc) {return o1[field].localeCompare(o2[field])} else{return o2[field].localeCompare(o1[field])} }
}

function createNumberSorter(field, asc){
    return (o1, o2) => {if (asc) {return o1[field] > o2[field]} else{return o2[field] > o1[field]} }
}

exports.sorter = {}
exports.sorter.string = createStringSorter
exports.sorter.number = createNumberSorter
