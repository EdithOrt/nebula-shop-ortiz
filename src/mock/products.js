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
        category: "playeras",
        stock: 20,
      },
      {
        id: 2,
        title: "Product 2",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://s3.amazonaws.com/kc20-img2-kichink/items_43501_20571_20151216110413_b.jpg",
        category: "playeras",
        stock: 3,
      },
      {
        id: 3,
        title: "Product 3",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://s3.amazonaws.com/kc20-img2-kichink/items_1762953_418909_0_20180425161136_b.jpg",
        category: "playeras",
        stock: 12,
      },
      {
        id: 4,
        title: "Product 4",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://s3.amazonaws.com/kc20-img2-kichink/items_1978421_1250985_0_20181024175726_b.jpg",
        category: "playeras",
        stock: 11,
      },
      {
        id: 5,
        title: "Product 5",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://s3.amazonaws.com/kc20-img2-kichink/items_1862522_418909_0_20180719130353_b.jpg",
        category: "playeras",
        stock: 5,
      },
      {
        id: 6,
        title: "Product 1",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/IMG_20210714_125654-01_1600x.jpg?v=1626382188",
        category: "tazas",
        stock: 17,
      },
      {
        id: 7,
        title: "Product 2",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/IMG_20211209_153554-01_400x.jpg?v=1640019762",
        category: "tazas",
        stock: 9,
      },
      {
        id: 8,
        title: "Product 3",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/IMG_20211209_154105-01_400x.jpg?v=1640019940",
        category: "tazas",
        stock: 2,
      },
      {
        id: 9,
        title: "Product 4",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/Ardilla1_400x.jpg?v=1615491289",
        category: "tazas",
        stock: 14,
      },
      {
        id: 10,
        title: "Product 5",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/libreta_alice_400x.jpg?v=1602610710",
        category: "libretas",
        stock: 11,
      },
      {
        id: 11,
        title: "Product 5",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/DSC00939_400x.jpg?v=1597781369",
        category: "libretas",
        stock: 16,
      },
      {
        id: 12,
        title: "Product 5",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/libreta_magical-ride_400x.jpg?v=1602610928",
        category: "libretas",
        stock: 18,
      },
      {
        id: 13,
        title: "Product 5",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/dino2_400x.png?v=1597861431",
        category: "libretas",
        stock: 1,
      },
      {
        id: 14,
        title: "Product 5",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/104321950_3224798747605777_4823660347983702526_o_400x.jpg?v=1596048425",
        category: "libretas",
        stock: 4,
      },
      {
        id: 15,
        title: "Product 5",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/horseheadprismas_1320deb8-be80-4c78-9919-75a98513b0eb_400x.jpg?v=1591148144",
        category: "libretas",
        stock: 7,
      },
      {
        id: 16,
        title: "Product 5",
        description:
          "Proin tempus leo a sapien euismod, ut maximus dolor euismod. Cras elementum enim id quam vulputate, sit amet blandit nunc posuere.",
        price: 100,
        pictureUrl:
          "https://cdn.shopify.com/s/files/1/0291/5450/8905/products/Capturadepantalla2020-07-27ala_s_16.05.31_400x.png?v=1595884060",
        category: "libretas",
        stock: 11,
      },
    ]);
  }, 2000);
});

export default productsPromise;
