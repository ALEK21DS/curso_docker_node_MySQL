require('dotenv').config();

const tareaRoutes = require('./routes/tareaRoutes');
const express = require('express');
const app = express();
const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000' || process.env.CORS_ORIGIN,
};

app.use(express.json());
console.log("clave secreta: ", jwtSecret);
console.log("puerto: ", port);

app.get('/', (req, res) => {
    res.send('API backend funcionando');
});
app.use('/api', tareaRoutes);
app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
});


// back http://localhost:3000
// origen http://localhost:4200, 192.168.1.100
// front http://localhost:4200