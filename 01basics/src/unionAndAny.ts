
let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'
apiRequestStatus = "success"

let airlineSeat: 'aisle' | 'window' | 'middle' = 'window'

airlineSeat = 'aisle';

const orders = ['12', '20', '28', '42'];

let currentorder: string | undefined;  //if we haven't annotate the type then if will automatically infer the 'any' type

for (let order of orders) {
    if (order === '28') {
        currentorder = order
        break;
    }
    currentorder = '11';
}

console.log(currentorder);