import inquirer from "inquirer"

inquirer.prompt([{
    name: "Introducción",
    message: "Seleccione que operación quiere realizar:"
},{
    type: "list",
    name: "operaciones",
    message: "Operaciones: ",
    choices: ["Suma", "Resta", "Multiplicación", "División", "Potenciación"]
},{
    type: "number",
    name: "numero1",
    message: "Digite un numero: "
},{
    type: "number",
    name: "numero2",
    message: "Digite otro numero: "
}])

.then(answers => {
    let resultado;

    switch (answers.operaciones) {
        case "Suma":
            resultado = answers.numero1 + answers.numero2;
            break;
        case "Resta":
            resultado = answers.numero1 - answers.numero2;
            break;
        case "Multiplicación":
            resultado = answers.numero1 * answers.numero2;
            break;
        case "División":
            resultado = answers.numero1 / answers.numero2;
            break;
        case "Potenciación":
            resultado = answers.numero1 ** answers.numero2;
            break;
        default:
            break;
    }

    console.log("El resultado de la operación es: ", resultado);

})



