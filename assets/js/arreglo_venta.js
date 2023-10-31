const propiedades_venta = [ 
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },  
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '89 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },  
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },  
    {
        nombre: 'Costa Azul',
        src: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/04/5f/43/d1.jpg',
        descripcion: 'Departamento con vista a las costas de coquimbo',
        ubicacion: 'Coquimbo 4985, Cuarta Región',
        habitaciones: 1,
        banos: 1,
        costo: 1500,
        smoke: false,
        pets: false
    },
]

function CrearTarjeta(propiedades_venta) {
    const venta = document.getElementById('propiedades_venta');

    const limite = 3;
    let contador = 0;

    for (const propiedad of propiedades_venta) {
        if (contador < limite) {

        const columna = document.createElement('div');
        columna.className = 'col-md-4 mb-4';

        const div = document.createElement('div');
        div.className = 'card';

        const imagen = document.createElement('img');
        imagen.className = 'card-img-top';
        imagen.src = propiedad.src;

        const titulo = document.createElement('div');
        titulo.className = 'card-body';

        const textotitulo = document.createElement('h5');
        textotitulo.className = 'card-title';
        textotitulo.textContent = propiedad.nombre;

        const descripcion = document.createElement('p');
        descripcion.className = 'card-text';
        descripcion.textContent = propiedad.descripcion;

        const ubicacion = document.createElement('p');
        const iconos = document.createElement('i');
        iconos.className = 'fas fa-map-marker-alt';
        ubicacion.textContent = propiedad.ubicacion;

        const habitaciones = document.createElement('p');
        const iconohabitacion = document.createElement('i');
        iconohabitacion.className = 'fas fa-bed';
        habitaciones.textContent = `Habitaciones: ${propiedad.habitaciones}`;

        const banos = document.createElement('p');
        const iconobano = document.createElement('i');
        iconobano.className = 'fas fa-bath';
        banos.textContent = `Baños: ${propiedad.banos}`;

        const costo = document.createElement('p');
        const iconoprecio = document.createElement('i');
        iconoprecio.className = 'fas fa-dollar-sign';
        costo.textContent = `Precio: $${propiedad.costo}`;

        const smoke = document.createElement('p')
        if (propiedad.smoke === false) {
        smoke.className = 'text-danger';
        smoke.textContent = 'Prohibido fumar';
        }
        else {
            smoke.className = 'text-success';
            smoke.textContent = 'Permitido fumar';
        }

        const pets = document.createElement('p')
        if (propiedad.pets === false) {
        smoke.className = 'text-danger';
        smoke.textContent = 'No admiten mascotas';
        }
        else {
            smoke.className = 'text-success';
            smoke.textContent = 'Se admiten mascotas';
        }

        titulo.appendChild(textotitulo);
        titulo.appendChild(descripcion);
        titulo.appendChild(ubicacion);
        titulo.appendChild(habitaciones);
        titulo.appendChild(banos);
        titulo.appendChild(costo);
        titulo.appendChild(smoke);
        titulo.appendChild(pets);


        div.appendChild(imagen);
        div.appendChild(titulo);

        columna.appendChild(div);

        venta.querySelector('.row').appendChild(columna);

        contador++;
 } 
    else {
        break;
    }
}
}

CrearTarjeta(propiedades_venta);
