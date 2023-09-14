const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
    modalContainer.innerHTML = "";

    modalOverlay.style.display = "block";
    modalContainer.style.display = "block";

    //Modal Header
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", ()=> {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    })
    const modalTitle = document.createElement("div");
    modalTitle.innerText = "TU CARRITO";
    modalTitle.className = "modal_title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);


    //Modal Body
    if(cart.length > 0){
        cart.forEach((product) => {
            const modalBody = document.createElement("div");
            modalBody.className = "modal-body";
            modalBody.innerHTML = `
            <div class="product">
                <img class="product-img" src="${product.img}" />
                <div class="product-info">
                    <h4>${product.productName}</h4>
                </div>
                <div class="quantity">
                    <span class="quantity-btn-decrese">-</span>
                    <span class="quantity-input">${product.quantity}</span>
                    <span class="quantity-btn-increse">+</span>
                </div>
                <div class="price">$${product.price * product.quantity}</div>
                <div class="delete-product">❌</div>
            `;
            modalContainer.append(modalBody);

            const decrese = modalBody.querySelector(".quantity-btn-decrese");
            decrese.addEventListener("click", ()=>{
                if(product.quantity !== 1){
                    product.quantity--;
                    displayCart();
                    saveLocal();
                    displayCartCounter();
                }
            });

            const increse = modalBody.querySelector(".quantity-btn-increse");
            increse.addEventListener("click", ()=>{
                    product.quantity++;
                    displayCart();
                    saveLocal();
                    displayCartCounter();
            });

            //delete 
            const deleteProduct = modalBody.querySelector(".delete-product");
            deleteProduct.addEventListener("click", ()=>{
                deleteCartProduct(product.id)
                
            })
        });

        //Modal Footer
        const total = cart.reduce((acumulador, elemento) => acumulador + elemento.price* elemento.quantity, 0);

        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        modalFooter.innerHTML = `
            <div class = "linea">
                <div></div>
            </div>
            <div class = "total-price">TOTAL: ${total}</div>
            <button id="mostrarTick" class="tick-button">COMPRAR</button>
        `;
        modalContainer.append(modalFooter);

        const tick = document.getElementById('mostrarTick')  
        
        const tickOverlay = document.getElementById("tick-overlay");
        const tickImg = document.getElementById("tick-img");

        tick.addEventListener('click', () => {
            // Limpia el contenido del carrito (borra el array cart)
            cart.length = 0;
            displayCart();
            displayCartCounter();
          
            // Cierra el modal
            modalContainer.style.display = "none";
            modalOverlay.style.display = "none";
          
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'La compra fue exitosa',
                showConfirmButton: false,
                timer: 2500
              })

            saveLocal();
          });


    }else{
        const modalText = document.createElement("h2");
        modalText.className = "modal-vacio";
        modalText.innerText = "TU CARRITO ESTA VACIO";
        modalContainer.append(modalText);
    }
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((elemento) => elemento.id === id);
    console.log(foundId);
    cart.splice(foundId, 1);
    displayCart();
    saveLocal();
    displayCartCounter();
};

const displayCartCounter = () => {
    const cartLength = cart.reduce((acumulador, elemento) => acumulador +elemento.quantity, 0);
    localStorage.setItem("cartLength", JSON.stringify(cartLength))
    if(cartLength > 0){
        cartCounter.style.display = "block";
        cartCounter.innerText = JSON.parse(localStorage.getItem("cartLength"));
    }else{
        cartCounter.style.display = "none";
    }
}

displayCartCounter();


