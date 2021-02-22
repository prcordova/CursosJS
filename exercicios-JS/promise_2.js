
// setTimeout(function() {
//     console.log('executando callback...')

//     setTimeout(function() {
//         console.log('executando callback...')

//         setTimeout(function() {
//             console.log('executando callback...')

//         },2000)
//     }, 2000)
// }, 2000)


// function esperarPor(tempo = 2000) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             console.log('Executando promise...')
//             resolve()
//         }, tempo)
//     })
// }
// esperarPor()
//     .then(() => esperarPor())
//     .then(esperarPor)


function acelerCarro(tempo = 1000) {
    return new Promise(function (resolve){
        setTimeout(function() {
            console.log('acelerando')
            resolve()
        }, tempo)
    })
}
acelerCarro()
.then(acelerCarro)
.then(acelerCarro)
.then(acelerCarro)
.then(acelerCarro)