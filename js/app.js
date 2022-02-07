
const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FizzBuzz = FIZZ + BUZZ;
//console.log(FizzBuzz);

//numeri da 1 a 100

for (let i = 1; i <=100; i++) {
    //console.log(i);
    
    
    // multi di 15 FizzBuzz
    
    if ((i % 3 === 0) && (i % 5 === 0)) {
        
        console.log(FizzBuzz);
        
        // per i multipli di 3 stampa Fizz

    } else if (i % 3 === 0) {

        console.log(FIZZ);

        // multi di 5 stampa Buzz

    } else if (i % 5 === 0) {

        console.log(BUZZ);

    } else {

        console.log(i);

    }
    
}


