
document.getElementById("submit").onclick = async () => {

    var validar = fetch('/javascript/api.login.json')
    .then(resposta => resposta.json()).then(usuarios => { 
    var input = document.getElementById("username").value
    var inputSenha = document.getElementById("senha").value

        usuarios.forEach((user)=>{
            if(user.aluno == input){
                if(user.senha == inputSenha){
                    window.location.href = '../html/cadastro.html'
                }
            }
        }
        )
     }) 
 }

document.getElementById("Cadastrar").onclick = ()=>{
    window.location.href = '../html/cadastro.html'
}


