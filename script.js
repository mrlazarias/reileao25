function sim() {
    alert("Você 2025ZAR CMG! HEHEHE :)");
    location.href = "video.mp4";
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function desviado() {
    alert("VAI ESTAR DISPONÍVEL SIM!");
}

function geraPosicao(min, max) {
    return Math.random() * (max - min) + min + "px";
}

// Função para criar vários rostos
function criaRostos(quantidade) {
    const container = document.getElementById('rostos-container');

    for (let i = 0; i < quantidade; i++) {
        const rosto = document.createElement('img');
        rosto.src = "meu-rosto.png"; // Caminho para o arquivo da imagem
        rosto.alt = "Rosto";
        rosto.style.position = "absolute";
        rosto.style.width = "100px";
        rosto.style.height = "auto";
        rosto.style.left = geraPosicao(0, window.innerWidth - 100);
        rosto.style.top = geraPosicao(0, window.innerHeight - 100);
        container.appendChild(rosto);
    }
}

// Função para mover os rostos aleatoriamente
function moveRostos() {
    const rostos = document.querySelectorAll('#rostos-container img');
    rostos.forEach((rosto) => {
        rosto.style.left = geraPosicao(0, window.innerWidth - 100);
        rosto.style.top = geraPosicao(0, window.innerHeight - 100);
    });
}

// Criar 10 rostos ao carregar a página
criaRostos(10);

// Move os rostos a cada 1 segundo
setInterval(moveRostos, 1000);
