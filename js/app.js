
const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FizzBuzz = FIZZ + BUZZ;
//console.log(FizzBuzz);

const lista = document.querySelector("ol")

//numeri da 1 a 100

for (let i = 1; i <=100; i++) {
    
    const li = document.createElement("li");

    //console.log(li);
    
    lista.append(li);
    
    // multi di 15 FizzBuzz
    
    if ((i % 3 === 0) && (i % 5 === 0)) {
        
        li.append(FizzBuzz);
        //console.log(FizzBuzz);
        
        // per i multipli di 3 stampa Fizz
        
    } else if (i % 3 === 0) {
        
        li.append(FIZZ);
        //console.log(FIZZ);
        
        // multi di 5 stampa Buzz
        
    } else if (i % 5 === 0) {
        
        li.append(BUZZ);
        //console.log(BUZZ);
        
    } else {
        
        li.append(i);
        //console.log(i);

    }
    
}


