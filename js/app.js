
const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FizzBuzz = FIZZ + BUZZ;
//console.log(FizzBuzz);

//numeri da 1 a 100

for (let i = 1; i <=100; i++) {
    //console.log(i);
    
    // per i multipli di 3 stampa Fizz
    
    if (i % 3 === 0) {

        // multi di 15 FizzBuzz

        if (i % 5 === 0) {

            console.log(FizzBuzz);

        } else {

            console.log(FIZZ);
        }
        
        // multi di 5  Buzz

    } else if (i % 5 === 0) {

        console.log(BUZZ);

    } else {

        console.log(i);
    }
    
}


