function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
    // Esta linea retorna una promesa que se resuelve en ms segundos
}


async function demo() {
    console.log("Inicio"); // Este console.log se ejecuta en primer lugar
    await esperar(3000);    // Aqui espera 3 segundos
    console.log("Fin del proceso"); // Este console.log esperara 3 segundos para ejecutarse
}

demo();
console.log("Fin del programa"); // Esta linea se ejecuta aun cuando el proceso se haya demorado 3 segundos
