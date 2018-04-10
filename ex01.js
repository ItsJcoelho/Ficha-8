class Personalidade {
    //construtor de objeto
    constructor(name,year, nacionality, work, photo){
        this.name = name
        this.year = year
        this.nacionality = nacionality
        this.work = work
        this.photo = photo

    }
    // propriedade nome
    get name(){
        return this._name
    }
    set name(newName){
        if (newName.length == 5) {
            this._name = newName
        }
    }
    // propriedade year
    get year(){
        return this._year
    }
    set year(newYear){
        this._year = newYear
    }
    // propriedade nacionality
    get nacionality(){
        return this._nacionality
    }
    set year(newYear){
        this._nacionality = newNacionality
    }
}
// criar o Array
let arrayPersonalidade = []
window.onload = function(){
    let maxAno= document.getElementById("inputYear")
    let anoAtual = new Date().getFullYear
    maxAno.setAttribute("max", anoAtual)



    //Adicionar o listener ao form
     let formPerson = document.getElementById("personalidades")
     formPerson.addEventListener("submit", function(event){
         
        // obter valores do formulário
            let name = document.getElementById("inputName").value
            let year = document.getElementById("inputYear").value
            let nacionality = document.getElementById("inputNacionality").value
            let work = document.getElementById("inputWork").value
            let photo = document.getElementById("inputPhoto").value

        // criar um objeto a partir dos valores
            let novaPersonalidade = new Personalidade(name,year,nacionality,work,photo)
        // adicionar ao array
            arrayPersonalidade.push(novaPersonalidade)

        // atualizar a tabela
            atualizaTabela()
        // prevent  default
        event.preventDefault()

     })

     function atualizaTabela() {
         let tabela = document.getElementById("tabelaPerson")

         let tableHtml = ""
         tableHtml = "<thead><tr><th>nome</th><th>ano</th><th>nacionalidade</th><th>trabalhos</th><th>foto(link)</th></tr></thead>"
     }
    
     
}