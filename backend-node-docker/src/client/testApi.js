const axios = require('axios');

async function testGetTareas() {
    try {
        const response = await axios.get('http://localhost:3000/api/tareas');
        console.log("Respuesta de la API:", response.data);
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
    }
}

testGetTareas();
