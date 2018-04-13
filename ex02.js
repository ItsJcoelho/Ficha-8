//criar o array que irá conter os jogos
let jogos = []
//criar a class Jogo
class Jogo {
    constructor(id, nome ,genero,plataformas,foto){
        this._id = Jogo.UltimoIdJogo()+1
        this.nome = nome
        this.genero = genero
        this.plataformas = plataformas
        this.foto = foto
    }
   //criar uma função que crie numeros unicos para cada jogo
   static UltimoIdJogo(){
        let ultimoId = 0
        if(jogos.length > 0){
            ultimoId = games[games.length-1].id
            return ultimoId
        }
   }
}
//window
window.onload = function(){
    let frmGames = document.getElementById("frmGames")

    frmGames.addEventListener("submit", function(event){
    let plataformas = []
    let msgErro = ""
    let checkBox = this.document.getElementById("form-check-input")
    for (let index = 0; index < checkBox.length; index++) {
        if (checkBox[index].checked == true) {
            plataformas.push(checkBox[index].value)
        }
    }
    if (plataformas.length == 0) {
        msgErro = "Selecione uma plataforma por favor"
    }
    if(msgErro == ""){
        let inputNome = document.getElementById("inputName").value
        let inputGenero = document.getElementById("inputGenero").value
        let inputFoto = document.getElementById("inputFoto").value
        let novoJogo = new Jogo( inputNome, inputGenero, plataformas ,inputFoto)
    }
    else{
        alert(msgErro)
    }
    event.preventDefault()
})



//criar uma funçao para atualizar a tabela com os jogos que estão dentro do array
function atualizarTabela(params) {
    
}
//criar uma funçao que remova um jogo do array(metodo slice)

//adicionar listeners ao botões de remover 

//criar uma funçao para editar um jogo(perguntar ao professor se pode utilizar uma modal para este exercicio)

//a tabela deverá conter o identificador, nome, plataforma, genero e os botoes para remover, visualizar e editar(font awesome)

}