var destinos = [
  {
    nombre: "Lago Titicaca",
    img: "imagenes/lago titicaca.jpg",
    cat: "lago",
    desc: "El lago navegable más alto del mundo a 3,827 m.s.n.m. Compartido entre Perú y Bolivia."
  },

  {
    nombre: "Islas Flotantes de los Uros",
    img: "imagenes/isla uros.jpg",
    cat: "isla",
    desc: "Islas artificiales construidas con totora por el pueblo Uro. Ingeniería ancestral única."
  },

  {
    nombre: "Isla Taquile",
    img: "imagenes/isla taquile.jpg",
    cat: "isla",
    desc: "Famosa por sus textiles declarados Patrimonio Inmaterial de la UNESCO."
  },

  {
    nombre: "Isla Amantaní",
    img: "imagenes/amantani.jpg",
    cat: "isla",
    desc: "La isla más grande del Titicaca peruano con turismo vivencial quechua."
  },

  {
    nombre: "Sillustani",
    img: "imagenes/Chulpas sillustani.jpg",
    cat: "arqueologia",
    desc: "Complejo funerario con chullpas (torres) de hasta 12 m."
  },

  {
    nombre: "Cutimbo",
    img: "imagenes/Cutimbo.jpg",
    cat: "arqueologia",
    desc: "Meseta con chullpas en buen estado y petroglifos."
  },

  {
    nombre: "Lampa",
    img: "imagenes/lampa.jpg",
    cat: "arqueologia",
    desc: "La ciudad rosada con arquitectura colonial."
  }
];

var gastronomia = [
{
  nombre: "Chuño y Moraya",
  imagen: "imagenes/chuno.jpg",
  desc: "Papa deshidratada mediante métodos ancestrales andinos usando el frío del altiplano.",
  ingredientes: "Papa nativa, heladas andinas naturales, agua de río."
},
{
  nombre: "Trucha Frita",
  imagen: "imagenes/trucha.jpg",
  desc: "La trucha del Lago Titicaca frita o a la plancha.",
  ingredientes: "Trucha del Titicaca, limón, ají amarillo, sal, aceite."
},
{
  nombre: "Cuy Chactado",
  imagen: "imagenes/cuy.jpg",
  desc: "Plato emblemático andino.",
  ingredientes: "Cuy, especias andinas, papa nativa, maní."
},
{
  nombre: "Pesque de Quinoa",
  imagen: "imagenes/quinoa.jpg",
  desc: "Gachas espesas de quinoa cocida con leche y queso fresco.",
  ingredientes: "Quinoa real, leche, queso fresco, mantequilla, sal."
},
{
  nombre: "Api con Pastel",
  imagen: "imagenes/api.jpg",
  desc: "Bebida caliente de maíz morado con clavo y canela.",
  ingredientes: "Maíz morado, canela, clavo de olor, azúcar."
},
{
  nombre: "Mazamorra de Calabaza",
  imagen: "imagenes/mazamorra.jpg",
  desc: "Postre tradicional de zapallo con chancaca y especias.",
  ingredientes: "Zapallo, chancaca, chuño, canela."
}
];

var puntosMapa = [
  { nombre: "Plaza de Puno",         lat: -15.8402, lng: -70.0219, nota: "Centro histórico de la ciudad" },
  { nombre: "Lago Titicaca",         lat: -15.9254, lng: -69.3354, nota: "El lago navegable más alto del mundo" },
  { nombre: "Islas Flotantes Uros",  lat: -15.8210, lng: -69.9660, nota: "Islas artificiales de totora" },
  { nombre: "Isla Taquile",          lat: -15.7720, lng: -69.6790, nota: "Patrimonio Inmaterial UNESCO" },
  { nombre: "Sillustani",            lat: -15.7178, lng: -70.1031, nota: "Chullpas funerarias preinca" },
  { nombre: "Cutimbo",               lat: -15.9700, lng: -70.1300, nota: "Petroglifos y chullpas Tiahuanaco" }
];

function renderDestinos(filtro) {
  var grid = document.getElementById("gridDestinos");
  var lista = [];

  for (var i = 0; i < destinos.length; i++) {
    if (filtro === "all" || destinos[i].cat === filtro) {
      lista.push(destinos[i]);
    }
  }

  var html = "";

  for (var j = 0; j < lista.length; j++) {
    var d = lista[j];

    html += '<div class="col-sm-6 col-lg-4">';
    html += '  <div class="card-destino h-100">';

    html += '    <img src="' + d.img + '" class="card-img-top" alt="' + d.nombre + '">';

    html += '    <div class="card-body">';
    html += '      <h5 class="card-title">' + d.nombre + '</h5>';
    html += '      <span class="badge bg-warning text-dark mb-2">' + d.cat + '</span>';
    html += '      <p class="card-text small">' + d.desc + '</p>';
    html += '    </div>';

    html += '  </div>';
    html += '</div>';
  }

  grid.innerHTML = html;
}

var btnsFiltro = document.querySelectorAll(".btn-filtro");

for (var i = 0; i < btnsFiltro.length; i++) {
  btnsFiltro[i].addEventListener("click", function() {
    for (var k = 0; k < btnsFiltro.length; k++) {
      btnsFiltro[k].classList.remove("active");
    }
    this.classList.add("active");
    renderDestinos(this.getAttribute("data-filtro"));
  });
}

