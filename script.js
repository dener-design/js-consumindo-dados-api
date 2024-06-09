async function buscaEndereco(cep) {
    var mensagemDeErro = document.getElementById('erroMensagem')
    mensagemDeErro.innerHTML = '';
    try{
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCepConvertida = await consultaCep.json()
    if (consultaCepConvertida.erro) {
        throw Error('Cep Não existente')
    }
    var cidade = document.getElementById('cidade')
    var logradouro = document.getElementById('endereco')
    var bairro = document.getElementById('bairro')
    var estado = document.getElementById('estado')
    
    cidade.value = consultaCepConvertida.localidade
    logradouro.value = consultaCepConvertida.logradouro
    bairro.value = consultaCepConvertida.bairro
    estado.value = consultaCepConvertida.uf

    console.log(consultaCepConvertida)    
} catch (erro){
    mensagemDeErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
    console.log(erro)
}
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))
