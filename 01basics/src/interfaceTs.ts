
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
} 


type TeaRecipe = {
    water: number
    milk: number
}

class MalasaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

type CupSize = "small" | "large"
//this is not allowed in the custom types
// class Chai implements CupSize {

// }


// interface
interface TeaRecipeInterface {
    water: number
    milk: number
}

class MalasaChaiInterface implements TeaRecipeInterface {
    water = 100;
    milk = 50;
}

interface CupSizeInterface {
    size: "small" | "large"
}
//this is not allowed in the custom types
class ChaiInterface implements CupSizeInterface {
    size: "small" | "large" = "large" 
}


// type Response = { ok: true } | { ok: false }
// class myRes implements Response {
//     ok: boolean = true;
// }

//union
type TeaType = "masala" | "ginger" | "lemon" //literal type

function orderChai(t: TeaType) {
    console.log(t);
}

//intersection
type BaseChai = { teaLeaves: number } 
type Extra = { masala: number }

type MasalaChai1 = BaseChai & Extra

const cup: MasalaChai1 = {
    teaLeaves: 2,
    masala: 1
}

//optional
type User = {
    username: string;
    bio?: string;
}

const u1: User = { username: "Sundaram" }
const u2: User = { username: "Sundaram", bio: "sundaramsingh.com" }

//readonly
type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "ChaiCode"