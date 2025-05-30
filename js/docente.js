// Descrição: Este arquivo contém a lógica para o modal de confirmação
/* 
 * Arquivo: docente.js
 * Descrição: Arquivo para a página de docentes
 * Autor: Vagner Motta
 * Data:
 */

const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("close");
});