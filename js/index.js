const shopContent = document.getElementById("shopContent");

//get item
const cart = JSON.parse(localStorage.getItem("cart")) || [];

async function cargarProductos() {
  try {
      const response = await fetch('./json/productos.json');
      const productos = await response.json();

      productos.map((product) => {
          createProductCard(product);
      });
  } catch (error) {
      console.error('Error al cargar el JSON:', error);
  }
}



function createProductCard(product) {
    const content = document.createElement("div");
    content.className = "moto"
    content.innerHTML = `
    <img src = "${product.img}">  
    <h3>${product.productName}</h3>
    <p class = "precio">$${product.price}</p>
    `
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Agregar"
    buyButton.className = 'agregar-btn';

    content.append(buyButton)

    buyButton.addEventListener("click", () => {
      const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

      Toastify({
        text: "Producto agregado",
        className: "info",
        style: {
          background: "linear-gradient(to right, #BC8252, #ffa358)",
        }
      }).showToast();
      
      if(repeat){
        cart.map((prod)=> {
          if(prod.id === product.id){
            prod.quantity++;
            displayCartCounter();
            saveLocal();
          }
        });
      }else {
        cart.push({
          id: product.id,
          productName: product.productName,
          price: product.price,
          quantity: product.quantity,
          img: product.img,
        });
        displayCartCounter();
        saveLocal();
      }
      console.log(cart);
    })
};

cargarProductos();

//set item
const saveLocal = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
}




