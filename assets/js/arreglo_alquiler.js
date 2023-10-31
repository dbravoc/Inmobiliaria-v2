const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Buchupureo',
        src: 'https://www.playalobos.cl/images/casas/buchupureo/buchupureo1.jpg',
        descripcion: 'Refugio en Buchupureo dentro de un entorno de naturaleza y mar',
        ubicacion: 'Los Maquis, Buchupureo',
        habitaciones: 2,
        banos: 1,
        costo: 3500,
        smoke: false,
        pets: true
    },
];

function CrearTarjeta_A(propiedades_alquiler) {
    const alquiler = document.getElementById('propiedades_alquiler');

    const limite = 3;
    let contador = 0;

    for (const propiedad of propiedades_alquiler) {
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

        alquiler.querySelector('.row').appendChild(columna);

        
        contador++;
 } 
    else {
        break;
    }
    }
}

CrearTarjeta_A(propiedades_alquiler);
