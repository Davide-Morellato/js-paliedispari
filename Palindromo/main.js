// PALINDROMA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo



// CREO UNA VARIABILE PER CHIEDERE ALL'UTENTE UNA PAROLA (prompt)

const wordUser = prompt('inserisci qui una parola') ;


// CREO UN ARRAY VUOTO IN CUI ANDRO' AD INSERIRE OGNI SINGOLA LETTERA DELLA PAROLA INSERITA DALL'UTENTE wordUser

const arrayWordUser = [] ;


// CREO UN CICLO for PER INSERIRE LE LETTERE NELL'ARRAY (.push)

for(let i = 0; i < wordUser.length; i++){

    // CREO UNA VARIABILE PER PRENDERE OGNI SINGOLO ELEMENTO

    const singleLetter = wordUser[i] ;

    // AGGIUNGO LE SINGOLE LETTERE NELL'ARRAY VUOTO

    arrayWordUser.push(singleLetter)

}

// STAMPO ALL'ESTERNO PER AVERE UN ARRAY CON TUTTE LE LETTERE  (Es. 'ciao' ['c', 'i', 'a', 'o']
// E NON UNA LISTA DI SINGOLE LETTERE PER L'ARRAY (Es. ['c']  ['c', 'i'] ['c', 'i', 'a'] ['c', 'i', 'a', 'o'])

console.log('lettere parola utente: ', arrayWordUser)




// CREO UN ARRAY VUOTO IN CUI INSERISCO LE LETTERE DEL PRIMO ARRAY AL CONTRARIO

const arrayWordUserReverse = [] ;

// CREO UN ALTRO CICLO for IN CUI AGGIUNGO LE LETTERE DEL PRIMO ARRAY AL CONTRARIO

for(let j = wordUser.length - 1; j >= 0 ; j--){

    // CREO UNA VARIABILE PER PRENDERE OGNI SINGOLO ELEMENTO

    const singleLetterReverse = wordUser[j]

    // AGGIUNGO LE LETTERE NELL'ARRAY VUOTO

    arrayWordUserReverse.push(singleLetterReverse)

    
}

console.log('lettere utente al contrario: ', arrayWordUserReverse)



// DICHIARO LA FUNZIONE CHE MI INDICA SE LA PAROLA INSERITA DALL'UTENTE E' PALINDROMA (true) OPPURE NO (false)

function isPalindrome(arrayWordUser, arrayWordUserReverse){

    // CREO UNA VARIABILE DI CONTROLLO ASSUMENDO CHE SIA false (NON PALINDROMA)

    let word = false 


    // CREO UN CICLO for PER CONTROLLARE SE OGNI LETTERA DEI DUE ARRAY COMBACIANO
    // prendo come riferimento la lunghezza del primo array

    for(let y = 0; y < arrayWordUser.length; y++){

        // SE LE SINGOLE LETTERE DEL PRIMO ARRAY SONO STRETTAMENTE UGUALI (===)
        // ALLE SINGOLE LETTERE DEL SECONDO ARRAY
        // ALLORA LA VARIABILE DI CONTROLLO DEVE ESSERE true (E' PALINDROMA)

        if(arrayWordUser[y] === arrayWordUserReverse[y]){

            word = true
        }

    }



    // SE LA VARIABILE DI CONTROLLO E' STRETTAMENTE UGUALE (===) ALL'ESITO true (E' PALINDROMA) 
        // ALLORA STAMPA 'La parola è palindroma'

    // ALTRIMENTI
        // STAMPA 'La parola non è palindroma'

    if(word === true){

        console.log('La parola è palindroma')

    } else {

        console.log('La parola non è palindroma')
    }


    // RITORNO L'ESITO DELLA VARIABILE DI CONTROLLO word

    return word

}


// CREO UNA VARIABILE IN CUI INVOCO LA FUNZIONE

const result = isPalindrome(arrayWordUser, arrayWordUserReverse)
console.log(result)