// Descrição: Este arquivo contém a lógica para o modal de confirmação
/* 
 * Arquivo: docente.js
 * Descrição: Arquivo para a página de docentes
 * Autor: Vagner Motta
 * Data:
 */

const hiddenButton = document.getElementById("hiddenButton");
let timeoutId;

// Mostra o botão quando o mouse se move
document.addEventListener("mousemove", () => {
    hiddenButton.style.display = "block";
    
    // Esconde o botão após 2 segundos sem movimento
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        hiddenButton.style.display = "none";
    }, 3500);
});

document.querySelector('.file-input').addEventListener('change', function() {
        const fileName = this.files[0] ? this.files[0].name : 'Selecione um arquivo...';
        document.querySelector('.file-text').textContent = fileName;
});

//popup adc atividade

        const openPopupBtn = document.getElementById('openPopup');
        const closePopupBtn = document.getElementById('closePopup');
        const popupOverlay = document.getElementById('popupOverlay');
        const documentForm = document.getElementById('documentForm');

        // Abrir popup
        openPopupBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'flex';
        });

        // Fechar popup
        closePopupBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
        });

        // Fechar popup ao clicar fora do conteúdo
        //popupOverlay.addEventListener('click', (e) => {
        //    if (e.target === popupOverlay) {
        //        popupOverlay.style.display = 'none';
        //    }
        //});

        // Enviar formulário
        documentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const deadline = document.getElementById('deadline').value;
            const pdfFile = document.getElementById('pdf').files[0];
            
            
            console.log({
                title,
                description,
                deadline,
                pdfFile: pdfFile ? pdfFile.name : 'Nenhum arquivo selecionado'
            });
            
            // Fechar popup após envio
            popupOverlay.style.display = 'none';
            
            // Limpar formulário
            documentForm.reset();
            
            //alert('Atividade criada com sucesso!');
        });