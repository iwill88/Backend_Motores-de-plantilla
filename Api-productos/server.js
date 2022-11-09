const express = require('express');
const app = express();
const Database = require('./database');

const db = new Database;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    res.render('pages/index',{})
});

app.post('/', (req, res) => {
  const producto = db.save(req.body);
  console.log(producto);
  res.redirect('/productos');
});


app.get('/productos', (req, res) => {
  const productos = db.getAll();
  res.render('pages/productos', {productos: productos});
});



const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));