// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    //console.log(arguments) // arguments is not defined
    return a + b
}
console.log(add(55, 1, 1001))

// this keyword - no longer bound

const user = {
    name: "Daniel",
    cities: ["Kristinehamn", "Göteborg", "Sunne"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city)

    }
}
console.log(user.printPlacesLived())

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}

console.log(multiplier.multiply())