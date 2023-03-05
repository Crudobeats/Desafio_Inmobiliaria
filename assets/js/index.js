const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "assets/imgs/img1.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "assets/imgs/img2.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "assets/imgs/img3.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "assets/imgs/img4.JPG",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "assets/imgs/img5.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "assets/imgs/img6.JPG",
    rooms: 5,
    m: 500,
  },
];

let contenedor = document.querySelector("#contenedor");

function busquedaPropiedad(propiedad) {
  let card = `
  <div class="col-md-auto">
      <div class="card mx-auto mb-5">
          <div class="card" style="width: 18rem;">
              <img src="${propiedad.src}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-dark">${propiedad.name}</h5>
                <p class="card-text text-dark">${propiedad.description}</p>
                <p class="card-text text-dark">Cantidad de Cuartos:${propiedad.rooms}</p>
                <p class="card-text text-dark">Metros de Propiedad:${propiedad.m}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
      </div>
    </div>
  `;
  contenedor.innerHTML += card;
}

function cargaInicial() {
  let counter = 0;
  contenedor.innerHTML = "";
  for (let propiedad of propiedadesJSON) {
    busquedaPropiedad(propiedad);
    counter++;
  }
  document.querySelector("#total").innerHTML = counter;
}

function busqueda() {
  const hab = document.querySelector("#rooms").value;
  const desde = document.querySelector("#desde").value;
  const hasta = document.querySelector("#hasta").value;

  if (
    isNaN(hab) == false &&
    hab > 0 &&
    isNaN(desde) == false &&
    desde > 0 &&
    isNaN(hasta) == false &&
    hasta > 0
  ) {
    if (desde > hasta) {
      alert("El valor Desde no puede ser mayor que el valor Hasta");
    } else {
      let counter = 0;
      contenedor.innerHTML = "";
      for (let propiedad of propiedadesJSON) {
        //Busca un mínimo de habitaciones en el rango desde y hasta en metraje
        if (
          propiedad.cuartos >= hab &&
          propiedad.metros >= desde &&
          propiedad.metros <= hasta
        ) {
          busquedaPropiedad(propiedad);
          counter++;
        }
      }
      document.querySelector("#total").innerHTML = counter;
    }
  } else {
    alert(
      "Uno o más parmáetros de búsqueda son erroneos o estan vacios, favor revise antes de continuar"
    );
  }
}
