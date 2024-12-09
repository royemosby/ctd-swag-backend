/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert(
    products.map(product => {
      return {
        name: product["name"],
        price: product["price"],
        description: product["description"],
        variants: JSON.stringify(product["variants"]),
        in_stock: true,
      }
    })
  );
};

const products = [
    {
      "name": "Bucket Hat",
      "id": "hat01",
      "price": 29.99,
      "description": "Protect your head from the sun with this stylish bucket hat",
      "variants": [
        {
          "id": "hat01-variant01",
          "color": "black",
          "image": "bucket-hat-black.png"
        },
        {
          "id": "hat01-variant02",
          "color": "peach",
          "image": "bucket-hat-peach.png"
        }
      ]
    },
    {
      "name": "Canvas Bag",
      "id": "bag01",
      "price": 22.99,
      "description": "Durable canvas tote bag with straps",
      "variants": [
        {
          "id": "bag01-variant01",
          "color": "blue",
          "image": "canvas-bag-blue.png"
        },
        {
          "id": "bag01-variant02",
          "color": "orange",
          "image": "canvas-bag-orange.png"
        }
      ]
    },
    {
      "name": "Clock",
      "id": "misc01",
      "price": 22.99,
      "description": "Battery-powered wall clock",
      "variants": [
        {
          "id": "misc01-variant01",
          "color": "default",
          "image": "clock.png"
        }
      ]
    },
    {
      "name": "Mouse Pad",
      "id": "misc02",
      "price": 12.99,
      "description": "A pad perfect for mousing",
      "variants": [
        {
          "id": "misc02-variant01",
          "color": "default",
          "image": "mouse-pad.png"
        }
      ]
    },
    {
      "name": "Notebook",
      "id": "misc03",
      "price": 17.99,
      "description": "Spiral-bound notebook with the Code The Dream logo.",
      "variants": [
        {
          "id": "misc03-variant01",
          "color": "default",
          "image": "notebook.png"
        }
      ]
    },
    {
      "name": "Phone Case",
      "id": "misc04",
      "price": 34.99,
      "description": "Bold orange case - stylish and protects phones from drops up to 703 feet",
      "variants": [
        {
          "id": "misc04-variant01",
          "model": "iPhone",
          "image": "phone-case.png"
        },
        {
          "id": "misc04-variant02",
          "model": "Samsung Galaxy",
          "image": "phone-case.png"
        },
        {
          "id": "misc04-variant03",
          "model": "Google Pixel",
          "image": "phone-case.png"
        },
        {
          "id": "misc04-variant04",
          "model": "OnePlus",
          "image": "phone-case.png"
        },
        {
          "id": "misc04-variant05",
          "model": "Huawei P series",
          "image": "phone-case.png"
        }
      ]
    },
    {
      "name": "Pin",
      "id": "misc05",
      "price": 5.99,
      "description": "5 inch yellow button with safety pin connector.",
      "variants": [
        {
          "id": "misc05-variant01",
          "color": "default",
          "image": "pin.png"
        }
      ]
    },
    {
      "name": "Shower Curtain",
      "id": "misc06",
      "price": 23.99,
      "description": "Waterproof shower curtain. Hanging clips not included.",
      "variants": [
        {
          "id": "misc06-variant01",
          "color": "default",
          "image": "shower-curtain.png"
        }
      ]
    },
    {
      "name": "Sticker",
      "id": "misc07",
      "price": 2.99,
      "description": "Re-stickable glossy vinyl sticker with the Code The Dream logo. Laptop-safe",
      "variants": [
        {
          "id": "misc07variant01",
          "color": "blue",
          "image": "sticker-blue.png"
        },
        {
          "id": "misc07variant02",
          "color": "orange",
          "image": "sticker-orange.png"
        }
      ]
    },
    {
      "name": "Tee Shirt",
      "id": "ts01",
      "price": 19.99,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL"
      ],
      "description": "Comfortable cotton t-shirt with the Code The Dream logo.",
      "variants": [
        {
          "id": "ts01-variant01",
          "color": "black",
          "image": "tee-black.png"
        },
        {
          "id": "ts01-variant02",
          "color": "gray",
          "image": "tee-gray.png"
        }
      ]
    },
    {
      "name": "Throw Pillow",
      "id": "misc08",
      "price": 44.99,
      "description": "Comfortable throw pillow and an excellent conversation starter.",
      "variants": [
        {
          "id": "misc08-variant01",
          "color": "peach",
          "image": "throw-pillow-peach.png"
        },
        {
          "id": "misc08-variant02",
          "color": "turquoise",
          "image": "throw-pillow-turquoise.png"
        }
      ]
    }
  ]
