const inputs = document.querySelectorAll('input[type="text"]')

const botao = document.getElementById('btn-enviar-formulario')


// deixar a borda verde quando preencher algum campo
inputs.forEach(input =>{
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add('preenchido')
        } else {
            input.classList.remove('preenchido')
        }
    })
})



botao.addEventListener('click', function(){
    let excluirPreenchimento = document.querySelectorAll('.preenchido')

// adicionar a classe faltou para os campos que não foram preenchidos
    inputs.forEach(input => {
        
        if (input.value === "") {
            input.classList.add('faltou')
        }else if(input.value.lentgh >= 1){
            input.classList.remove('faltou')
        } 
    })

// excluir todos os campos caso todos estejam preenchidos 
    if(excluirPreenchimento.length === 4){
            inputs.forEach(input => {
                input.value = ''
                input.classList.remove('preenchido')
                input.classList.remove('faltou')
            })
        }
})




