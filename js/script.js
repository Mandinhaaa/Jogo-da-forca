var roxo = "#847bbc";
var vermelho = "#D93476";
var verde = "#88EDA7";
let pontuacao = 0;
let limparLetras = [];
let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
  (palavra001 = {
    nome: "IRLANDA",
    categoria: "PAÍS",
  }),
  (palavra002 = {
    nome: "EQUADOR",
    categoria: "PAÍS",
  }),
  (palavra003 = {
    nome: "TOMATE",
    categoria: "FRUTA",
  }),
  (palavra004 = {
    nome: "TECLADO",
    categoria: "TECNOLOGIA",
  }),
  (palavra005 = {
    nome: "MELANCIA",
    categoria: "FRUTA",
  }),
  (palavra006 = {
    nome: "CANETA",
    categoria: "OBJETO",
  }),
  (palavra007 = {
    nome: "CADEIRA",
    categoria: "OBJETO",
  }),
  (palavra008 = {
    nome: "MONITOR",
    categoria: "TECNOLOGIA",
  }),
  (palavra009 = {
    nome: "HOMEM ARANHA",
    categoria: "FILME",
  }),
  (palavra010 = {
    nome: "A ERA DO GELO",
    categoria: "FILME",
  }),
  (palavra011 = {
    nome: "BOB ESPONJA",
    categoria: "DESENHO ANIMADO",
  }),
  (palavra012 = {
    nome: "STRANGER THINGS",
    categoria: "SÉRIE",
  }),
  (palavra013 = {
    nome: "MULHER MARAVILHA",
    categoria: "FILME",
  }),
  (palavra014 = {
    nome: "PIZZA",
    categoria: "COMIDA",
  }),
  (palavra015 = {
    nome: "LIVRO",
    categoria: "OBJETO",
  }),
  (palavra016 = {
    nome: "TIGRE",
    categoria: "ANIMAL",
  }),
  (palavra017 = {
    nome: "INTERNET",
    categoria: "TECNOLOGIA",
  }),
  (palavra018 = {
    nome: "VIOLINO",
    categoria: "INSTRUMENTO MUSICAL",
  }),
  (palavra019 = {
    nome: "PARIS",
    categoria: "CIDADE",
  }),
  (palavra020 = {
    nome: "CARRO",
    categoria: "TRANSPORTE",
  }),
  (palavra021 = {
    nome: "GUITARRA",
    categoria: "INSTRUMENTO MUSICAL",
  }),
  (palavra022 = {
    nome: "BAILARINO",
    categoria: "PROFISSÃO",
  }),
  (palavra023 = {
    nome: "JAZZ",
    categoria: "GÊNERO MUSICAL",
  }),
  (palavra024 = {
    nome: "ESCALADA",
    categoria: "ESPORTE",
  }),
  (palavra025 = {
    nome: "ASTRONOMIA",
    categoria: "CIÊNCIA",
  }),
  (palavra026 = {
    nome: "ATENAS",
    categoria: "CIDADE",
  }),
  (palavra027 = {
    nome: "FUTEBOL",
    categoria: "ESPORTE",
  }),
  (palavra028 = {
    nome: "BASQUETE",
    categoria: "ESPORTE",
  }),
  (palavra029 = {
    nome: "CICLISMO",
    categoria: "ESPORTE",
  }),
  (palavra030 = {
    nome: "ATLETISMO",
    categoria: "ESPORTE",
  }),
  (palavra031 = {
    nome: "SURFE",
    categoria: "ESPORTE",
  }),
  (palavra032 = {
    nome: "GOLFE",
    categoria: "ESPORTE",
  }),
  (palavra033 = {
    nome: "ASTRONOMIA",
    categoria: "CIÊNCIA",
  }),
  (palavra034 = {
    nome: "BIOLOGIA",
    categoria: "CIÊNCIA",
  }),
  (palavra035 = {
    nome: "PALEONTOLOGIA",
    categoria: "CIÊNCIA",
  }),
  (palavra036 = {
    nome: "ECOLOGIA",
    categoria: "CIÊNCIA",
  }),
  (palavra037 = {
    nome: "METEOROLOGIA",
    categoria: "CIÊNCIA",
  }),
  (palavra038 = {
    nome: "ROCK",
    categoria: "GÊNERO MUSICAL",
  }),
  (palavra039 = {
    nome: "POP",
    categoria: "GÊNERO MUSICAL",
  }),
  (palavra040 = {
    nome: "RAP",
    categoria: "GÊNERO MUSICAL",
  }),
  (palavra041 = {
    nome: "SERTANEJO",
    categoria: "GÊNERO MUSICAL",
  }),
  (palavra042 = {
    nome: "REGGAE",
    categoria: "GÊNERO MUSICAL",
  }),
  (palavra043 = {
    nome: "SAMBA",
    categoria: "GÊNERO MUSICAL",
  }),
  (palavra044 = {
    nome: "SIMPSONS",
    categoria: "DESENHO ANIMADO",
  }),
  (palavra045 = {
    nome: "TOM E JERRY",
    categoria: "DESENHO ANIMADO",
  }),
  (palavra046 = {
    nome: "HORA DE AVENTURA",
    categoria: "DESENHO ANIMADO",
  }),
  (palavra047 = {
    nome: "FUTURAMA",
    categoria: "DESENHO ANIMADO",
  }),
  (palavra048 = {
    nome: "MENINAS SUPERPODEROSAS",
    categoria: "DESENHO ANIMADO",
  }),
  (palavra49 = {
    nome: "GAME OF THRONES",
    categoria: "SÉRIE",
  }),
  (palavra050 = {
    nome: "BREAKING BAD",
    categoria: "SÉRIE",
  }),
  (palavra051 = {
    nome: "THE CROWN",
    categoria: "SÉRIE",
  }),
  (palavra052 = {
    nome: "THE MANDALORIAN",
    categoria: "SÉRIE",
  }),
  (palavra053 = {
    nome: "FRIENDS",
    categoria: "SÉRIE",
  }),
  (palavra054 = {
    nome: "BLACK MIRROR",
    categoria: "SÉRIE",
  }),
  (palavra055 = {
    nome: "THE OFFICE",
    categoria: "SÉRIE",
  }),
  (palavra056 = {
    nome: "NOVA YORK",
    categoria: "CIDADE",
  }),
  (palavra057 = {
    nome: "LONDRES",
    categoria: "CIDADE",
  }),
  (palavra058 = {
    nome: "RIO DE JANEIRO",
    categoria: "CIDADE",
  }),
  (palavra059 = {
    nome: "PEQUIM",
    categoria: "CIDADE",
  }),
  (palavra060 = {
    nome: "ROMA",
    categoria: "CIDADE",
  }),
  (palavra061 = {
    nome: "MOSCOU",
    categoria: "CIDADE",
  }),
  (palavra062 = {
    nome: "SYDNEY",
    categoria: "CIDADE",
  }),
  (palavra063 = {
    nome: "ISTAMBUL",
    categoria: "CIDADE",
  }),
  (palavra064 = {
    nome: "ENGENHEIRO",
    categoria: "PROFISSÃO",
  }),
  (palavra065 = {
    nome: "PROFESSOR",
    categoria: "PROFISSÃO",
  }),
  (palavra066 = {
    nome: "ADVOGADO",
    categoria: "PROFISSÃO",
  }),
  (palavra067 = {
    nome: "ENFERMEIRO",
    categoria: "PROFISSÃO",
  }),
  (palavra068 = {
    nome: "PROGRAMADOR",
    categoria: "PROFISSÃO",
  }),
  (palavra069 = {
    nome: "POLICIAL",
    categoria: "PROFISSÃO",
  }),
  (palavra070 = {
    nome: "ELETRICISTA",
    categoria: "PROFISSÃO",
  }),
  (palavra071 = {
    nome: "BOMBEIRO",
    categoria: "PROFISSÃO",
  }),
  (palavra072 = {
    nome: "TITANIC",
    categoria: "FILME",
  }),
  (palavra073 = {
    nome: "HARRY POTTER",
    categoria: "FILME",
  }),
  (palavra074 = {
    nome: "MATRIX",
    categoria: "FILME",
  }),
  (palavra075 = {
    nome: "STAR WARS",
    categoria: "FILME",
  }),
  (palavra076 = {
    nome: "REALIDADE VIRTUAL",
    categoria: "TECNOLOGIA",
  }),
  (palavra077 = {
    nome: "CRIPTOMOEDA",
    categoria: "TECNOLOGIA",
  }),
  (palavra079 = {
    nome: "DRONE",
    categoria: "TECNOLOGIA",
  }),
  (palavra080 = {
    nome: "BIOMETRIA",
    categoria: "TECNOLOGIA",
  }),
  (palavra081 = {
    nome: "HEADPHONE",
    categoria: "TECNOLOGIA",
  }),
  (palavra082 = {
    nome: "ELEFANTE",
    categoria: "ANIMAL",
  }),
  (palavra083 = {
    nome: "GIRAFA",
    categoria: "ANIMAL",
  }),
  (palavra084 = {
    nome: "MACACO",
    categoria: "ANIMAL",
  }),
  (palavra085 = {
    nome: "CACHORRO",
    categoria: "ANIMAL",
  }),
  (palavra086 = {
    nome: "GATO",
    categoria: "ANIMAL",
  }),
  (palavra087 = {
    nome: "PAPAGAIO",
    categoria: "ANIMAL",
  }),
  (palavra088 = {
    nome: "COELHO",
    categoria: "ANIMAL",
  }),
  (palavra089 = {
    nome: "TARTARUGA",
    categoria: "ANIMAL",
  }),
  (palavra090 = {
    nome: "GUEPARDO",
    categoria: "ANIMAL",
  }),
  (palavra091 = {
    nome: "LASANHA",
    categoria: "COMIDA",
  }),
  (palavra092 = {
    nome: "SUSHI",
    categoria: "COMIDA",
  }),
  (palavra093 = {
    nome: "CACHORRO QUENTE",
    categoria: "COMIDA",
  }),
  (palavra094 = {
    nome: "FUNDUE",
    categoria: "COMIDA",
  }),
  (palavra095 = {
    nome: "CHOCOLATE",
    categoria: "COMIDA",
  }),
  (palavra096 = {
    nome: "SALADA",
    categoria: "COMIDA",
  }),
  (palavra097 = {
    nome: "SORVETE",
    categoria: "COMIDA",
  }),
  (palavra098 = {
    nome: "ESPAGUETE",
    categoria: "COMIDA",
  }),
  (palavra099 = {
    nome: "COXINHA",
    categoria: "COMIDA",
  }),
  (palavra100 = {
    nome: "PIPOCA",
    categoria: "COMIDA",
  }),
];

criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length);
  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;
  carregaImagemForca();
  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      if (palavraSecretaSorteada[i] == " ") {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        listaDinamica[i] = "&nbsp;";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    } else {
      if (palavraSecretaSorteada[i] == " ") {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    }
  }
  document.getElementById("pontuacao").innerHTML =
    "<h1>PONTUAÇÃO: " + pontuacao + "</h1>";
}

function verificaLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    comparaListas(letra);
    montarPalavraNaTela();
    limparLetras.push(letra);
  }
}

function mudarStyleLetraErrada(tecla) {
  document.getElementById(tecla).style.background = vermelho;
}

function mudarStyleLetraCerta(tecla) {
  document.getElementById(tecla).style.background = verde;
}

async function comparaListas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--;
    mudarStyleLetraErrada("tecla-" + letra);
    if (tentativas == 0) {
      if (pontuacao > 0) {
        pontuacao -= 20;
      }
      abreModal(
        "OPS!",
        "Não foi dessa vez... A palavra secreta era: <br>" +
          palavraSecretaSorteada +
          "<br> Sua pontuação foi: " +
          pontuacao +
          " pontos"
      );
      jogarNovamente = true;
      piscarBotao();
    }
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++)
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
        mudarStyleLetraCerta("tecla-" + letra);
      }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }

  if (vitoria == true) {
    pontuacao += 10;
    abreModal(
      "PARABÉNS!",
      "Você acertou a palavra secreta! <br> Sua pontução é: " +
        pontuacao +
        " pontos"
    );
    jogarNovamente = true;
    tentativas = 0;
    piscarBotao();
  }
}

