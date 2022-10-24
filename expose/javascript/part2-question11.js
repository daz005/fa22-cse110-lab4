// Question 1
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * ( 1 - discount);
        discounted.push(discountedPrice);
    }

    //console.log(i);
    //console.log(length);
    console.log(discounted);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);

/*
Q10: ^^^ What will this function return? 
        Give a brief explanation.
        If the code causes an error, explain why  ^^^

Answer: print out an array of [ 50, 100, 150 ]

Reason:The const keyword gives its variable the 
    same scope as the let keyword. Declaring a 
    variable with the const prevents it from being 
    reassigned after it is assigned for the first time.
    the variable "discounted" is an array and 
    not reassigned after it is assigned for the first time,
    but its items can be appended. 
*/