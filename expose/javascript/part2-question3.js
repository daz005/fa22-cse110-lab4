// Question 1
function discountPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * ( 1 - discount);
        finalPrice =  Math.round(discountedPrice * 100) /100;
        discounted.push(finalPrice);
    }

    //console.log(i);
    //console.log(discountedPrice);
    console.log(finalPrice);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);

/*
Q3: ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
Answer: print out a number:150    
Reason: The var keyword provides its variable with what is 
    known as function scope. This means that regardless of 
    the block it is defined in, it can be accessed anywhere 
    inside the function it is defined in.
*/