async function piscarBotao() {
  while (jogarNovamente == true) {
    document.getElementById("btnReiniciar").style.backgroundColor = "red";
    document.getElementById("btnReiniciar").style.scale = 1.3;
    await atraso(400);
    document.getElementById("btnReiniciar").style.backgroundColor = "green";
    document.getElementById("btnReiniciar").style.scale = 1.1;
    await atraso(400);
    document.getElementById("btnReiniciar").style.backgroundColor = "yellow";

    document.getElementById("btnReiniciar").style.scale = 1.3;
    await atraso(400);
    document.getElementById("btnReiniciar").style.backgroundColor = "blue";
    document.getElementById("btnReiniciar").style.scale = 1.1;
    await atraso(400);
  }
  document.getElementById("btnReiniciar").style.background = roxo;
  document.getElementById("btnReiniciar").style.scale = 1.0;
}

async function atraso(tempo) {
  return new Promise((x) => setTimeout(x, tempo));
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById(
        "imagem"
      ).innerHTML = `<img src="./imagens/forca01.png" alt="Uma forca com a cabeça nela." />`;
      break;
    case 4:
      document.getElementById(
        "imagem"
      ).innerHTML = `<img src="./imagens/forca02.png" alt="Uma forca com a cabeça e o tronco nela." />`;
      break;
    case 3:
      document.getElementById(
        "imagem"
      ).innerHTML = `<img src="./imagens/forca03.png" alt="Uma forca com o braço direito, o tronco e a cabeça nela." />`;
      break;
    case 2:
      document.getElementById(
        "imagem"
      ).innerHTML = `<img src="./imagens/forca04.png" alt="Uma forca com o braço esquerdo, braço direito, o tronco e a cabeça nela." />`;
      break;
    case 1:
      document.getElementById(
        "imagem"
      ).innerHTML = `<img src="./imagens/forca05.png" alt="Uma forca com a perna esquerda, o braço esquerdo, o braço direito, o tronco e a cabeça nela." />`;
      break;
    case 0:
      document.getElementById(
        "imagem"
      ).innerHTML = `<img src="./imagens/forca06.png" alt="Uma forca com a perna direita, a perna esquerda, o braço esquerdo, o braço direito, o tronco e a cabeça nela." />`;
      break;
    default:
      document.getElementById(
        "imagem"
      ).innerHTML = `<img src="./imagens/forca.png" alt="Uma forca" />`;
      break;
  }
}

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById("texto");
  modalTitulo.innerText = titulo;

  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;

  $("#myModal").modal({
    show: true,
  });
}

function inicio() {
  window.location.href = "jogo.html";
}

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function () {
  jogarNovamente = false;

  for (let i = 0; i < limparLetras.length; i++) {
    const element = limparLetras[i];
    document.getElementById("tecla-" + element).style.background = roxo;
    document.getElementById("tecla-" + element).disabled = false;
  }
  palavraTela = [];
  tentativas = 6;
  palavraSecretaSorteada = [];
  listaDinamica = [];
  document.getElementById("palavra-secreta").innerHTML = " ";
  criarPalavraSecreta();
  montarPalavraNaTela();
  limparLetras = [];
});
