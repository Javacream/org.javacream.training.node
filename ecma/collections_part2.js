function demo(){
    let postalCodes = new Map()
    let munich = [81371, 81373, 81697]
    let berlin = [30333, 30111, 30789, 30011]
    let frankfurt = [60222, 61000]
    postalCodes.set("München", munich)
    postalCodes.set("Berlin", berlin)
    postalCodes.set("Frankfurt", frankfurt)

    //PLZ for city
    console.log(postalCodes.get("Berlin"))
    
    //CSV PLZ
    const reducer = function (accumulator, currentValue) {return  accumulator + " " + currentValue + ","}
    let arr =Array.from(postalCodes.values())
    let result = arr.map(function(e) {return e.reduce(reducer)})
    console.log(result)

    //Invers Postal Codes
    let inverseMap = new Map()
    let arr2 = [...postalCodes]
    arr2.map(function(element){ element[1].forEach(function(e){inverseMap.set(e, element[0])})})
    
    //Invers sort by PLZ
    let sortedMap = new Map([...inverseMap].sort())
    console.log(sortedMap)

    //Invers filtered by > 60000 and < 90000
    let filteredMap = new Map([...inverseMap].filter(function(e){return (e[0] < 90000 && e[0] > 60000)}))
    console.log(filteredMap)

}

demo()