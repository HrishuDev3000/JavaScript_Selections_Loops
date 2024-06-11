console.log("Hello World!\n==========\n");

// Exercise 1/2 Section
console.log("EXERCISE 1/2:\n==========\n");

for(let i = 0; i <= 100; i++){  // Do I only print out the words for odd numbers?
    if( i % 2 == 1){
        console.log(i);
    }

    if( i % 15 == 0){
        console.log("FIZZ");
     }
 
     else if (i % 5 == 0){
         console.log("BUZZ");
     }
 
     else if (i % 3 == 0){
         console.log("FIZZBUZZ");
     }

    
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let k = 0
while(k < 101){
  k++;

  if( k % 2 == 1){
    console.log(k);
    
  }

  if( k % 3 == 0){

    if(k % 5 == 0){
        console.log("FIZZBUZZ");
    }

    else{
    console.log("FIZZ");
    }
  }

  else if(k % 5 == 0){
    console.log("BUZZ");
  }

  
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 0; i <= n; i++){  // Do I only print out the words for odd numbers?
    if( i == value){
        console.log("Found Value !");
        break;
    }
    else{ 
        console.log("Value Not Found");
    }
}


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= m; i++){  // Do I only print out the words for odd numbers?
    if( i % 2 == 1){
        console.log(i);
    }

    if( i % fizzDivisor == 0){

        if(i % buzzDivisor == 0){
            console.log("FIZZBUZZ");
        }
    
        else{
        console.log("FIZZ");
        }
    }
    
    else if(i % buzzDivisor == 0){
        console.log("BUZZ");
      }
    
}