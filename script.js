/* ===========================================================
   CONTEÚDO — é só editar aqui. Imagens ficam na pasta /img.
   Sem "img", aparece um bloco colorido no lugar (placeholder).
   r = proporção largura/altura da foto (0.8 = retrato, 1.3 = paisagem)
   Os textos abaixo são uma primeira versão: a Ingrid pode (e deve)
   reescrever com a voz dela.
   =========================================================== */
const SITE = {
  nome: "Artes da In 🍎",
  foto: "ing.jpg", // foto de perfil (quadrada), ex.: "img/perfil.jpg". Vazio = mostra as iniciais
  tagline: [
    "Um canto pequeno onde o papel vira conversa",
    "e a linha vira um jeito de olhar."
  ],
  whatsapp: "5515999999999", // DDI + DDD + número, só dígitos
  instagram: "https://br.pinterest.com/eu_indasartes/",
  pinterest: "https://br.pinterest.com/eu_indasartes/",
  sobre: [
    "Tudo começa num rabisco, desses que a gente faz sem pensar. Depois vira desenho, vira cena de quadrinho, vira bordado numa bolsa que vai passear por aí.",
    "Este canto é onde eu guardo essas coisas pequenas: o que nasce devagar, com as mãos sujas de tinta e a cabeça em outro lugar.",
    "Se alguma delas combinar com você, pode levar. Fico feliz só de saber que ela vai morar numa casa nova."
  ],
  assinatura: "Ingrid",
  frase: "Nada aqui nasceu com pressa.",
  processo: [
    { t: "Rabisco", d: "Tudo começa num caderno, sem compromisso. Uma ideia vira traço." },
    { t: "Mão na massa", d: "Tinta, linha e agulha. Cada peça leva o tempo que precisar." },
    { t: "Embrulho com carinho", d: "Chega até você embalada com cuidado, do jeito que eu gostaria de receber." }
  ],
  encomenda: {
    titulo: "Quer algo só seu?",
    texto: "Desenho, bolsa ou quadrinho sob encomenda. Conta a ideia e a gente cria junto.",
    mensagem: "Oi! Quero fazer uma encomenda."
  }
};

const CATEGORIAS = ["Quadrinhos", "Bolsas", "Desenhos"];

const OBRAS = [
  { titulo: "Manhã comprida",     cat: "Desenhos",   img: "", r: 0.8,  cor: "#d9c9b4" },
  { titulo: "Quase um segredo",   cat: "Quadrinhos", img: "", r: 1.2,  cor: "#b9a58f" },
  { titulo: "Pra carregar o dia", cat: "Bolsas",     img: "", r: 1,    cor: "#6e6a4e" },
  { titulo: "Traço solto",        cat: "Desenhos",   img: "", r: 0.7,  cor: "#e8dfd2" },
  { titulo: "Conversa de balcão", cat: "Quadrinhos", img: "", r: 0.9,  cor: "#9a6f52" },
  { titulo: "Bolsa de feira",     cat: "Bolsas",     img: "", r: 1.25, cor: "#2a2622" },
  { titulo: "Ainda é verão",      cat: "Desenhos",   img: "", r: 1,    cor: "#cbbba5" },
  { titulo: "Cena sem pressa",    cat: "Quadrinhos", img: "", r: 0.75, cor: "#8b8466" }
];

const PRODUTOS = [
  { nome: "Bolsa tote bordada", desc: "Bordada à mão, linha por linha, para acompanhar seus dias.", preco: 120,  img: "", cor: "#cbbba5", disponivel: true },
  { nome: "Quadrinho A5",       desc: "Uma cena, uma pausa. Ilustração original em papel 180g.",     preco: 85,   img: "", cor: "#e8dfd2", disponivel: true },
  { nome: "Pano de prato",      desc: "Arte pintada à mão para deixar a cozinha mais gentil.",       preco: 45,   img: "", cor: "#9a6f52", disponivel: true },
  { nome: "Mini zine",          desc: "Dezesseis páginas para ler devagar. Tiragem pequena.",        preco: 35.5, img: "", cor: "#6e6a4e", disponivel: false }
];

