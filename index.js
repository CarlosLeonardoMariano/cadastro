const nome = document.getElementById('f_nome');
const email = document.getElementById('f_email');
const telefone = document.getElementById('f_telefone');
const botao = document.getElementById('btn_gravar');
const listadecontatos = document.getElementById('listadecontatos');
const removerTudo = document.getElementById('btn-remover-tudo')


// Definindo a classe 'cadastro'
class Cadastro {
    constructor(nomes, emails, telefones) {
        this.nomes = nomes
        this.emails = emails
        this.telefones = telefones
    }

    returnWEB() {
        return `
                  <div class ="remover"> 
        <p class = "dados">Nome: ${this.nomes} <br> Email: ${this.emails} <br> Telefones: ${this.telefones} <p/>
        <div class = "dados"> 
                      <button class="btn-remover" id="btn-remover">remover</button>
                  <div/>
                  <div/>

                        `
        
    }
}

botao.addEventListener('click', (evt) => {
    evt.preventDefault()
    // Pegando os valores dos campos
    const nomeValor = nome.value;
    const emailValor = email.value;
    const telefoneValor = telefone.value;

    if(!nomeValor){
        return Toastify({
            text: "Insira seu nome!",
            className: "info",
            style: {
              background: "red",
            }
          }).showToast();
    }

    if(!emailValor){
        return Toastify({
            text: "Insira seu email!",
            className: "info",
            style: {
              background: "red",
            }
          }).showToast();
    }

    if(!telefoneValor){
        return Toastify({
            text: "Insira seu telefone!",
            className: "info",
            style: {
              background: "red",
            }
          }).showToast();
    } 
    else{

    
    // Criando uma instância da classe 'Cadastro' com os valores dos campos
    const pessoa = new Cadastro(nomeValor, emailValor, telefoneValor);

    // Exibindo o retorno da pessoa na lista de contatos
    listadecontatos.innerHTML += pessoa.returnWEB() + "<hr>";

    // Exibindo no console
    console.log(pessoa.returnWEB());

    // Limpando os campos de input após o cadastro
    nome.value = '';
    email.value = '';
    telefone.value = '';
    return Toastify({
        text: "Cadastro concluido com sucessos!",
        className: "info",
        style: {
          background: "green",
        }
      }).showToast();}
      
})

// FUNÇÃO PARA REMOVER ARQUIVO POR ARQUIVO
listadecontatos.addEventListener('click', (evt)=> {
if(evt.target && evt.target.classList.contains('btn-remover')) {
  const del = evt.target.closest('.remover')
  if(del){
    del.remove()
  }
}
})


removerTudo.addEventListener('click', (evt) => {
  listadecontatos.innerHTML = ""
})
