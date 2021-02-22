const { upperFirst } = require("lodash")

let meuArray = [
    {
        nome: "jonathan",
        linguagens: ["html", "css", "php",]

    },

    {
        nome: "joaneiro",
        linguagens: ["joanascript", "null", "react",]

    },

    {
        nome: "javazeiro",
        linguagens: ["javascript", "nav", "sql",]

    },

]
meuArray.filter(data => {
    if(data.linguagens.indexOf('html') != -1)
    console.log(data.nome)
})

