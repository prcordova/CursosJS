function tratarErroELancar(erro) {
    // throw new Error ('...')
    //throw 10
    //throw true
    //throw 'mensagens de erro'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { 
        console.log('Sucesso')
    }
}


const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)
