const express = require('express');
const path = require('path');
const app = express();

// Defina a pasta 
app.use(express.static(path.resolve('C:/Users/Helder Mevi/Desktop/sistema')));

//  arquivo login.html  
app.get('/', (req, res) => {
    res.sendFile(path.resolve('C:/Users/Helder Mevi/Desktop/sistema/login.html'));
});

// Iniciar o servidor 
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
 