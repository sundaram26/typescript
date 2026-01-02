
// class Chai {
//     flavour: string;
//     // price: number

//     // constructor(flavour: string, price: number) {
//     //     this.flavour = flavour
//     //     this.price = price
//     // }

//     constructor(flavour: string) {
//         this.flavour = flavour
//         console.log(this)
//     }
// }

// const masalaChai = new Chai("Ginger")
// masalaChai.flavour = "masala"


// Access Modifier
//public
class Chai {
    public flavour: string = "Masala"

    private secretIngredients = "Cardamom"

    reveal() {
        return this.secretIngredients //ok
    }

}

const c = new Chai()
c.reveal()

//protected
class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName() {
        return this.shopName //OK
    }
}

//private
class Wallet {
    #balance = 100

    getBalance() {
        return this.#balance
    }
}

const w = new Wallet()

//readonly
class Cup {
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity
    }
}


//getter setter(controlled gates)
class ModernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too sweet");
        this._sugar = value
    }
}

const c1 = new ModernChai()
c1.sugar = 3


// static members
class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string) {}
}
console.log(EkChai.shopName); //directly access on class not on object

//we want to create class but don't want its object
abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make() {
        console.log("Brewing chai")
    }
}

//composition
class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater: Heater) { }
    
    make() {
        this.heater.heat
    }
}