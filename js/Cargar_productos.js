
function cargar_producto(productos_list) {
    let div_producto_list = document.querySelector("#div_producto_list")
 

    productos_list.forEach(producto => {
        let div = document.createElement("div")
        div.classList = "item_producto"



        div.innerHTML = `
        <div class="box_img">
            <img src="${producto.image}" alt="">
        </div>        
        <div class="box_description">
            <span class="name">${producto.title}</span>
            <span class="price"> Q${producto.price}</span>
            <div class="buy_btn" id="${producto.id}"></div>
            <button>Comprar</button>
        </div>
        `
        div_producto_list.appendChild(div)

    });

}



export {cargar_producto}