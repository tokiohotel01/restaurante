console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
nombre:"",
imagen:"",
stock:0,
precio:0,
url:'http://localhost:5000/productos',
// si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
//url:'http://mcerda.pythonanywhere.com/productos', // si ya lo subieron a pythonanywhere
//url:'http://mcerda.pythonanywhere.com/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.nombre = data.nombre;
this.imagen=data.imagen
this.stock=data.stock
this.precio=data.precio
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar(producto) {
let producto = {
nombre:this.nombre,
precio: this.precio,
stock: this.stock,
imagen:this.imagen
}
var options = {
body: JSON.stringify(producto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "./menu.html";//indicar URL 
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')