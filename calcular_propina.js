const propina15 = 0.15
const propina10 = 0.1
let prueba = 0

function calcularPropina(metodoDePago, result) {

    //si, metodo de pago es = a credito? esto es una condicional
    // == es una pregunta de valor
    // === es una pregunta de valor y tipo(cadena de caracteres)
    if (metodoDePago === "credito") {
        console.log("esto es credito");

        prueba = propina15 * result
        console.log(prueba)
    } else {
        console.log("no soy debito")
        if (metodoDePago === "debito") {
            console.log("esto es debito")

            prueba = propina10 * result
            console.log(prueba)
        }


    }
    return prueba ;
}