function renderGastronomia() {
  var grid = document.getElementById("gridGastro");
  var html = "";

  for (var i = 0; i < gastronomia.length; i++) {
    var g = gastronomia[i];
    html += '<div class="col-sm-6 col-lg-4">';
    html += '  <div class="card-gastro h-100" data-index="' + i + '" data-bs-toggle="modal" data-bs-target="#modalGastro">';
    html += '    <img src="' + g.imagen + '" class="img-gastro" alt="' + g.nombre + '">';
    html += '    <div class="card-body">';
    html += '      <h5 class="card-title">' + g.nombre + '</h5>';
    html += '      <p class="card-text small">' + g.desc.substring(0, 80) + '…</p>';
    html += '      <span class="badge bg-warning text-dark">Ver receta</span>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
  }
  grid.innerHTML = html;

  var cardsGastro = document.querySelectorAll(".card-gastro");
  for (var j = 0; j < cardsGastro.length; j++) {
    cardsGastro[j].addEventListener("click", function() {
      var idx = this.getAttribute("data-index");
      var item = gastronomia[idx];
      document.getElementById("modalTitulo").textContent = item.emoji + " " + item.nombre;
      document.getElementById("modalCuerpo").innerHTML =
        "<p>" + item.desc + "</p><hr>" +
        "<p><strong>🧂 Ingredientes principales:</strong><br>" + item.ingredientes + "</p>";
    });
  }
}

function initMapa() {
  var mapa = L.map("mapaLeaflet").setView([-15.84, -70.02], 9);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(mapa);

  for (var i = 0; i < puntosMapa.length; i++) {
    var p = puntosMapa[i];
    L.marker([p.lat, p.lng])
      .addTo(mapa)
      .bindPopup("<strong>" + p.nombre + "</strong><br>" + p.nota);
  }
}

var btnTema = document.getElementById("toggleTheme");
var htmlEl  = document.documentElement;

var temaGuardado = localStorage.getItem("punoTema") || "light";
htmlEl.setAttribute("data-theme", temaGuardado);
btnTema.textContent = temaGuardado === "dark" ? "☀️" : "🌙";

btnTema.addEventListener("click", function() {
  var actual   = htmlEl.getAttribute("data-theme");
  var siguiente = actual === "dark" ? "light" : "dark";
  htmlEl.setAttribute("data-theme", siguiente);
  btnTema.textContent = siguiente === "dark" ? "☀️" : "🌙";
  localStorage.setItem("punoTema", siguiente);
});

window.addEventListener("scroll", function() {
  var nav = document.getElementById("mainNav");
  if (window.scrollY > 60) {
    nav.style.background = "rgba(26,26,46,0.99)";
  } else {
    nav.style.background = "rgba(26,26,46,0.96)";
  }
});

document.getElementById("txtPresupuesto").addEventListener("input", function() {
  var val = Number(this.value);
  var fb  = document.getElementById("feedbackPresupuesto");
  if (val < 100) {
    fb.textContent = "⚠️ Presupuesto bajo para Puno (mínimo recomendado S/. 100/día)";
    fb.style.color = "red";
  } else if (val < 200) {
    fb.textContent = "✅ Presupuesto básico — hospedaje y comida cubiertos";
    fb.style.color = "green";
  } else {
    fb.textContent = "🌟 Presupuesto cómodo — puedes incluir tours guiados";
    fb.style.color = "var(--titicaca)";
  }
});

function validarCampo(el, condicion) {
  if (condicion) {
    el.classList.remove("is-invalid");
    el.classList.add("is-valid");
  } else {
    el.classList.add("is-invalid");
    el.classList.remove("is-valid");
  }
  return condicion;
}

document.getElementById("btnGenerar").addEventListener("click", function() {
  var nombre     = document.getElementById("txtNombre");
  var fecha      = document.getElementById("txtFecha");
  var dias       = document.getElementById("txtDias");
  var presupuesto = document.getElementById("txtPresupuesto");

  var v1 = validarCampo(nombre,      nombre.value.trim().length >= 3);
  var v2 = validarCampo(fecha,       fecha.value !== "");
  var v3 = validarCampo(dias,        dias.value >= 1 && dias.value <= 30);
  var v4 = validarCampo(presupuesto, presupuesto.value >= 50);

  var alerta = document.getElementById("alertaForm");

  if (!v1 || !v2 || !v3 || !v4) {
    alerta.className = "alert alert-danger";
    alerta.textContent = "⚠️ Por favor corrige los campos marcados.";
    alerta.classList.remove("d-none");
    return;
  }
  alerta.classList.add("d-none");

  var checks  = document.querySelectorAll(".chk-dest:checked");
  var selects = [];
  for (var i = 0; i < checks.length; i++) {
    selects.push(checks[i].value);
  }
  if (selects.length === 0) {
    selects = ["Lago Titicaca", "Islas Uros"];
  }

  var numDias    = Number(dias.value);
  var numPres    = Number(presupuesto.value);
  var totalPres  = numDias * numPres;
  var porDia     = Math.ceil(selects.length / numDias) || 1;

  var diasHtml = "";
  for (var d = 1; d <= numDias; d++) {
    var slice = selects.slice((d - 1) * porDia, d * porDia);
    var actividades = slice.length > 0 ? slice.join(", ") : "Exploración libre en Puno";
    diasHtml += '<div class="dia-item">📅 <strong>Día ' + d + ':</strong> ' + actividades + '</div>';
  }

  var resultado = document.getElementById("resultadoItinerario");
  resultado.innerHTML =
    '<h5 class="mb-3">🗺️ Itinerario de <strong>' + nombre.value + '</strong></h5>' +
    diasHtml +
    '<hr>' +
    '<p class="mb-1">📅 <strong>Llegada:</strong> ' + fecha.value + '</p>' +
    '<p class="mb-1">💰 <strong>Presupuesto total estimado:</strong> S/. ' + totalPres.toLocaleString() + '</p>' +
    '<span class="badge bg-success fs-6">¡Listo para viajar! ✈️</span>';
  resultado.classList.remove("d-none");
});
renderDestinos("all");
renderGastronomia();
initMapa();