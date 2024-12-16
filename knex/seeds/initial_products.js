/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del();
  await knex('products').insert(
    products.map((product) => {
      return {
        baseName: product['baseName'],
        variantName: product['variantName'],
        price: product['price'],
        baseDescription: product['baseDescription'],
        variantDescription: product['variantDescription'],
        image: product['image'],
        inStock: true,
      };
    })
  );
};

const products = [
  {
    id: 1,
    baseName: 'Bucket Hat',
    variantName: 'Black',
    price: 22.99,
    baseDescription:
      'Protect your head from the sun with this stylish bucket hat',
    variantDescription: 'Black with an orange logo',
    image: 'bucket-hat-black.png',
    inStock: 'TRUE',
  },
  {
    id: 2,
    baseName: 'Bucket Hat',
    variantName: 'Peach',
    price: 22.99,
    baseDescription:
      'Protect your head from the sun with this stylish bucket hat',
    variantDescription: 'Pale peach with an orange logo',
    image: 'bucket-hat-peach.png',
    inStock: 'TRUE',
  },
  {
    id: 3,
    baseName: 'Canvas Bag',
    variantName: 'Blue',
    price: 22.99,
    baseDescription: 'Durable canvas tote back with straps',
    variantDescription: 'Natural cotton canvas with a dark blue logo',
    image: 'canvas-bag-blue.png',
    inStock: 'TRUE',
  },
  {
    id: 4,
    baseName: 'Canvas Bag',
    variantName: 'Orange',
    price: 22.99,
    baseDescription: 'Durable canvas tote back with straps',
    variantDescription: 'Natural cotton canvas with an orange logo',
    image: 'canvas-bag-orange.png',
    inStock: 'TRUE',
  },
  {
    id: 5,
    baseName: 'Clock',
    variantName: 'Default',
    price: 27.99,
    baseDescription: 'Battery-powered wall clock. White face with black logo',
    variantDescription: '',
    image: 'clock.png',
    inStock: 'TRUE',
  },
  {
    id: 6,
    baseName: 'Mouse Pad',
    variantName: 'Default',
    price: 12.99,
    baseDescription:
      'A pad perfect for mousing. White background with dark blue logo',
    variantDescription: '',
    image: 'mouse-pad.png',
    inStock: 'TRUE',
  },
  {
    id: 7,
    baseName: 'Notebook',
    variantName: 'Default',
    price: 17.99,
    baseDescription:
      'Black spiral-bound notebook with blue Code the Dream logo',
    variantDescription: '',
    image: 'notebook.png',
    inStock: 'TRUE',
  },
  {
    id: 8,
    baseName: 'Phone Case',
    variantName: 'iPhone',
    price: 34.99,
    baseDescription:
      'Bold orange case - stylish and protects phones from drops up to 703 feet',
    variantDescription: 'Works with iPhone',
    image: 'phone-case.png',
    inStock: 'TRUE',
  },
  {
    id: 9,
    baseName: 'Phone Case',
    variantName: 'Samsung Galaxy',
    price: 34.99,
    baseDescription:
      'Bold orange case - stylish and protects phones from drops up to 703 feet',
    variantDescription: 'Works with Samsung Galaxy',
    image: 'phone-case.png',
    inStock: 'TRUE',
  },
  {
    id: 10,
    baseName: 'Phone Case',
    variantName: 'Google Pixel',
    price: 34.99,
    baseDescription:
      'Bold orange case - stylish and protects phones from drops up to 703 feet',
    variantDescription: 'Works with Google Pixel',
    image: 'phone-case.png',
    inStock: 'TRUE',
  },
  {
    id: 11,
    baseName: 'Phone Case',
    variantName: 'OnePlus',
    price: 34.99,
    baseDescription:
      'Bold orange case - stylish and protects phones from drops up to 703 feet',
    variantDescription: 'Works with OnePlus',
    image: 'phone-case.png',
    inStock: 'TRUE',
  },
  {
    id: 12,
    baseName: 'Phone Case',
    variantName: 'Huwei P Series',
    price: 34.99,
    baseDescription:
      'Bold orange case - stylish and protects phones from drops up to 703 feet',
    variantDescription: 'Works with Huwei P Series',
    image: 'phone-case.png',
    inStock: 'TRUE',
  },
  {
    id: 13,
    baseName: 'Pin',
    variantName: 'Default',
    price: 5.99,
    baseDescription: '5 inch yellow button with a safety pin attacher',
    variantDescription: '',
    image: 'pin.png',
    inStock: 'TRUE',
  },
  {
    id: 14,
    baseName: 'Shower Curtain',
    variantName: 'Default',
    price: 23.99,
    baseDescription: 'Waterproof shower curtain - hanging clips not included',
    variantDescription: '',
    image: 'shower-curtain.png',
    inStock: 'TRUE',
  },
  {
    id: 15,
    baseName: 'Sticker',
    variantName: 'Blue',
    price: 2.99,
    baseDescription:
      'Re-stickable glossy vinyl sticker with the Code The Dream logo. Laptop-safe',
    variantDescription: 'Dark blue',
    image: 'sticker-blue.png',
    inStock: 'TRUE',
  },
  {
    id: 16,
    baseName: 'Sticker',
    variantName: 'Orange',
    price: 2.99,
    baseDescription:
      'Re-stickable glossy vinyl sticker with the Code The Dream logo. Laptop-safe',
    variantDescription: 'Orange',
    image: 'sticker-orange.png',
    inStock: 'TRUE',
  },
  {
    id: 17,
    baseName: 'Throw Pillow',
    variantName: 'Peach',
    price: 44.99,
    baseDescription:
      'Comfortable throw pillow and an excellent conversation starter',
    variantDescription: 'Peach cotton with large pale peach logo',
    image: 'throw-pillow-peach.png',
    inStock: 'TRUE',
  },
  {
    id: 18,
    baseName: 'Throw Pillow',
    variantName: 'Turquoise',
    price: 44.99,
    baseDescription:
      'Comfortable throw pillow and an excellent conversation starter',
    variantDescription: 'Turquoise cotton with large dark blue logo',
    image: 'throw-pillow-turquoise.png',
    inStock: 'TRUE',
  },
];
