const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault(); 

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
    }
}

formulario.addEventListener('submit', validarFormulario);

const btnTema = document.querySelector('#btn-tema');
const body = document.body;

function alternarTema() {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";
    }
}

btnTema.addEventListener('click', alternarTema);

const meusProjetos = [
    {
        titulo: "Projeto 01 - Aplicativo Esportivo.",
        descricao: "Um app para acompanhar o futebol local.",
        link: "https://github.com/rodrigolopes/futassunscore"
    },
    {
        titulo: "Projeto 02 - Portfólio.",
        descricao: "Meu portfólio de apresentação feito com HTML.",
        link: "https://github.com/rodrigolopes/portfolio"
    },
    {
        titulo: "Projeto 03 - Controle de Notas.",
        descricao: "Sistema para o controle de notas dos alunos.",
        link: "https://github.com/rodrigolopes/notascontrol" 
    }
];

function renderizarProjetos () {
    const container = document.querySelector('.projetos-container');

    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">Ver no Github.</a>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();
