// Part 1
interface Mountain {
    name: string,
    height: number
}

let allmountains:Mountain[] = [
    {name: 'Kilimanjaro', height: 19241},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];

function findNameOfTallestMountain(allmountainsarray: Mountain[]) {
    let tallestheight: number = 0;
    let currenttallest: string = '';

    for(let x = 0; x < allmountainsarray.length; x++){
        if (allmountainsarray[x].height > tallestheight)
        {
            tallestheight = allmountainsarray[x].height;
            currenttallest = allmountainsarray[x].name;
        }
    } 
    return currenttallest;
};

let tallestmountain: string = findNameOfTallestMountain(allmountains);
console.log(tallestmountain);

// Part 2
interface Product {
    name: string;
    price: number;
}

let allproducts:Product[] = [
    {name: 'motor', price: 10.00},
    {name: 'sensor', price: 12.50},
    {name: 'LED', price: 1.00}
];

function calcAverageProductPrice(productarray: Product[]){
    let totalprice: number = 0;
    for(let x = 0; x < productarray.length; x++){
        totalprice = totalprice + productarray[x].price;
    }
    let average: number;
    average = totalprice / productarray.length;
    return average;
}
let averageprice: number = calcAverageProductPrice(allproducts);
console.log(averageprice);
//console.log(calcAverageProductPrice(allproducts));

// Part 3
interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory:InventoryItem[] = [
    {product: allproducts[0], quantity: 10},
    {product: allproducts[1], quantity: 4},
    {product: allproducts[2], quantity: 20}
]

function calcInventroyValue(inventoryarray: InventoryItem[]){
    let totalvalue: number = 0;
    for (let x = 0; x < inventoryarray.length; x++){
        totalvalue = totalvalue + (inventoryarray[x].product.price * inventoryarray[x].quantity);
    }
    return totalvalue;
}

let totalinventoryvalue: number = calcInventroyValue(inventory);
console.log(totalinventoryvalue);