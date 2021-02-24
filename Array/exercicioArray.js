var numerosPares = function (numeros) {
    var passcode;

    for (var i = 0; numeros.length > i; i++)	{
        for (var j = 0; numeros[i].length > j; j++) {

            if(numeros[i] % 2 == 0)	{ // even
             passcode = numeros[i];
             break;
            }  
        }
    }

return passcode;

};

var numeros =[
    [1, 4, 4, 1],
    [1, 2, 3, 1],
    [2, 6, 0, 8],
    [5, 5, 5, 5],
    [4, 3, 4, 3]
];

console.log(numerosPares(numeros));