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
    baseName: 'Canvas Bag',
    variantName: 'Blue',
    price: 22.99,
    baseDescription: 'Durable canvas tote back with straps',
    variantDescription: 'Natural cotton canvas with a dark blue logo',
    image: 'canvas-bag-blue.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Canvas Bag',
    variantName: 'Orange',
    price: 22.99,
    baseDescription: 'Durable canvas tote back with straps',
    variantDescription: 'Natural cotton canvas with an orange logo',
    image: 'canvas-bag-orange.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Clock',
    variantName: 'Default',
    price: 27.99,
    baseDescription: 'Battery-powered wall clock. White face with black logo',
    variantDescription: '',
    image: 'clock.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Mouse Pad',
    variantName: 'White',
    price: 12.99,
    baseDescription:
      'A pad perfect for mousing. White background with dark blue logo',
    variantDescription: '',
    image: 'mouse-pad-white.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Mouse Pad',
    variantName: 'Blue',
    price: 12.99,
    baseDescription:
      'A pad perfect for mousing. Blue background with white logo',
    variantDescription: '',
    image: 'mouse-pad-blue.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Mouse Pad',
    variantName: 'Orange',
    price: 12.99,
    baseDescription:
      'A pad perfect for mousing. Orange background with white logo',
    variantDescription: '',
    image: 'mouse-pad-orange.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Mug',
    variantName: 'Black',
    price: 17.99,
    baseDescription: 'A stylish mug with the Code The Dream logo',
    variantDescription: 'Black with white logo',
    image: 'mug-black.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Mug',
    variantName: 'Blue',
    price: 17.99,
    baseDescription: 'A stylish mug with the Code The Dream logo',
    variantDescription: 'Blue with white logo',
    image: 'mug-blue.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Mug',
    variantName: 'White',
    price: 17.99,
    baseDescription: 'A stylish mug with the Code The Dream logo',
    variantDescription: 'White with blue logo',
    image: 'mug-white.png',
    inStock: 'TRUE',
  },
  {
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
    baseName: 'Pin',
    variantName: 'Default',
    price: 5.99,
    baseDescription: '5 inch yellow button with a safety pin attacher',
    variantDescription: '',
    image: 'pin.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Phone PopSocket',
    variantName: 'Orange',
    price: 9.99,
    baseDescription:
      'Keep ahold of your phone with a PopSocket featuring the Code The Dream logo',
    variantDescription: 'Orange with white logo',
    image: 'popsocket-orange.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Phone PopSocket',
    variantName: 'Blue',
    price: 9.99,
    baseDescription:
      'Keep ahold of your phone with a PopSocket featuring the Code The Dream logo',
    variantDescription: 'Blue with white logo',
    image: 'popsocket-blue.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Phone PopSocket',
    variantName: 'White',
    price: 9.99,
    baseDescription:
      'Keep ahold of your phone with a PopSocket featuring the Code The Dream logo',
    variantDescription: 'White with blue logo',
    image: 'popsocket-white.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Shower Curtain',
    variantName: 'Default',
    price: 23.99,
    baseDescription: 'Waterproof shower curtain - hanging clips not included',
    variantDescription: '',
    image: 'shower-curtain.png',
    inStock: 'TRUE',
  },
  {
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
    baseName: 'Throw Pillow',
    variantName: 'Turquoise',
    price: 44.99,
    baseDescription:
      'Comfortable throw pillow and an excellent conversation starter',
    variantDescription: 'Turquoise cotton with large dark blue logo',
    image: 'throw-pillow-turquoise.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Lanyard',
    variantName: 'Black',
    price: 7.99,
    baseDescription:
      '3/4" ribbon with small embroidered Code The Dream logos repeated along its length',
    variantDescription: 'Black with white logos',
    image: 'lanyard-black.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Lanyard',
    variantName: 'Blue',
    price: 7.99,
    baseDescription:
      '3/4" ribbon with small embroidered Code The Dream logos repeated along its length',
    variantDescription: 'Blue with white logos',
    image: 'lanyard-blue.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Clutch Bag',
    variantName: 'Blue',
    price: 57.5,
    baseDescription: 'Faux suede clutch bag with an embroidered logo',
    variantDescription: 'Blue with orange logo',
    image: 'clutch-bag-blue.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Clutch Bag',
    variantName: 'Orange',
    price: 57.5,
    baseDescription: 'Faux suede clutch bag with an embroidered logo',
    variantDescription: 'Orange with blue logo',
    image: 'clutch-bag-orange.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Pillow Case',
    variantName: 'Orange',
    price: 23.99,
    baseDescription:
      'Comfortable pillow case and an excellent conversation starter',
    variantDescription: 'Orange cotton with large pale orange logo',
    image: 'pillow-case-orange.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Pillow Case',
    variantName: 'Turquoise',
    price: 23.99,
    baseDescription:
      'Comfortable pillow case and an excellent conversation starter',
    variantDescription: 'Turquoise cotton with large dark blue logo',
    image: 'pillow-case-turquoise.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Notepad',
    variantName: 'Black',
    price: 4.99,
    baseDescription: 'Notepad with an embossed Code The Dream logo',
    variantDescription: 'Black with white logo',
    image: 'notepad-black.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Notepad',
    variantName: 'Blue',
    price: 4.99,
    baseDescription: 'Notepad with an embossed Code The Dream logo',
    variantDescription: 'Blue with white logo',
    image: 'notepad-blue.png',
    inStock: 'TRUE',
  },
  {
    baseName: 'Notepad',
    variantName: 'Black to Orange Gradient',
    price: 4.99,
    baseDescription: 'Notepad with an embossed Code The Dream logo',
    variantDescription: 'Black to orange gradient with white logo',
    image: 'notepad-gradient.png',
    inStock: 'TRUE',
  },
];
