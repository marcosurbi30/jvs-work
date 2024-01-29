

/*   Creador de Nombres de Bandas Aleatorios         */ 

function crearNombreBandaRandom() {
    let palabrasInusuales = ["Gringos", "Malnacidos", "Descabellados", "Chinwenwenchas", "Fisuras"];
    let coloresExtravagantes = ["Beiges", "Dorados", "Platinados", "Magenta", ""];
    let animalesExoticos = ["Pandas", "Koalas", "Camellos", "Canguros", "Cobras"];

    let palabraInusualRandom = palabrasInusuales[Math.floor(Math.random() * palabrasInusuales.length)];
    let colorExtravaganteRandom = coloresExtravagantes[Math.floor(Math.random() * coloresExtravagantes.length)];
    let animalExoticoRandom = animalesExoticos[Math.floor(Math.random() * animalesExoticos.length)];

    let nombreBanda = `${animalExoticoRandom} ${colorExtravaganteRandom} ${palabraInusualRandom}`;

    return nombreBanda;
}


let nombreBandaRandom = crearNombreBandaRandom();
console.log(`Los ${nombreBandaRandom}`);








/*   Conversor de Emociones a Emoji     */ 

function emocionEmoji(emocion) {
    switch (emocion.toLowerCase()) {
        case "feliz":
            return "🙂";
        case "triste":
            return "😪";
        case "sorprendido":
            return "😯";
    }
}

let textoEmoji = "triste";
let emoji = emocionEmoji(textoEmoji);
console.log(emoji);








/*  Generador de Historias Absurdas    */

function generarHistoriaAbsurda() {
    let personajes = ["pingüinos", "robots", "astronautas", "mascotas alienígenas"];
    let acciones = ["hablan francés", "están enamorados de plantas", "se pierden en el espacio", "organizan una fiesta loca"];
    let lugares = ["en la Antártida", "en un jardín botánico intergaláctico", "en una nave espacial", "en un planeta desconocido"];

    let personajeRandom = personajes[Math.floor(Math.random() * personajes.length)];
    let accionRandom = acciones[Math.floor(Math.random() * acciones.length)];
    let lugarRandom = lugares[Math.floor(Math.random() * lugares.length)];

    let historiaAbsurda = `Un grupo de ${personajeRandom} ${accionRandom} ${lugarRandom}. ¡La situación se vuelve cada vez más absurda!`;

    return historiaAbsurda;
}

let historiaGenerada = generarHistoriaAbsurda();
console.log(historiaGenerada);








/*  Simulador de Viaje en el Tiempo Musical  */ 

function recomendarCancionesPorAnio(anio) {
    // Crear un objeto con recomendaciones para diferentes años
    let recomendacionesPorAnio = {
        1960: ["The Beatles - Hey Jude", "Elvis Presley - It's Now or Never", "The Supremes - Where Did Our Love Go"],
        1970: ["Led Zeppelin - Stairway to Heaven", "Queen - Bohemian Rhapsody", "David Bowie - Space Oddity"],
        1980: ["Michael Jackson - Billie Jean", "Madonna - Like a Virgin", "Queen - Another One Bites the Dust"],
        1990: ["Nirvana - Smells Like Teen Spirit", "Backstreet Boys - I Want It That Way", "Britney Spears - ...Baby One More Time"],
        2000: ["Eminem - Lose Yourself", "Beyoncé - Crazy in Love", "Coldplay - Viva la Vida"],
        2010: ["Ed Sheeran - Shape of You", "Taylor Swift - Shake It Off", "Bruno Mars - Uptown Funk"]
        // Puedes seguir agregando más años y canciones según tus preferencias
    };

    // Obtener las recomendaciones para el año proporcionado
    let recomendaciones = recomendacionesPorAnio[anio];

    if (recomendaciones) {
        return `Recomendaciones musicales para el año ${anio}:\n${recomendaciones.join("\n")}`;
    } else {
        return `Lo siento, no tengo recomendaciones para el año ${anio}. ¡Intenta con otro año!`;
    }
}

// Ejemplo de uso:
let anioViaje = 1980; // Cambia este valor según el año de tu "viaje en el tiempo"
let recomendacionesMusicales = recomendarCancionesPorAnio(anioViaje);
console.log(recomendacionesMusicales);









/*  Creador de Recetas Culinarias del Futuro   */

function crearRecetaCulinariaFuturista() {
    // Listas de ingredientes inusuales y técnicas de cocina avanzadas
    let ingredientesInusuales = ["polvo de meteorito", "alga bioluminiscente", "nubes de carbono", "esencia de holograma"];
    let tecnicasAvanzadas = ["teletransportación molecular", "cocina cuántica", "impresión 3D alimentaria", "hidratación molecular"];

    // Seleccionar aleatoriamente ingredientes y técnicas
    let ingredienteAleatorio = ingredientesInusuales[Math.floor(Math.random() * ingredientesInusuales.length)];
    let tecnicaAleatoria = tecnicasAvanzadas[Math.floor(Math.random() * tecnicasAvanzadas.length)];

    // Crear la receta futurista
    let recetaFuturista = `¡Bienvenido a la cocina del futuro!\nHoy te presentamos: Platillo ${ingredienteAleatorio} con ${tecnicaAleatoria}. ¡Sabor único y experiencias culinarias avanzadas!`;

    return recetaFuturista;
}

// Ejemplo de uso:
let recetaFuturistaGenerada = crearRecetaCulinariaFuturista();
console.log(recetaFuturistaGenerada);









/*   Generador de Planetas Fantásticos   */

function generarPlanetaFantastico() {
    // Listas de elementos para combinar
    let colores = ["rojo", "azul", "verde", "morado", "naranja"];
    let elementosQuimicos = ["neón", "xenón", "hidrógeno", "helio", "carbono"];
    let fenomenosCosmicos = ["tormenta de meteoritos", "auroras mágicas", "anillos resplandecientes", "nebulosa en espiral"];

    // Seleccionar aleatoriamente elementos para combinar
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    let elementoQuimicoAleatorio = elementosQuimicos[Math.floor(Math.random() * elementosQuimicos.length)];
    let fenomenoCosmicoAleatorio = fenomenosCosmicos[Math.floor(Math.random() * fenomenosCosmicos.length)];

    // Generar el nombre y características del planeta
    let nombrePlaneta = `${colorAleatorio} ${elementoQuimicoAleatorio} ${fenomenoCosmicoAleatorio}`;
    let caracteristicasPlaneta = `Un fascinante planeta con un color predominante de ${colorAleatorio}, compuesto principalmente de ${elementoQuimicoAleatorio}, y caracterizado por ${fenomenoCosmicoAleatorio}. ¡Explora este increíble mundo!`;

    return { nombre: nombrePlaneta, caracteristicas: caracteristicasPlaneta };
}

// Ejemplo de uso:
let planetaGenerado = generarPlanetaFantastico();
console.log(`Nombre del planeta: ${planetaGenerado.nombre}`);
console.log(`Características del planeta: ${planetaGenerado.caracteristicas}`);