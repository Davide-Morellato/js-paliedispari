// PARI E DISPARI

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// CREO UNA VARIABILE PER CHIEDERE ALL'UTENTE DI SCEGLIERE PARI O DISPARI (prompt)

const evenOdd = prompt('scegli pari o dispari')

console.log(evenOdd)



// CREO UNA VARIABILE PER CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5

const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))

console.log('numero utente: ', userNumber)



// VERIFICA DI CONTROLLO prompt:
// SE IL NUMERO INSERITO DALL'UTENTE (userNumber) E' > 5  AND (&&)
// IL NUMERO INSERITO DALL'UTENTE (userNumber) E' <= 0  AND  (&&)
// LA SCELTA TRA PARI E DISPARI DALL'UTENTE (evenOdd) E' DIVERSA DA 'pari'  OR  (||)
// LA SCELTA TRA PARI E DISPARI DALL'UTENTE (evenOdd) E' DIVERSA DA 'dispari'

    // ALLORA PRESENTA UN ALERT ALL'UTENTE
    // STAMPA IN CONSOLE 'valori non validi'

// ALTRIMENTI 
    // SVOLGI LE FUNZIONI

if(userNumber > 5 &&
    userNumber <= 0 &&
    evenOdd !== 'pari' ||
    evenOdd !== 'dispari'){

    alert('digitare correttamente la tua scelta')

    console.log('VALORI NON VALIDI')

} else {
    
    // DICHIARO UNA FUNZIONE randomPc
    // IN CUI CREO UNA VARIABILE randomNum PER GENERARE UN NUMERO CASUALE PER IL PC (da 1 a 5)
    
    function randomPc(){
    
        const randomNum = parseInt(Math.floor(Math.random() * 5) + 1)
    
        return randomNum
    
    }
    
    // CREO UNA VARIABILE PER INVOCARE LA FUNZIONE randomPc
    
    const random = randomPc()
    console.log('numero casuale: ', random)
    
    
    
    // CREO UNA VARIABILE PER SOMMARE I DUE NUMERI (userNumber + random)
    
    const sum = userNumber + random
    
    console.log('somma: ', sum)
    
    
    
    // DICHIARO UNA FUNZIONE isEvenOdd
    // IN CUI CREO UNA VARIABILE result PER VERIFICARE SE LA SOMMA DEI NUMERI sum
    // SIA PARI O DISPARI (sfrutto il modulo % 2)
    
    function isEvenOdd(){
    
        const result = sum % 2
    
        return result
    
    }
    
    // CREO UNA VARIABILE PER INVOCARE LA FUNZIONE isEvenOdd()
    
    const rest = isEvenOdd()
    
    
    // SE IL NUMERO OTTENUTO HA RESTO STRETTAMENTE UGUALE (===) 0 (pari) AND  LA SCELTA DELL'UTENTE E' PARI
    // ALLORA STAMPA HAI VINTO
    
    // ALTRIMENTI SE IL NUMERO OTTENUTO HA RESTO DIVERSO (!==) DA 0  AND  LA SCELTA DELL'UTENTE E' DISPARI
    // ALLORA STAMPA HAI VINTO
    
    // ALTRIMENTI (se nessuna delle due)
    // ALLORA STAMPA HAI PERSO
    
    if(rest === 0 && evenOdd === 'pari'){
    
        console.log('è pari: hai vinto!')
    
    }else if (rest !== 0 && evenOdd === 'dispari'){
    
        console.log('è dispari: hai vinto!')
    
    } else {
    
        console.log('hai perso!')
    }

}
