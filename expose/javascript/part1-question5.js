function sumValues (num1, num2, add) {
    
    if ( add ){
    
        const result = 0;
    
        result = num1 + num2;

        console.log('values added: ', result);
    
    }else return;
    
    console.log('final result: ', result);
}

sumValues(10, 10, true);

/*
Q5: What is printed by line 9? If the code returns an error, explain why. ^^^^^
Answer: TypeError: Assignment to constant variable.
Reason: The const keyword gives its variable the same scope as the let keyword. Declaring a variable with the const prevents it from being reassigned after it is assigned for the first time, much like the final keyword in Java, 
        making it useful for declaring constants in your programs

Q6: What is printed by line 13? If the code returns an error, explain why?
Answer: ReferenceError: result is not defined
Reason: The const keyword gives its variable the same scope as the let keyword. Declaring a variable with the const prevents it from being reassigned after it is assigned for the first time, much like the final keyword in Java, 
        making it useful for declaring constants in your programs

*/