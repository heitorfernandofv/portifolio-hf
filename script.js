
const botaoContato = document.getElementById('botao-ola');
const botaoPlay = document.getElementById('botao-play');
const botaoLinkedin = document.getElementById('btn-linkedin');
const botaoGitHub = document.getElementById('btn-github');
const botaoInstagram = document.getElementById('btn-instagram');

function hoverBtn(){
    botaoContato.classList.add('btn-hover');
    botaoPlay.classList.add('btn-hover');
    botaoLinkedin.classList.add('btn-hover');
    botaoGitHub.classList.add('btn-hover');
    botaoInstagram.classList.add('btn-hover');
}

function outBtn(){
    botaoContato.classList.remove('btn-hover');
    botaoPlay.classList.remove('btn-hover');
    botaoLinkedin.classList.remove('btn-hover');
    botaoGitHub.classList.remove('btn-hover');
    botaoInstagram.classList.remove('btn-hover');
    
    botaoContato.classList.add('btn-out');
    botaoPlay.classList.add('btn-out');
    botaoLinkedin.classList.add('btn-out');
    botaoGitHub.classList.add('btn-out');
    botaoInstagram.classList.add('btn-out');
}

document.addEventListener('scroll', function () {
    const menu = document.getElementById('menu-cabecalho');
    if (window.scrollY > 50) { 
        menu.classList.add('scroll');
    } else {
        menu.classList.remove('scroll');
    }
});

const menuMobile = document.getElementById('menu-mobile');
const imgAbrirMenu = document.getElementById('simbolo-menu-mobile');
const imgFecharMenu = document.getElementById('simbolo-fechar-menu');
const conteudoPrincipal = document.querySelectorAll('.conteudo-principal');
const itensMenu = document.querySelectorAll('.item-mobile a');

function toggleVisibilidadeConteudo(ocultar) {
    conteudoPrincipal.forEach(elemento => {
        elemento.classList.toggle('ocultar', ocultar);
    });
}

function abrirMenuMobile() {
    imgAbrirMenu.style.display = 'none';
    menuMobile.style.display = 'block';
    imgFecharMenu.style.display = 'block';
    toggleVisibilidadeConteudo(true); 
}

function fecharMenuMobile() {
    imgFecharMenu.style.display = 'none';
    menuMobile.style.display = 'none';
    imgAbrirMenu.style.display = 'block';
    toggleVisibilidadeConteudo(false);
}

itensMenu.forEach(item => {
    item.addEventListener('click', fecharMenuMobile);
});
