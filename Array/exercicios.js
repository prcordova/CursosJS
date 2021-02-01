/* 

1 - Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
com ponto de exclamação "!" no final.


function cumprimentar(nome) {
    return `olá, ${nome}!`
}
const pessoas = {m: 'maria', idade: 23, a : 'arcio', idade: 39}

*/

/* 2- Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.


function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365  
    return diasDoAno * idadeEmAnos
}


console.log(converterIdadeEmAnosParaDias(29))

*/

/*  3 -   Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
30%, relativo a impostos.


function CalcularSalarioLiquido (horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora 
    const salarioLiquido = salarioBruto - salarioBruto * 30/100

    return `Salario igual a R$ ${salarioLiquido}`
}


console.log(CalcularSalarioLiquido(10, 11))

 */

/* 

4

Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. 


function MesDoAno(numero) {
    switch (numero) {
      
        case 1:
            return "janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9:
            return "setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
    
        
        }

}

console.log(MesDoAno(1))



/*  

            5

*/





/*   Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.  */
/* 
function maiorOuIgual (primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false

    return primeiro >= segundo
}

console.log(maiorOuIgual(42, 3))


 

----------------------------------- */

/*      
          6

*/


/*  Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo
...".
 

 function inverso (valor) {
     const tipo = typeof valor
     
     if (tipo == "boolean") return !valor
     else if (tipo == "number") return -valor
     else
     return `booleano ou numero esperados, mas o parametro é do tipo ${tipo}`
 }

 console.log(inverso("numero"))
 */




/*
 
 
           7

*/




/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o
parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre"
como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não
seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
é igual a minimo ou a maximo.  

function estaEntre(minimo, maximo, numero, inclusivo = false) {
   if(inclusivo) return numero >= minimo && numero <= maximo
   return numero > minimo && numero < maximo
   

}

console.log(estaEntre(3, 150, true))





/*  


           8 -  Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.

 


function multiplicar (numeroA, numeroB) {
   let resultado = 0
   for(let i = 0; i < numeroB; i++)
     resultado += numeroA
   return resultado
}

console.log(multiplicar(33, 4).toFixed(0))
   */





/* 
 
            9 -  Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.

 
*/

/* 
function repetir(itemID, quantidade) {
    let resultado = []

    for (let i = 0; i < quantidade; i++)
        resultado.push(itemID)
    if (itemID == undefined)
        return (`retornar um ID valido`)
    else if (quantidade == undefined)
        return (`nao especificada  a quantidade, favor verificar novamente e preencher corretamente os dados`)

    return `itemID é ${itemID}, foi repetido por ${quantidade} vezes`


}


console.log(repetir(2, 3))

 */

/*         
 
           10 --- Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

 
*/
/* 
function simboloMais(quantidade) {
    let resultado = ''

    for (let i = 0; i < quantidade; i++)
        resultado += '+'

    return ` O resultado é :`, quantidade +  ` ${resultado} `


}


console.log(simboloMais(3))

 */

/* 
 
           11 - Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
Exemplos:
 
*/

/*  

function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]
    return [primeiroElemento, ultimoElemento]
    }
    

console.log(receberPrimeiroEUltimoElemento([1, 2]))


 */


/* 

        12 - Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias
de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas
situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.

Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
especificada no segundo parâmetro.

*/
/* 
function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
    }
    
    Object.is(removerPropriedade(objeto, "descricao"), objeto)
 */


/* 




      13    Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
   

*/

/*  
function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
    }
    
    

console.log(filtrarNumeros([]))

*/


/* 

         14     Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
Exemplos:


*/
/* 
function objetoParaArray (objeto){
    const resultado = []

    for(let chave in objeto)
        resultado.push([chave, objeto[chave], [233]])
    return resultado

}

console.log(objetoParaArray([1, 2 , 3['']]))

 */

/* 
 
           15      Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
 
*/
/* 

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
    }
    
    console.log(receberSomenteOsParesDeIndicesPares([1, 2]))
     */

/* 
 
           16     A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos,
que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é
bissexto ou não.
 
 
*/
/* 


      function checarAnoBissexto(ano) {
          const divisivelPorQuatro = ano % 4 == 0
          const divisivelporCem = ano% 100== 0
          const divisivelPorQuatrocentos = 400 ==0

          return (divisivelPorQuatro && !divisivelporCem) || divisivelPorQuatrocentos
      }

      console.log(checarAnoBissexto(2024),checarAnoBissexto(2021))
*/
/* 




          17 Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.


 */
/*  
function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}

console.log(somarNumeros([1,-32]))

 */



/* 



 
          18 -      Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.

 


function despesasTotais(itens) {
   return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
   }
   
*/




/*          19
 
        Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretendese adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.
 
*/

/*  
function calcularMedia(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for (numero of numeros) {
        somaTotal += numero
    }
    return somaTotal / quantidadeDeNumeros
}

console.log(calcularMedia([10, 20, 30]))


*/

/* 

            20      Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá
ser de duas casas decimais, arredondando se necessário.

*/
/*  
function CalcularTriangulo (base, altura) {
    const area = (base * altura) / 2
    return area.toFixed(2) // ira arredondar para manter 2 casas decimais
}

console.log(CalcularTriangulo(20, 20))
*/


/* 

        21      Criar uma função que receba um array de números e retorne o menor número desse array.


*/
/*  
function menorNumero(numeros) {
    let menor = numeros[0]
    for(let i in numeros)
    if (numeros[i] < menor)
        menor = numeros[i]

        return menor

}

console.log(menorNumero([22,4,5]))*/


/* 

            22      Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.


*/

/* 
function funcaoDaSorte(numeroEscolhido) {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    if (numeroEscolhido > 10)
        return `numero invalido, digite um numero de 1 à 10 ! o resultado desta jogada foi: ${numeroAleatorio}`

    else
        return (numeroEscolhido === numeroAleatorio ?
            `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
            `Que pena, o número sorteado foi o ${numeroAleatorio}`
        )
}


console.log(funcaoDaSorte(33))

 */

/* 

           23      Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.



function contarPalavras(frase) {
    const palavras = frase.split(" ")

    return palavras.length
}
console.log(contarPalavras("tenho, um carro"))
*/


/* 

            24 =        Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
minúsculas.


*/
/*  
function contarCaractere(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
    if (frase.charAt(i) === caractereBuscado)
    contador++
    return contador
    }

    

    
    
console.log(contarCaractere("um dia "))
*/

/* 

         25         A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:

/* 

function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []

    for (let palavra of palavras)
    if (palavra.includes(inicio))
    resultado.push(palavra)

    return resultado
}
 */




/* 

        26           Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais.




function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
    }
    
    

console.log(removerVogais("candidato perfeito"))

*/

/* 

        27      Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a
seguir:



function inverter(objeto) {
    const objetoInvertido = {}

    Object.defineProperties(objeto).forEach(parChaveValor => {
        const chave = 0,
            valor = 1

        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })

    return objetoInvertido
}

const objeto1 = new objeto ["batata"]



// resolucao 2

function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( paresDeChaveValorInvertidos => paresDeChaveValorInvertidos.reverse() )

    return Object.fromEntries(paresDeChaveValorInvertidos)
}

*/

/* 

            28      Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.




function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    return numeros.filter(numero => {
    const quantidadeDeDigitos = String(numero).length
    return quantidadeDeDigitos === quantidadeDesejada
    })
    }
    

    console.log(filtrarPorQuantidadeDeDigitos())

    */
 

    /* 
    
            28      Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

    

    */


    