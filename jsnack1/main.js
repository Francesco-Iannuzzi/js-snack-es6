/*

Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.

*/

const automobili = [
    {
        marca: 'ferrari',
        modello: 'mod1',
        alimentazione: 'benzina'
    },
    {
        marca: 'lamborghini',
        modello: 'mod2',
        alimentazione: 'diesel'
    },
    {
        marca: 'maserati',
        modello: 'mod1',
        alimentazione: 'gpl'
    },
    {
        marca: 'pegeout',
        modello: 'mod4',
        alimentazione: 'elettrico'
    },
    {
        marca: 'lotus',
        modello: 'mod5',
        alimentazione: 'benzina'
    },
    {
        marca: 'bmw',
        modello: 'mod1',
        alimentazione: 'metano'
    },
    {
        marca: 'bmw',
        modello: 'mod1',
        alimentazione: 'benzina'
    },
    {
        marca: 'opel',
        modello: 'mod1',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'mod1',
        alimentazione: 'benzina'
    },
    {
        marca: 'mercedes',
        modello: 'mod1',
        alimentazione: 'diesel'
    },
]

//opzione1
// const benzina = automobili.filter((auto) => {
//     if (auto.alimentazione == 'benzina') {
//         return true
//     }
// })

//opzione2
const benzina = automobili.filter((auto) => auto.alimentazione == 'benzina');

console.log(benzina);

//opzione1
// const diesel = automobili.filter((auto) => {
//     if (auto.alimentazione == 'diesel') {
//         return true
//     }
// })

//opzione2
const diesel = automobili.filter((auto) => auto.alimentazione == 'diesel');

console.log(diesel);

//opzione1
// const altre = automobili.filter((auto) => {
//     if (auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel') {
//         return true
//     }
// })

//opzione2
const altre = automobili.filter((auto) => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');

console.log(altre);