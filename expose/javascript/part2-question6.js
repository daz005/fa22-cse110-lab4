// Question 1
function discountPrices(prices, discount) {
    let discounted = [];
    let finalPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * ( 1 - discount);
        finalPrice =  Math.round(discountedPrice * 100) /100;
        discounted.push(finalPrice);
    }

    //console.log(i);
    console.log(discountedPrice);
    //console.log(finalPrice);
    
    return discounted;
}

discountPrices([100, 200, 300], 0.5);

/*
Q6: ^^^ What will happen at line 13 and why? 
    If the code causes an error, explain why. ^^^

Answer: ReferenceError: discountedPrice is not defined

Reason: Declaring a variable with the let keyword provides 
        the variable with what is known as block scope. This 
        means that it can only be accessed within the block 
        it is defined in, unlike the var keyword.
*/