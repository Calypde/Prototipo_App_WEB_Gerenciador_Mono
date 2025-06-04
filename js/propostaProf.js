// Descrição: Este arquivo contém a lógica para o modal de confirmação
/* 
 * Arquivo: docente.js
 * Descrição: Arquivo para a página de docentes
 * Autor: Vagner Motta
 * Data:
 */

//document.querySelector('.file-input').addEventListener('change', function () {
//    const fileName = this.files[0] ? this.files[0].name : 'Selecione um arquivo...';
//    document.querySelector('.file-text').textContent = fileName;
//});


// popup adc atvidade 

const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popupOverlay = document.getElementById('popupOverlay');
const propostaForm = document.getElementById('propostaForm');

// Abrir popup
openPopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

// Fechar popup
closePopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});


//conexaoBD

document.getElementById('propostaForm').addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita o recarregamento da página

            const formData = new FormData(e.target);
            const dados = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('http://localhost/php/propostaProf.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dados)
                });

                const resultado = await response.json();
                console.log('Resposta do servidor:', resultado);

                if (resultado.success) {
                    alert('Dados salvos com sucesso!');
                    //showAlert("✅ Cadastro realizado com sucesso!", "success");
                    e.target.reset(); // Limpa o formulário
                } else {
                    alert('Erro: ' + resultado.error);
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                alert('Falha na comunicação com o servidor');
            }
});

// Fechar popup ao clicar fora do conteúdo
//popupOverlay.addEventListener('click', (e) => {
//    if (e.target === popupOverlay) {
//        popupOverlay.style.display = 'none';
//    }
//});

// Enviar formulário
// documentForm.addEventListener('submit', (e) => {
//     e.preventDefault();

    
//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const selectElement = document.getElementById('myDropdown').value;



//     //console.log({
//     //    title,
//     //    description,
//     //    myDropdown
//     //});

//     // Fechar popup após envio
//     popupOverlay.style.display = 'none';

//     // Limpar formulário
//     documentForm.reset();

//     //alert('Atividade criada com sucesso!');
// });