/* ===========================================================
   CÓDIGO
   =========================================================== */
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const midia = (i, alt) => i.img
  ? `<img src="${esc(i.img)}" alt="${esc(alt)}" loading="lazy" decoding="async">`
  : `<div class="ph" role="img" aria-label="${esc(alt)}" style="background:${esc(i.cor || "#e8dfd2")}"></div>`;

let filtro = "Tudo";

const moldura = (o, extra = "") =>
  `<button class="obra ${extra}" style="--r:${o.r || 1}" data-i="${OBRAS.indexOf(o)}" aria-label="Ampliar: ${esc(o.titulo)}"><span class="foto">${midia(o, o.titulo)}</span><span class="legenda">${esc(o.titulo)}</span></button>`;

function extras() {
  $("#avatar").innerHTML = SITE.foto
    ? `<img src="${esc(SITE.foto)}" alt="Foto de perfil de ${esc(SITE.nome)}" decoding="async">`
    : `<span>In</span>`;
  $("#seguir").href = SITE.instagram;
  $("#colagem").innerHTML = OBRAS.slice(0, 3).map(o => moldura(o, "solta")).join("");
  $("#frase").textContent = SITE.frase;
  $("#passos").innerHTML = SITE.processo.map(p => `<li><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></li>`).join("");
  $("#enc-titulo").textContent = SITE.encomenda.titulo;
  $("#enc-texto").textContent = SITE.encomenda.texto;
  $("#enc-link").href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.encomenda.mensagem)}`;
}

function topo() {
  document.title = SITE.nome;
  $("#nome").textContent = SITE.nome;
  $("#tagline").innerHTML = SITE.tagline.map(esc).join("<br>");
  $("#sobre-texto").innerHTML = SITE.sobre.map(t => `<p>${esc(t)}</p>`).join("") + `<p class="assina">${esc(SITE.assinatura)}</p>`;
  $("#redes").innerHTML =
    `<a href="${esc(SITE.instagram)}" target="_blank" rel="noopener">Instagram</a>` +
    `<a href="${esc(SITE.pinterest)}" target="_blank" rel="noopener">Pinterest</a>`;
}

function chips() {
  $("#chips").innerHTML = ["Tudo", ...CATEGORIAS]
    .map(c => `<button class="chip" data-cat="${esc(c)}" aria-pressed="${c === filtro}">${esc(c)}</button>`)
    .join("");
}

function mural() {
  const lista = OBRAS.filter(o => filtro === "Tudo" || o.cat === filtro);
  $("#mural").innerHTML = lista.map(o =>
    moldura(o)
  ).join("");
}

function vitrine() {
  $("#vitrine").innerHTML = PRODUTOS.map(p => {
    const msg = `Oi! Quero comprar: ${p.nome} (${brl(p.preco)}). Ainda está disponível?`;
    const link = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
    return `<article class="item">
      <div class="foto">${midia(p, p.nome)}</div>
      <h3>${esc(p.nome)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="preco">${brl(p.preco)}</div>
      ${p.disponivel
        ? `<a class="comprar" href="${link}" target="_blank" rel="noopener">Comprar no WhatsApp</a>`
        : `<span class="comprar off">Esgotado</span>`}
    </article>`;
  }).join("");
}

/* filtros */
$("#chips").addEventListener("click", e => {
  const b = e.target.closest(".chip");
  if (!b) return;
  filtro = b.dataset.cat;
  chips();
  mural();
});

/* visualizador */
const visor = $("#visor");
document.addEventListener("click", e => {
  const b = e.target.closest(".obra");
  if (!b) return;
  const o = OBRAS[b.dataset.i];
  const fig = $("#visor-fig");
  fig.style.setProperty("--r", o.r || 1);
  fig.innerHTML = `${midia(o, o.titulo)}<figcaption>${esc(o.titulo)}</figcaption>`;
  visor.showModal();
});
$("#fechar").addEventListener("click", () => visor.close());
visor.addEventListener("click", e => { if (e.target === visor || e.target.tagName === "FIGURE") visor.close(); });

/* item ativo na navegação */
const links = [...document.querySelectorAll(".nav a")];
const io = new IntersectionObserver(es => {
  es.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === `#${en.target.id}`));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach(s => io.observe(s));

topo(); extras(); chips(); mural(); vitrine();