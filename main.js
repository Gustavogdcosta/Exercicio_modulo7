const form = document.getElementById('form-deposito')

const reset = document.getElementById('Campo_A');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const CampoA = parseInt(document.getElementById('Campo_A').value)
    const CampoB = parseInt(document.getElementById('Campo_B').value)
    const BmaiorqueA = CampoB - CampoA;
    const mensagemsucesso = 'O Formulário é Válido'
    const mensagemfracasso  = 'O Formulário não é Válido'
    const casodeucerto = document.querySelector('#sucess-msg');
    const casodeuerrado = document.querySelector('#fail-msg');

    if (BmaiorqueA > 0) {
    casodeucerto.innerHTML = mensagemsucesso;
    casodeucerto.style.display = 'block';
    casodeuerrado.style.display = 'none';

    } 
    else {
    casodeuerrado.innerHTML = mensagemfracasso;
    casodeuerrado.style.display = 'block';
    casodeucerto.style.display = 'none';
    }
})

console.log(form);