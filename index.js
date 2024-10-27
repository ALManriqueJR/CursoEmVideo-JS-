const container = document.getElementById('inputBoard');
const res = document.getElementById('result');
let schematics = document.getElementById('respBoard')
let arrValues = []
res.value = ''


container.addEventListener('click', (event) => {
    event.preventDefault();

    let inp = document.querySelectorAll('input')[0]

    if (event.target.id === 'add') {

        schematics.innerHTML = ''

        if (inp.value < 1 || inp.value > 100 || inp.value == '') {
            alert('Entrada invalida, fora da faixa aceita (1~100)')
        }

        if (arrValues.every(x => x != inp.value)) {
            addTextArea()
        }else{
            alert('Valor já adicionado previamente')
            inp.value = '' // aqui o valor = '' não funciona, pois valor é uma copia (ñ o elemento do DOM direto)
            inp.focus()
            return;
        }


    }

    if (event.target.id === 'end') {

        if (arrValues.length == 0) {
            alert('Não tem dados para finalizar')
            return;
        }

        chloeSchematics(arrValues)
    }

});

function addTextArea() {
    let inp = document.querySelectorAll('input')[0]
    let valor = inp.value
    res.value += `Valor ${valor} adicionado.\n`
    arrValues.push(Number(valor))
    inp.value = '' // aqui o valor = '' não funciona, pois valor é uma copia (ñ o elemento do DOM direto)
    inp.focus()
};

function chloeSchematics(arrValues) {

    let arrSum = arrValues.reduce((x, y) => x + y, 0)

    schematics.innerHTML = `
        <br>
        <section class="container">
            <p>Ao todo temos ${arrValues.length} numeros cadastrados</p>
            <p>O maior nº é o ${Math.max(...arrValues)} </p>
            <p>O menor nº é o ${Math.min(...arrValues)} </p>
            <p>Somando todos os nº ${arrSum} </p>
            <p>Média dos valores ${(arrSum/arrValues.length).toFixed(2)} </p>
        </section>
    `

};