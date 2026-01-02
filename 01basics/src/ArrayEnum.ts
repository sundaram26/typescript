//Array
const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string,
    price: number
}

const menu: Chai[] = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 20 },
]

const cities: readonly string[] = ["Delhi", "Jaipur"]

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]


//Tuple
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]

let userInfo: [string, number, boolean?]
userInfo = ["sundaram", 100]
userInfo = ["sundaram", 100, true]

const location: readonly [number, number] = [28.66, 32.45]

const chaiItems: [name: string, price: number] = ["Masala", 25]


// Enum
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType) {
    console.log(`Making: ${type}`)
}

makeChai(ChaiType.GINGER)

// Hetrogenous value
enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.HIGH

let t: [string, number] = ["chai", 10]
t.push("extra") //wrong value could get push