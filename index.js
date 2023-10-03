const sequelize = require('./database/db')

const express = require('express');
const estudianteRoutes = require('./routes/estudianteRoute');
const app = express(); 
const cors = require('cors');

const morgan = require('morgan');

sequelize.authenticate()
.then(()=>{
    console.log('Conexión exitosa a la base de datos');
})
.catch((error)=>{
    console.error('Error al conectar con la base de datos: ',error);
});

app.use(express.json())
app.use(cors());
app.use(morgan());

app.use('/api', estudianteRoutes);

const PORT = 3000;
app.listen(PORT, ()=>console.log(`Servidor corriendo en puerto ${PORT}`))