function demo(){
    let postalCodes = new Map()
    let munich = [81371, 81373, 81697]
    let berlin = [30333, 30111, 30789, 30011]
    let frankfurt = [60222, 61000]
    postalCodes.set("München", munich)
    postalCodes.set("Berlin", berlin)
    postalCodes.set("Frankfurt", frankfurt)

    console.log(postalCodes.get("Berlin"))
    const reducer = function (accumulator, currentValue) {return  accumulator + " " + currentValue + ","}
    let arr =Array.from(postalCodes.values())
    let result = arr.map(function(e) {return e.reduce(reducer)})
    console.log(result)

    let inverseMap = new Map()
    let arr2 = Array.from(postalCodes.entries())
    arr2.map(function(element){ element[1].forEach(function(e){inverseMap.set(e, element[0])})})
    console.log(inverseMap)
}

demo()