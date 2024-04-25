import { Cargar_categorias } from "./Cargar_categorias.js";
import { cargar_producto } from "./Cargar_productos.js";


let DOM = document.querySelector("#root")

DOM.innerHTML = `
    <header></header>
    <main class="body">
        <section id="div_producto_list"></section>
        <section id="div_summery_description"></section>
    </main>
    <footer></footer>
`
async function api_productos(){
    try{
      const respuesta = await fetch('https://fakestoreapi.com/users?limit=5');
      const datos_json = await respuesta.json();
    }catch (error){
      console.log("Error en: " , error);
    }
  }
  
  fetch('https://fakestoreapi.com/users?limit=5')
  .then(respuesta => respuesta.json())
  .then(datos_json=>{
    console.log (datos_json[0]);
  })


fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let productos_api = data;
        
        
        //Mi programa
        cargar_producto(productos_api)
   

    });
Cargar_categorias()    