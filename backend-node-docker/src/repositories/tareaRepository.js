const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getTareas(usuarioId) {
    return await prisma.tarea.findMany({
        where: {
            usuarioId: usuarioId
        }
    });
    
}
async function deleteTarea(id, usuarioId) {
    const tareaId = parseInt(id);
    if (isNaN(tareaId)) {
        throw new Error("ID de tarea inválido");
    }

    // Buscar la tarea primero
    const tarea = await prisma.tarea.findFirst({
        where: {
            id: tareaId,
            usuarioId: usuarioId
        }
    });

    if (!tarea) {
        throw new Error("Tarea no encontrada o no pertenece al usuario");
    }

    // Borrar la tarea
    await prisma.tarea.delete({
        where: {
            id: tareaId
        }
    });

    return tarea; // devolver la tarea eliminada
}
async function createTarea(data, usuarioId) {
    return await prisma.tarea.create({ data: { ...data, usuarioId: usuarioId } });
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea
}

