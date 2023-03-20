/*const nome = document.getElementById('nome'); //ao fazer isso a variável está sendo atribuída ao elemento HTML por meio do "document.getElementById('')", assim é possível atribuir funcionalidades ao elemento HTML selecionado.
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');*/

//Dos 3 primeiros elementos o que se quer são os seus valores; eles podem se acessados da seguinte forma:
//nome.value = 'Ismael dos Santos'

function imc(imc) {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');



    function calcularIMC() {
        if(nome !== '' && altura !== '' && peso !== '' ) {
            const valorIMC = (peso / (altura * altura)).toFixed(1);
            let classificação = '';

            if (valorIMC < 18.5){
                classificação = 'você está abaixo do peso';
            } else if (valorIMC < 25){
                classificação = 'você está no seu peso ideal. Continue assim';
            } else if (valorIMC < 30 ) {
                classificação = 'você está levemente acima do peso, tenha cuidado';
            } else if (valorIMC < 35) {
                classificação = 'está com obesidade de Grau I. Procure um médico!';
            } else if (valorIMC < 40){
                classificação = 'está com obesidade de Grau II. Procure um médico!!';
            } else{
                classificação = 'está com obsedidade de Grau III. Procure um médico com urgência!!!';
            }
            
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e ${classificação} `;
        } else {
            resultado.textContent = 'Preencha todos os campos do formulário'
        }
        //return imc + calcularIMC ()
        imc();
    }
    calcularIMC()
}
calcular.addEventListener('click', imc);