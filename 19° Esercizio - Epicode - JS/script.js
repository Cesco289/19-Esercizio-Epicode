/*Esercizio 1*/
let calcolo = (a,b) => {
    if (a === 50 || b === 0 || a + b === 50)
    {return true}
    else
    {return false}
}

/*Esercizio 2*/
let caratteri = (stringa,posizione) => {
    let lettere = stringa.split('Epicode')
    lettere.splice(posizione, 1)
    return lettere.join('Epicode')
}

/*Esercizio 3*/
let calcoloNew = (a,b) => {
    if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
        (a >= 70 && a <= 100 && b >= 70 && b <= 100))
        {return true} else return false
}

/*Esercizio 4*/

/*Esercizio 5*/
let calcoloV3 = (array) => {
    let temp = 0
    for (let i = 0; i < array.length; i++){
        let element = array[i]
        temp += element  
    } return temp
}

/*Esercizio 6*/

/*Esercizio 7*/

/*Esercizio 8*/
