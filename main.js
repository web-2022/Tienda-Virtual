
  //Cargamos nuestros cursos a vender

const carrito = [];
const cursos = [
    {
        id: 1,
        nombre: 'Planeamiento',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 40, intermedio: 80, avanzado: 120 },
        estado: 'No disponible',
    },

    {
        id: 2,
        nombre: 'Operaciones',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 45, intermedio: 85, avanzado: 125 },
        estado: 'Disponible',
    },

    {
        id: 3,
        nombre: 'Seguridad',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 35, intermedio: 75, avanzado: 115 },
        estado: 'No disponible',
    },

    {
        id: 4,
        nombre: 'Costos',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 40, intermedio: 85, avanzado: 125 },
        estado: 'Disponible',
    },

    {
        id: 5,
        nombre: 'Contabilidad',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 20, intermedio: 40, avanzado: 60 },
        estado: 'Disponible',
    },

    {
        id: 6,
        nombre: 'Finanzas',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 20, intermedio: 40, avanzado: 60 },
        estado: 'No disponible',
    },

    {
        id: 7,
        nombre: 'Geomecánica',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 20, intermedio: 40, avanzado: 60 },
        estado: 'Disponible',
    },

    {
        id: 8,
        nombre: 'Geología',
        nivel: { basico: 'principiantes', intermedio: 'experiencia previa', avanzado: 'requieren resolver ejercicios' },
        precio: { basico: 20, intermedio: 40, avanzado: 60 },
        estado: 'Disponible',
    },
]


// Agrego al contador el número de cursos a comprar
function agregarAlCarrito (id) {
    let found = cursos[id].estado; 

   if(found === 'Disponible'){
   
    let mensaje = document.getElementById("btn-mensaje"); 
    mensaje.innerText = "Curso Disponible"

    const resultado = cursos.find((curso) => curso.id === id);   
    carrito.push(resultado);
    document.getElementById('carrito-elementos').innerHTML = carrito.length;

   }else{
    let mensaje = document.getElementById("btn-mensaje"); 
    mensaje.innerText = "Curso no disponible"
   }
    
}

//Elimino el último curso que deseaba comprar
function borrar () {
    carrito.pop();
    document.getElementById('carrito-elementos').innerHTML = carrito.length;
}