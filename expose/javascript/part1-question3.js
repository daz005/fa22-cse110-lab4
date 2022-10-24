function sumValues (num1, num2, add) {
    
    if ( add ){
    
        let result = 0;
    
        result = num1 + num2;

        console.log('values added: ', result);
    
    }else return;
    
    console.log('final result: ', result);
}

sumValues(10, 10, true);

/*
Q3: What is printed by line 9? If the code returns an error, explain why. ^^^^^
Answer:    values added:  20

Q4: What is printed by line 13? If the code returns an error, explain why?
Answer: ReferenceError: result is not defined
Reason: Declaring a variable with the let keyword provides the variable 
        with what is known as block scope. This means that it can only 
        be accessed within the block it is defined in, unlike the var keyword. 
*/