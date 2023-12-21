axios('pessoas.json')
    .then(resposta => carregaDados(resposta.data))

function carregaDados(json){
    const table = document.createElement('table');
    const resposta = document.querySelector('.resultado');

    for (let pessoa of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome
        tr.appendChild(td)
        
        td = document.createElement('td');
        td.innerHTML = pessoa.idade
        tr.appendChild(td)
        
        td = document.createElement('td');
        td.innerHTML = pessoa.salario
        tr.appendChild(td)

        table.appendChild(tr)
    }

    resposta.appendChild(table)
    
}

