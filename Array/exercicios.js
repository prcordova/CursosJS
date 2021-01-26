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

/*  Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
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
*/


/*   Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.  */

function maiorOuIgual (primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false

    return primeiro >= segundo
}

console.log(maiorOuIgual(42, 3))

/*  Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo
...".
 */