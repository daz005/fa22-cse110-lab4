// Question 1
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * ( 1 - discount);
        discounted.push(discountedPrice);
    }

    console.log(i);
    //console.log(length);
    
    return discounted;
}

discountPrices([100, 200, 300], 0.5);

/*
Q9: ^^^ What will happen at line 11 and why? 
    If the code causes an error, explain why.  ^^^

Answer: ReferenceError: i is not defined

Reason: Declaring a variable with the let keyword provides the 
        variable with what is known as block scope. This means 
        that it can only be accessed within the block it is 
        defined in, unlike the var keyword.
*/