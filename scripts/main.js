// Detectar evento de redimensionar tela
window.addEventListener("resize", function (e) {
  // Seleciona a div que será onde irá mostrar a resolução
  // e breakpoint
  const brWatcher = document.getElementById("breakpoint-watcher");

  // Caso ele exista na página mostre a resolução
  if (brWatcher) {
    brWatcher.innerHTML = `${window.innerWidth} x ${
      window.innerHeight
    } <i>(${breakpoint(window.innerWidth)})</i>`;
  }
});

// Condicional que segue a tabela da documentação
function breakpoint(width) {
  if (width < 576) {
    return "xs";
  } else if (width < 768) {
    return "sm";
  } else if (width < 992) {
    return "md";
  } else if (width < 1200) {
    return "lg";
  } else if (width < 1400) {
    return "xl";
  } else {
    return "xxl";
  }
}

const news = [
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "saude",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "saude",
  },
];

class NoticiasBuilder {
  build(categoria) {
    let noticiasHtml = "";

    const noticiasFiltro = news
      .filter((news) => news.categoria === categoria)

      noticiasFiltro.forEach((news) => {
        noticiasHtml += `
      <div class="col-md-6 col-lg-4 col-xl-3 mt-3">
          <div class="card">
            <div class="card-header">
              <img src="${news.img}" class="img-fluid" />
            </div>
            <div class="card-body">
              <h5 class="card-title">${news.titulo}</h5>
              <p class="card-text">${news.desc}</p>
              <a href="#" class="btn btn-primary">Ler mais</a>
            </div>
          </div>
        </div>
      `;
      });

    return noticiasHtml;
  }
}

const noticias = new NoticiasBuilder();
const gridEsportes = document.getElementById("grid-esportes");
const gridSaude = document.getElementById("grid-saude");

if (gridEsportes) gridEsportes.innerHTML = noticias.build("esportes");
if (gridSaude) gridSaude.innerHTML = noticias.build("saude");
