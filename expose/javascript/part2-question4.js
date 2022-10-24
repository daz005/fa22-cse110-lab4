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
    //console.log(finalPrice);
    
    console.log(discounted);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);

/*
Q4: ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
Answer: an array of [ 50, 100, 150 ]   
Reason: the memory of an array is returned.
*/