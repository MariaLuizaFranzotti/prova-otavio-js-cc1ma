function verificarSenha(event) {
    event.preventDefault() //previne que a página seja recarregada quando o formulário for enviado
    
    var senha = document.getElementById("senhaInput").value;

    //verifica se a senha atende aos critérios
    //utiliza o operador '&&' para verificar se todasas condições são verdadeiras
    //utiliza expressões regulares para a verificação dos caracteres
    if (
        senha.length >= 8 && 
        /[a-z]/.test(senha) && //verifica se possui alguma letra minúscula
        /[A-Z]/.test(senha) && //verifica se posssui algma letra maiúscula
        /\d/.test(senha) //verifica se possui algum número
    ) {
        exibirMensagemResultado("A senha atende aos critérios pedidos")
    }
    else {
        exibirMensagemResultado("Digite uma senha que tenha pelo menos 1 letra maiúscula, 1 minúscula e         um dígito numérico")
        
    }
    
}

function exibirMensagemResultado(mensagem) {
    var mensagemResultado = document.getElementById("mensagemResultado");
    mensagemResultado.innerHTML = mensagem;
}