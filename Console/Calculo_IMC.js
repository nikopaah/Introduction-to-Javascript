// ===========================

/*  Cálculo de IMC
    -----------
    BMI Calculating */

// ===========================

let nome = "fulano";
let peso = 65.0;
let altura = 1.75;
let IMC = 0;

/* Mathematical formula
     peso  / altura² 
    weight / height²   */

IMC = peso / (altura**2);
//---------------------------

/*  Resposta ao usuário
    -----------
    User response */

if(IMC < 18.5) { 
    /*  Se IMC for MENOR que 18.5
        -----------
        If the BMI is LESS than 18.5    */
    console.error(nome + " está abaixo do peso :("); // is underweight :(
}

//if(IMC > 18.5 && IMC < 24.9) {}
else if (IMC < 24.9) {
    /*  Se IMC for MAIOR que 18.5 E MENOR que 24.9:
    -----------
    If the BMI is GREATER than 18.5 AND LESS than 24.9   */
    console.log(nome + " está no peso ideal :)"); // is at ideal weight :)
}

else {
    /*  Se IMC for MAIOR que 24.9
        -----------
        If the BMI is GREATER than 24.9    */
    console.error(nome + " está acima do peso :("); // is overweight :()
}