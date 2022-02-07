
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
    li.classList.add("col");
    
    // multi di 15 FizzBuzz
    
    if ((i % 3 === 0) && (i % 5 === 0)) {
        
        li.append(FizzBuzz);
        li.classList.add("red");
        //console.log(FizzBuzz);
        
        // per i multipli di 3 stampa Fizz
        
    } else if (i % 3 === 0) {
        
        li.append(FIZZ);
        li.classList.add("green");
        //console.log(FIZZ);
        
        // multi di 5 stampa Buzz
        
    } else if (i % 5 === 0) {
        
        li.append(BUZZ);
        li.classList.add("yellow");
        //console.log(BUZZ);
        
    } else {
        
        li.append(i);
        li.classList.add("blue");
        //console.log(i);

    }
    
}


