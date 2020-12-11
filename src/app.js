const express= require("express");
const app = express();
const path = require("path");
const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRoutes');
const usersRouter = require('./routes/usersRouter');
const session = require ('express-session')
const sesionIniciadaMW = require('./middlewares/sessionIniciada');

//De aplicaciòn

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use(express.static(path.join(__dirname,"../public")))

app.use(session({secret: 'chinguenguesha'}))
app.use(sesionIniciadaMW);

//De ruta
app.use('/', mainRouter);

app.use('/users', usersRouter);

app.use('/products',productsRouter);

app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor está corriendo en el puerto 3000");
    console.log("-------------------");
    console.log("http://localhost:3000");
})