const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
}

let tea: {
    name: string
    price: number
    isHot: boolean 
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}


//aliast object of type
type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}

// duck typing
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" }

let bigCup = { size: "500ml", material: "steel" }

smallCup = bigCup

type Brew = { brewTime: number }
const coffee = { brewTime: 5, beans: "Arabica" }
const chaiBrew: Brew = coffee


//If value is missing than it will cause error
type User = {
    username: string;
    password: string
}

const u: User = {
    username: "chaicode",
    password: "123"
}

//splitting out datatype
type Item = { name: string, quantity: number }
type Address = { string: string, pin: number }

type Order = {
    id: string;
    items: Item[];
    address: Address
}


//Partial type:- all values are not required
type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with: ", updates);
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({})


//Required: all value are required
type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})


//Pick:- make required to only those which we provide in the union
type Chai1 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai1, "name" | "price">

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

//Omit:- excludes which is mentioned in the strings
type Chai2 = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

type PublicChai = Omit<Chai, "secretIngredients">;