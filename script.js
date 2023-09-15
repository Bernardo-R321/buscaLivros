let texto = document.getElementById("input");
let imagem = document.getElementById("imagem");
let botaoPesquisar = document.getElementById("pesquisar");
let titulo = document.getElementById("titulo");
let isbn = document.getElementById("isbn");
let synopsis = document.getElementById("synopsis");
let authors = document.getElementById("authors");
let publisher = document.getElementById("publisher");
let year = document.getElementById("year");
let format = document.getElementById("format");
let subjects = document.getElementById("subjects");

async function getLivro(codigo) {
  let resposta = await fetch(`https://brasilapi.com.br/api/isbn/v1/${codigo}`).then((resposta) =>{
    if(resposta.status === 400){
        alert('Código ISBN inválido!');
    }else{
        return resposta;
    }
  });

  let retornoJson = await resposta.json();
  if (retornoJson.isbn != undefined) {
    isbn.textContent = 'ISBN: ' + retornoJson.isbn;
  } else {
    isbn.textContent = "N/A";
  }

  if (retornoJson.titulo != undefined) {
    titulo.textContent = 'Título: ' + retornoJson.titulo;
  } else {
    titulo.textContent = "N/A";
  }

  if (retornoJson.synopsis != undefined) {
    synopsis.textContent = 'Sinopse: ' + retornoJson.synopsis;
  } else {
    synopsis.textContent = "N/A";
  }

  if (retornoJson.authors != undefined) {
    let autores = "";
    for (i = 0; i < retornoJson.authors.length; i++) {
      autores += retornoJson.authors[i] + " ";
    }
    authors.textContent = 'Autor(es): ' + autores;
  } else {
    authors.textContent = "N/A";
  }

  if (retornoJson.publisher != undefined) {
    publisher.textContent = 'Editora: ' + retornoJson.publisher;
  } else {
    publisher.textContent = "N/A";
  }

  if (retornoJson.year != undefined) {
    year.textContent = 'Ano: ' + retornoJson.year;
  } else {
    year.textContent = "N/A";
  }

  if (retornoJson.format != undefined) {
    format.textContent = 'Formato: ' +  retornoJson.format;
  } else {
    format.textContent = "N/A";
  }

  if (retornoJson.subjects != undefined) {
    let genero = "";
    for (i = 0; i < retornoJson.subjects.length; i++) {
      genero += retornoJson.subjects[i] + " ";
    }
    subjects.textContent = 'Gênero: ' + genero;
  } else {
    subjects.textContent = "N/A";
  }

  imagem.src = retornoJson.cover_url;
  imagem.alt = 'Capa do livro';
}

botaoPesquisar.addEventListener("click", () => {
    getLivro(texto.value);
  
});
