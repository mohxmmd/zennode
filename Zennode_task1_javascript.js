console.log('catalogue');
console.log('Product A : $20');
console.log('Product B : $40');
console.log('Product C : $50');

// getting quantity and whether gift wrapping is required or not for each product
let quantityA = parseInt(prompt('Enter the required quantity for Product A:'));
let giftwrapA = parseInt(prompt('Gift wrap required or not (1/0): '));
let quantityB = parseInt(prompt('Enter the required quantity for Product B: '));
let giftwrapB = parseInt(prompt('Gift wrap required or not (1/0): '));
let quantityC = parseInt(prompt('Enter the required quantity for Product C: '));
let giftwrapC = parseInt(prompt('Gift wrap required or not (1/0): '));

let totalAmountA = quantityA*20;
let totalAmountB = quantityB*40;
let totalAmountC = quantityC*50;
let totalAmount = totalAmountA + totalAmountB + totalAmountC;

// Checking the total quantity in cart to apply flat_10_discount
let flat_10_discount = 0;
if (totalAmount > 200){
    flat_10_discount = 10;
}

// checking each product quantity to apply bulk_5_discount
let bulk_5_discountA = 0;
let bulk_5_discountB = 0;
let bulk_5_discountC = 0;

if (quantityA > 10){
    bulk_5_discountA = totalAmountA * 0.05;
}
if (quantityB > 10){
    bulk_5_discountB = totalAmountB * 0.05;
}
if (quantityC > 10){
    bulk_5_discountC = totalAmountC * 0.05;
}
let bulk_5_discount = bulk_5_discountA + bulk_5_discountB + bulk_5_discountC;

//checking total cart quantity to apply bulk_10_discount
let bulk_10_discount = 0
if ((quantityA + quantityB + quantityC) > 20){
    bulk_10_discount = totalAmount*0.1;
}

//checking and applying tiered_50_discount
let tiered_50_discountA = 0;
let tiered_50_discountB = 0;
let tiered_50_discountC = 0;;
let totalQuantity = quantityA + quantityB + quantityC;
if (totalQuantity > 30 && quantityA > 15){
    let discountableA = quantityA - 15;
    tiered_50_discountA = discountableA*0.5*20;
}
if (totalQuantity > 30 && quantityB > 15){
    let discountableB = quantityB - 15;
    tiered_50_discountB= discountableB*0.5*40;
}
if (totalQuantity > 30 && quantityC > 15){
    let discountableC = quantityC - 15;
    tiered_50_discountC = discountableC * 0.5*50;
}
let tiered_50_discount = tiered_50_discountA + tiered_50_discountB + tiered_50_discountC;

//Selecting the most profitable discount for customer
let discount = Math.max(flat_10_discount, bulk_5_discount, bulk_10_discount, tiered_50_discount);
if (discount == 0){
    var discountName = 'No Discounts Available';
}
else if (discount == flat_10_discount){
    var discountName = 'flat_10_discount';
}
else if (discount == bulk_5_discount){
    var discountName = 'bulk_5_discount';
}
else if (discount == bulk_10_discount){
    var discountName = 'bulk_10_discount';
}
else if (discount == tiered_50_discount){
    var discountName = 'tiered_50_discount';
}
else{
    var discountName = 'No Discounts Available';
}
// calculating gift wrap charges
let giftwrap = 0
if (giftwrapA == 1){
    giftwrap = giftwrap+quantityA;
}
if (giftwrapB == 1){
    giftwrap = giftwrap+quantityB;
}
if (giftwrapC == 1){
    giftwrap = giftwrap+quantityC;;
}

// calculating shipping fee
let shippingFee = Math.floor(totalQuantity / 10) * 5;

// printing output
console.log(`Product: Product A\nQuantity: ${quantityA}\nTotal amount of Product A: $${totalAmountA}`);
console.log(`Product: Product B\nQuantity: ${quantityB}\nTotal amount of Product A: $${totalAmountB}`);
console.log(`Product: Product c\nQuantity: ${quantityC}\nTotal amount of Product A: $${totalAmountC}`);
console.log(`Subtotal: ${totalAmount}`); //Subtotal
console.log(`Discount applied :${discountName} \nDiscount amount: ${discount}`);  // Discount details
console.log(`Shipping fee:${shippingFee} \nGiftwrap charge:${giftwrap}`);  // Shipping and giftwrap charges
console.log(`Total amount: ${(totalAmount+shippingFee+giftwrap)-discount}`);  // Total
