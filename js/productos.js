/* const productos = [
    {
      id: 1,
      productName: "Zero SR/S",
      price: 25000,
      quantity: 1,
      img: "./imagenes/motoedit.webp",
    },
  
    {
      id: 2,
      productName: "Yamaha R6",
      price: 23000,
      quantity: 1,
      img: "./imagenes/motorcycle-7185571_1280.webp",
    },
  
    {
      id: 3,
      productName: "Beta AKVO",
      price: 19000,
      quantity: 1,
      img: "./imagenes/beta_akvo_200_rr_carenada_2020_0.png",
    },
  
    {
      id: 4,
      productName: "Kawasaki Ninja",
      price: 30000,
      quantity: 1,
      img: "./imagenes/kawasaki_ninja_400.png",
    },
  
    {
      id: 5,
      productName: "Honda CBR250R",
      price: 21000,
      quantity: 1,
      img: "./imagenes/CBR250R_8.png",
    },
  
    {
      id: 6,
      productName: "Falkon 250",
      price: 13000,
      quantity: 1,
      img: "./imagenes/IGM-red_5.png",
    },
  
    {
      id: 7,
      productName: "Nexus 200rr",
      price: 27000,
      quantity: 1,
      img: "./imagenes/nexus-200rr-rojo.png",
    },
  
    {
      id: 8,
      productName: "RZ MT 650",
      price: 20000,
      quantity: 1,
      img: "./imagenes/rz-650mt_color1-11-25515b5357d168314d16801221055345-640-0.png",
    },
  
    {
      id: 9,
      productName: "Guzzi V100",
      price: 15000,
      quantity: 1,
      img: "./imagenes/V100-Mandello-blanca.png",
    },
  
    {
      id: 10,
      productName: "Guzzi V85",
      price: 12000,
      quantity: 1,
      img: "./imagenes/tab_V85_TT_verde.png",
    },
  
    {
      id: 11,
      productName: "Pulsar Rs 200",
      price: 23000,
      quantity: 1,
      img: "./imagenes/RS 200 1640-x-997-con-luz.png",
    },
  
    {
      id: 12,
      productName: "Yamaha R3",
      price: 20000,
      quantity: 1,
      img: "./imagenes/yamaha-r3a-9.webp",
    },
    
  ];
   */

  
  class Moto {
  constructor(id, productName, price, quantity, img) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
    this.img = img;
    }
  }
  
  // Crea instancias de Producto para cada producto
  const productos = [
    new Moto(1, "Zero SR/S", 25000, 1, "./imagenes/motoedit.webp"),
    new Moto(2, "Yamaha R6", 23000, 1, "./imagenes/motorcycle-7185571_1280.webp"),
    new Moto(3, "Beta AKVO", 19000, 1, "./imagenes/beta_akvo_200_rr_carenada_2020_0.png"),
    new Moto(4, "Kawasaki Ninja", 30000, 1, "./imagenes/kawasaki_ninja_400.png"),
    new Moto(5, "Honda CBR250R", 21000, 1, "./imagenes/CBR250R_8.png"),
    new Moto(6, "Falkon 250", 13000, 1, "./imagenes/IGM-red_5.png"),
    new Moto(7, "Nexus 200rr", 27000, 1, "./imagenes/nexus-200rr-rojo.png"),
    new Moto(8, "RZ MT 650", 20000, 1, "./imagenes/rz-650mt_color1-11-25515b5357d168314d16801221055345-640-0.png"),
    new Moto(9, "Guzzi V100", 15000, 1, "./imagenes/V100-Mandello-blanca.png"),
    new Moto(10, "Guzzi V85", 12000, 1, "./imagenes/tab_V85_TT_verde.png"),
    new Moto(11, "Pulsar Rs 200", 23000, 1, "./imagenes/RS 200 1640-x-997-con-luz.png"),
    new Moto(12, "Yamaha R3", 20000, 1, "./imagenes/yamaha-r3a-9.webp"),
  ];