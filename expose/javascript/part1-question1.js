function sumValues (num1, num2, add) {
    
    if ( add ){
    
        var result = 0;
    
        result = num1 + num2;

        console.log('values added: ', result);
    
    }else return;
    
    console.log('final result: ', result);
}

sumValues(10, 10, true);

/*
Q1: What is printed by line 9? If the code returns an error, explain why. ^^^^^
Answer:    values added:  20

Q2: What is printed by line 13? If the code returns an error, explain why?
Answer: final result:  20

*/