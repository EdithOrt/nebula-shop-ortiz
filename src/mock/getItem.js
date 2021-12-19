const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      id: "01",
      name: "Playera Dragonzitos",
      description:
        "Playera retro Dragonzitos hecha con material 100% algodón, impresión en serigrafía de alta calidad.",
      pictureUrl:
        "https://s3.amazonaws.com/kc20-img2-kichink/items_1978421_1250985_0_20181024175726_b.jpg",
      price: 400,
    });
  }, 2000);
});

export default getItem;
