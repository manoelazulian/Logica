var mensagem = document.querySelector('.mensagem');

var botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault()
    mensagem.textContent = 'E-mail cadastrado na plataforma de spam com sucesso!'

})
