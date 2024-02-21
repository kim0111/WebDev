export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Garmin MARQ Commander Gen 2 Carbon Edition',
    price: 1781254,
    description: 'поддержка платформ: Android, iOS\n' +
      'материал корпуса: стекловолокно\n' +
      'цвет корпуса: черный\n' +
      'форма корпуса: круглая\n' +
      'интерфейсы: Bluetooth, ,Wi-Fi, ,ANT+, ,NFC\n' +
      'технология экрана: AMOLED\n' +
      'объем встроенной памяти: 32 Гб\n' +
      'время работы: до 16 дней',
    link: 'https://kaspi.kz/shop/p/garmin-marq-commander-gen-2-carbon-edition-chernyi-114464404/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h74/84477616979998.png?format=gallery-medium',
    rating: 4
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra 5G',
    price: 899990,
    description: 'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана: Dynamic AMOLED 2X\n' +
      'диагональ: 6.8 дюйм\n' +
      'размер оперативной памяти: 12 ГБ\n' +
      'процессор: 8-ядерный Snapdragon 8 Gen 3\n' +
      'объем встроенной памяти: 512.0 ГБ\n' +
      'емкость аккумулятора: 5000.0 мАч',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-ds-12-gb-512-gb-seryi-116534733/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h2d/85135957622814.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 3,
    name: 'IPhone SE',
    price: 233995,
    description: 'Apple iPhone SE 2022 классический дизайн с мощной начинкой. Благодаря дисплею Retina HD 4.7 дюйма, смартфон легко поместится даже в карман.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium',
    rating : 3
  },
  {
    id: 4,
    name: 'IPhone 15 Pro Max',
    price: 619410,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    rating: 4
  },
  {
    id: 5,
    name: 'Phone 15 Pro',
    price: 549372,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-belyi-114790416/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h21/84557784645662.jpg?format=preview-large',
    rating: 4
  },
  {
    id: 6,
    name: 'Phone 15',
    price: 382411,
    description: 'A great phone with one of the best cameras',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-dual-sim-rozovyi-113933635/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h52/84205863469086.png?format=preview-large',
    rating: 5
  },
  {
    id: 7,
    name: 'iPhone 14 Pro Max 512Gb',
    price: 889999,
    description: 'технология NFC: Да\n' +
      'цвет: серебристый\n' +
      'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
      'диагональ: 6.7 дюйм\n' +
      'размер оперативной памяти: 6 ГБ\n' +
      'процессор: 6-ядерный Apple A16 Bionic\n' +
      'объем встроенной памяти: 512.0 ГБ\n' +
      'емкость аккумулятора: 3095.0 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-512gb-dual-sim-serebristyi-106787335/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h81/63792879009822.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 8,
    name: 'Xiaomi 14 Pro',
    price: 799990,
    description: 'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана: AMOLED, сенсорный\n' +
      'диагональ: 6.73 дюйм\n' +
      'размер оперативной памяти: 16 ГБ\n' +
      'процессор: 8-ядерный Snapdragon 8 Gen 3\n' +
      'объем встроенной памяти: 1024.0 ГБ\n' +
      'емкость аккумулятора: 4880.0 мАч',
    link: 'https://kaspi.kz/shop/p/xiaomi-14-pro-titanium-special-edition-china-version-16-gb-1024-gb-seryi-116866740/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/h56/85243984543774.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 9,
    name: 'Xiaomi Mi Band 5 ',
    price: 17608,
    description: 'поддержка платформ: Android, ,iOS\n' +
      'цвет корпуса: черный\n' +
      'интерфейсы: Bluetooth\n' +
      'технология экрана: AMOLED\n' +
      'время работы: до 120 ч в активном режиме, до 336 ч в режиме ожидания',
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-5-chernyi-100380664/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h99/h71/63902874173470.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 10,
    name: 'iPhone 12 Pro 256Gb ',
    price: 479678,
    description: 'технология NFC: Да\n' +
      'цвет: синий\n' +
      'тип экрана: сенсорный, мультитач OLED Super Retina XDR\n' +
      'диагональ: 6.1 дюйм\n' +
      'размер оперативной памяти: 6 ГБ\n' +
      'процессор: 6-ядерный Apple A14 Bionic\n' +
      'объем встроенной памяти: 256.0 ГБ\n' +
      'емкость аккумулятора: 2775.0 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-pro-256gb-sinii-100657201/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf7/63952650731550.jpg?format=gallery-medium',
    rating: 5
  }
];


