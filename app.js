

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

function historiasAbsurdas() {
    let personajes = ["pingüinos", "robots", "astronautas", "mascotas alienígenas"];
    let acciones = ["hablan francés", "están enamorados de plantas", "se pierden en el espacio", "organizan una fiesta loca"];
  

    let personajeRandom = personajes[Math.floor(Math.random() * personajes.length)];
    let accionRandom = acciones[Math.floor(Math.random() * acciones.length)];
   
    let historiaLoca = `Un grupo de ${personajeRandom} ${accionRandom}`;

    return historiaLoca;
}

let historiaGenerada = historiasAbsurdas();
console.log(historiaGenerada);







/*  Simulador de Viaje en el Tiempo Musical  */ 

function recomendarCancionesPorAnio(anio) {
    
    let recomendacionesPorAnio = {
        1960: ["The Beatles - Hey Jude", "Elvis Presley - It's Now or Never", "The Supremes - Where Did Our Love Go"],
        1970: ["Led Zeppelin - Stairway to Heaven", "Queen - Bohemian Rhapsody", "David Bowie - Space Oddity"],
        1980: ["Michael Jackson - Billie Jean", "Madonna - Like a Virgin", "Queen - Another One Bites the Dust"],
        1990: ["Nirvana - Smells Like Teen Spirit", "Backstreet Boys - I Want It That Way", "Britney Spears - ...Baby One More Time"],
        2000: ["Eminem - Lose Yourself", "Beyoncé - Crazy in Love", "Coldplay - Viva la Vida"],
        2010: ["Ed Sheeran - Shape of You", "Taylor Swift - Shake It Off", "Bruno Mars - Uptown Funk"]
 
    };

    let recomendaciones = recomendacionesPorAnio[anio];

    if (recomendaciones) {
        return `Recomendaciones musicales para el año ${anio}:\n${recomendaciones.join("\n")}`;
    } else {
        return `Lo siento, no tengo recomendaciones para el año ${anio}. ¡Intenta con otro año!`;
    }
}


let anioViaje = 1980; 
let recomendacionesMusicales = recomendarCancionesPorAnio(anioViaje);
console.log(recomendacionesMusicales);









/*  Creador de Recetas Culinarias del Futuro   */


function recetaCulinariaFuturista() {

    let ingredientes = ["esencia de plutonio", "alpiste de neon", "patatas lunares"];
    let tecnicas = ["freido por turbina espasial", "marinado al mercurio", "hervido en estrella artificial"];


    let ingredientess = ingredientes[Math.floor(Math.random() * ingredientes.length)];
    let tecnicass = tecnicas[Math.floor(Math.random() * tecnicas.length)];


    let recetaFuturista = `Plato de hoy: ${ingredientes} con ${tecnicas}.`;

    return recetaFuturista;
}

let recetaFuturistaGenerada = recetaCulinariaFuturista();
console.log(recetaFuturistaGenerada);









/*   Generador de Planetas Fantásticos   */

function generarPlanetaFantastico() {
    // Listas de elementos para combinar
    let colores = ["dorado", "azul", "violeta"];
    let elementosQuimicos = ["hierro", "carbono", "litio"];
    let fenomenosCosmicos = ["triple anillo estelar", "meteoritos de laba", "polvo de gusano negro"];

    // Seleccionar aleatoriamente elementos para combinar
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    let elementoQuimicoAleatorio = elementosQuimicos[Math.floor(Math.random() * elementosQuimicos.length)];
    let fenomenoCosmicoAleatorio = fenomenosCosmicos[Math.floor(Math.random() * fenomenosCosmicos.length)];

    // Generar el nombre y características del planeta
    let nombrePlaneta = `${colorAleatorio} ${elementoQuimicoAleatorio} ${fenomenoCosmicoAleatorio}`;
    let caracteristicasPlaneta = `Planeta de color ${colorAleatorio},formado por capaz de ${elementoQuimicoAleatorio} y ${fenomenoCosmicoAleatorio}.`;

    return { nombre: nombrePlaneta, caracteristicas: caracteristicasPlaneta };
}

// Ejemplo de uso:
let planetaGenerado = generarPlanetaFantastico();
console.log(`Nombre del planeta: ${planetaGenerado.nombre}`);
console.log(`Características del planeta: ${planetaGenerado.caracteristicas}`);