const productsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        id: 1,
        title: "Product 1",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://s3.amazonaws.com/kc20-img2-kichink/items_289130_105173_20150612141132_b.jpg",
      },
      {
        id: 2,
        title: "Product 2",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://s3.amazonaws.com/kc20-img2-kichink/items_43501_20571_20151216110413_b.jpg",
      },
      {
        id: 3,
        title: "Product 3",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://s3.amazonaws.com/kc20-img2-kichink/items_1762953_418909_0_20180425161136_b.jpg",
      },
      {
        id: 4,
        title: "Product 4",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://s3.amazonaws.com/kc20-img2-kichink/items_1978421_1250985_0_20181024175726_b.jpg",
      },
      {
        id: 5,
        title: "Product 5",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://s3.amazonaws.com/kc20-img2-kichink/items_1862522_418909_0_20180719130353_b.jpg",
      },
    ]);
  }, 2000);
});

export default productsPromise;
