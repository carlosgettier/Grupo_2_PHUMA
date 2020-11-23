const express= require("express")
const app = express()
const path = require("path");
const productsRoutes = require(path.join(__dirname, 'routes','productsRoutes'))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.join(__dirname,"./public")))
app.listen(3000,()=> console.log("servidor corriendo"))
app.get("/",function(req,res){
    res.render("products/home")
})

app.get("/detalleDeProducto",function(req,res){
    res.render("products/detalleDeProducto")
})
app.get("/carrito",function(req,res){
    res.render("products/carrito")
})
app.get("/register",function(req,res){
    res.render("users/register")
})
app.get("/login",function(req,res){
    res.render("users/login")
})

app.use('/products',productsRoutes);