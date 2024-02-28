export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  rating: number;
  categoryName: string;
  likes: number;
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
    rating: 4,
    categoryName: 'watch',
    likes: 4
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
    rating: 5,
    categoryName: 'phone',
    likes: 7
  },
  {
    id: 3,
    name: 'IPhone SE',
    price: 233995,
    description: 'Apple iPhone SE 2022 классический дизайн с мощной начинкой. Благодаря дисплею Retina HD 4.7 дюйма, смартфон легко поместится даже в карман.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium',
    rating : 3,
    categoryName: 'phone',
    likes: 14
  },
  {
    id: 4,
    name: 'IPhone 15 Pro Max',
    price: 619410,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    rating: 4,
    categoryName: 'phone',
    likes: 4
  },
  {
    id: 5,
    name: 'Phone 15 Pro',
    price: 549372,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-belyi-114790416/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h21/84557784645662.jpg?format=preview-large',
    rating: 4,
    categoryName: 'phone',
    likes: 4
  },
  {
    id: 6,
    name: 'Phone 15',
    price: 382411,
    description: 'A great phone with one of the best cameras',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-dual-sim-rozovyi-113933635/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h52/84205863469086.png?format=preview-large',
    rating: 5,
    categoryName: 'phone',
    likes: 6
  },
  {
    id: 7,
    name: 'Apple watch 9',
    price: 180000,
    description: 'поддержка платформ: iOS\n' +
      'материал корпуса: алюминий\n' +
      'цвет корпуса: синий\n' +
      'форма корпуса: прямоугольная\n' +
      'интерфейсы: Bluetooth, ,Wi-Fi\n' +
      'технология экрана: OLED\n' +
      'время работы: в обычном режиме: 36 часов, в режиме энергосбережения: 60 часов',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'watch',
    likes: 4
  },
  {
    id: 8,
    name: 'Apple watch ultra',
    price: 350000,
    description: 'поддержка платформ: iOS\n' +
      'материал корпуса: титан\n' +
      'цвет корпуса: серебристый-бежевый\n' +
      'форма корпуса: прямоугольная\n' +
      'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC\n' +
      'технология экрана: OLED\n' +
      'объем встроенной памяти: 32 Гб\n' +
      'время работы: в режиме ожидания: 72 ч',
    link: 'https://kaspi.kz/shop/p/apple-watch-ultra-series-2-gps-cellular-trail-loop-s-m-49-mm-seryi-bezhevyi-113576205/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h68/84060378562590.png?format=gallery-medium',
    rating: 5,
    categoryName: 'watch',
    likes: 4
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
    rating: 5,
    categoryName: 'watch',
    likes: 4
  },
  {
    id: 10,
    name: 'Apple watch se',
    price: 100000,
    description: 'поддержка платформ: iOS\n' +
      'материал корпуса: алюминий\n' +
      'цвет корпуса: черный\n' +
      'форма корпуса: прямоугольная\n' +
      'интерфейсы: Bluetooth, ,Wi-Fi, ,NFC\n' +
      'технология экрана: OLED\n' +
      'объем встроенной памяти: 32 Гб\n' +
      'время работы: до 18 часов',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'watch',
    likes: 4
  },
  {
    id: 11,
    name: 'Apple airPods Max',
    price: 250000,
    description: 'тип: гарнитура\n' +
      'вид: накладные\n' +
      'подключение: беспроводное\n' +
      'тип акустического оформления: закрытые\n' +
      'тип крепления: оголовье\n' +
      'система активного шумоподавления: Да\n' +
      'микрофон: Да',
    link: 'https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'headset',
    likes: 4
  },
  {
    id: 12,
    name: 'HyperX Pulsefire dart',
    price: 65000,
    description: 'тип сенсора: оптическая светодиодная\n' +
      'тип подключения: беспроводная\n' +
      'интерфейс: USB, ,радиоканал\n' +
      'дизайн: для правой руки\n' +
      'игровая: Да\n' +
      'разрешение оптического сенсора: 16000.0 dpi\n' +
      'количество программируемых клавиш: 6',
    link: 'https://kaspi.kz/shop/p/hyperx-pulsefire-dart-hx-mc006b-chernyi-100065531/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h58/63820865503262.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'mouse',
    likes: 4
  }
];


