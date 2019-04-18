var email = document.querySelector('#loginInputEmail')
var senha = document.querySelector('#loginInputPassword')   
    if (email.value == "" || email.value.length == 0){
        mensagem.textContent = 'Digite um email válido'
        return
    } else if (email.value.indexOf('@') == -1) {
    mensagem.textContent = 'O email informado é inválido'
    return
    }
        mensagem.textContent = 'O email '+ email.value + 'foi cadastrado com sucesso!'
    
        console.log(email.value.indexOf('@'))
        if (senha.value.lenght >= 6){
            returnmensagem.textContent = 'Senha inválida!'

        }
        