import mobileXX99ii from 'assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import tabletXX99ii from 'assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg';
import desktopXX99ii from 'assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import cartXX99ii from 'assets/images/cart/image-xx99-mark-two-headphones.jpg';
import mobileXX99i from 'assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg';
import tabletXX99i from 'assets/images/product-xx99-mark-one-headphones/tablet/image-product.jpg';
import desktopXX99i from 'assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import cartXX99i from 'assets/images/cart/image-xx99-mark-one-headphones.jpg';
import mobileXX59 from 'assets/images/product-xx59-headphones/mobile/image-product.jpg';
import tabletXX59 from 'assets/images/product-xx59-headphones/tablet/image-product.jpg';
import desktopXX59 from 'assets/images/product-xx59-headphones/desktop/image-product.jpg';
import cartXX59 from 'assets/images/cart/image-xx59-headphones.jpg';
import mobileYX1 from 'assets/images/product-yx1-earphones/mobile/image-product.jpg';
import tabletYX1 from 'assets/images/product-yx1-earphones/tablet/image-product.jpg';
import desktopYX1 from 'assets/images/product-yx1-earphones/desktop/image-product.jpg';
import cartYX1 from 'assets/images/cart/image-yx1-earphones.jpg';
import mobileZX7 from 'assets/images/product-zx7-speaker/mobile/image-category-page-preview.jpg';
import tabletZX7 from 'assets/images/product-zx7-speaker/desktop/image-product.jpg';
import desktopZX7 from 'assets/images/product-zx7-speaker/desktop/image-product.jpg';
import cartZX7 from 'assets/images/cart/image-zx7-speaker.jpg';
import mobileZX9 from 'assets/images/product-zx9-speaker/mobile/image-product.jpg';
import tabletZX9 from 'assets/images/product-zx9-speaker/tablet/image-product.jpg';
import desktopZX9 from 'assets/images/product-zx9-speaker/desktop/image-product.jpg';
import cartZX9 from 'assets/images/cart/image-zx9-speaker.jpg';

export const productData = [
  {
    id: 'xx99-mark-ii',
    category: 'headphones',
    short: 'xx99 mk ii',
    feature: 'new product',
    product: 'XX99 Mark II Headphones',
    info: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: 2999,
    desc1:
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
    desc2:
      'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
    cartImg: cartXX99ii,
    images: {
      mobile: mobileXX99ii,
      tablet: tabletXX99ii,
      desktop: desktopXX99ii,
    },
    inTheBox: [
      ['1x', 'Headphone Unit'],
      ['2x', 'Replacement Earcups'],
      ['1x', 'User Manual'],
      ['1x', '3.5mm 5m Audio Cable'],
      ['1x', 'Travel Bag'],
    ],
    gallery: [
      ['../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'],
      ['product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'],
      ['product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'],
    ],
    preference: [
      {
        url: 'product-xx99-mark-one-headphones/desktop/image-product.jpg',
        alt: 'some awesome picture',
        product: 'XX99 MARK I',
        link: '/product_detail/xx99-mark-i',
      },
      { url: 'product-xx59-headphones/desktop/image-product.jpg', alt: 'some awesome picture', product: 'XX59', link: '/product_detail/xx59' },
      { url: 'product-zx9-speaker/desktop/image-product.jpg', alt: 'some awesome picture', product: 'ZX9 SPEAKER', link: '/product_detail/zx9' },
    ],
  },
  {
    id: 'xx99-mark-i',
    category: 'headphones',
    short: 'xx99 mk i',
    productIMG: 'product-xx99-mark-one-headphones/desktop/image-product.jpg',
    feature: '',
    product: 'XX99 Mark I Headphones',
    info: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    price: 1750,
    desc1:
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',
    desc2:
      'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
    cartImg: cartXX99i,
    images: {
      mobile: mobileXX99i,
      tablet: tabletXX99i,
      desktop: desktopXX99i,
    },
    inTheBox: [
      ['1x', 'Headphone Unit'],
      ['2x', 'Replacement Earcups'],
      ['1x', 'User Manual'],
      ['1x', '3.5mm 5m Audio Cable'],
    ],
    gallery: [
      ['product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg', 'random picture'],
      ['product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg', 'random picture'],
      ['product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg', 'random picture'],
    ],
    preference: [
      {
        url: 'product-xx99-mark-two-headphones/desktop/image-product.jpg',
        alt: 'some awesome picture',
        product: 'XX99 MARK II',
        link: '/product_detail/xx99-mark-ii',
      },
      { url: 'product-xx59-headphones/desktop/image-product.jpg', alt: 'some awesome picture', product: 'XX59', link: '/product_detail/xx59' },
      { url: 'product-zx9-speaker/desktop/image-product.jpg', alt: 'some awesome picture', product: 'ZX9 SPEAKER', link: '/product_detail/zx9' },
    ],
  },
  {
    id: 'xx59',
    category: 'headphones',
    short: 'xx59',
    productIMG: 'product-xx59-headphones/desktop/image-product.jpg',
    feature: '',
    product: 'XX59 Headphones',
    info: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    price: 899,
    featureDesc1:
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
    featureDesc2:
      'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    cartImg: cartXX59,
    images: {
      mobile: mobileXX59,
      tablet: tabletXX59,
      desktop: desktopXX59,
    },
    inTheBox: [
      ['1x', 'Headphone Unit'],
      ['2x', 'Replacement Earcups'],
      ['1x', 'User Manual'],
      ['1x', '3.5mm 5m Audio Cable'],
    ],
    gallery: [
      ['product-xx59-headphones/desktop/image-gallery-1.jpg', 'random picture'],
      ['product-xx59-headphones/desktop/image-gallery-2.jpg', 'random picture'],
      ['product-xx59-headphones/desktop/image-gallery-3.jpg', 'random picture'],
    ],
    preference: [
      {
        url: 'product-xx99-mark-two-headphones/desktop/image-product.jpg',
        alt: 'some awesome picture',
        product: 'XX99 MARK II',
        link: '/product_detail/xx99-mark-ii',
      },
      {
        url: 'product-xx99-mark-one-headphones/desktop/image-product.jpg',
        alt: 'some awesome picture',
        product: 'XX99 MARK I',
        link: '/product_detail/xx99-mark-i',
      },
      { url: 'product-zx9-speaker/desktop/image-product.jpg', alt: 'some awesome picture', product: 'ZX9 SPEAKER', link: '/product_detail/zx9' },
    ],
  },
  {
    id: 'zx9',
    category: 'speakers',
    short: 'zx9',
    productIMG: 'product-zx9-speaker/desktop/image-product.jpg',
    feature: 'new product',
    product: 'ZX9 speaker',
    info: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    price: 4500,
    featureDesc1:
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',
    featureDesc2:
      'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
    cartImg: 'cart/image-zx9-speaker.jpg',
    inTheBox: [
      ['2x', 'Speaker Unit'],
      ['2x', 'Speaker Cloth Panel'],
      ['1x', 'User Manual'],
      ['1x', '3.5mm 5m Audio Cable'],
      ['1x', '10m Optical Cable'],
    ],
    gallery: [
      ['product-zx9-speaker/desktop/image-gallery-1.jpg', 'random picture'],
      ['product-zx9-speaker/desktop/image-gallery-2.jpg', 'random picture'],
      ['product-zx9-speaker/desktop/image-gallery-3.jpg', 'random picture'],
    ],
    preference: [
      { url: 'product-zx7-speaker/desktop/image-product.jpg', alt: 'some awesome picture', product: 'ZX7 SPEAKER', link: '/product_detail/zx7' },
      {
        url: 'product-xx99-mark-one-headphones/desktop/image-product.jpg',
        alt: 'some awesome picture',
        product: 'XX99 MARK I',
        link: '/product_detail/xx99-mark-i',
      },
      { url: 'product-xx59-headphones/desktop/image-product.jpg', alt: 'some awesome picture', product: 'XX59', link: '/product_detail/xx59' },
    ],
  },
  {
    id: 'zx7',
    category: 'speakers',
    short: 'zx7',
    productIMG: 'product-zx7-speaker/desktop/image-product.jpg',
    feature: '',
    product: 'ZX7 speaker',
    info: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    price: 3500,
    featureDesc1:
      'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.',
    featureDesc2:
      'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
    cartImg: 'cart/image-zx7-speaker.jpg',
    inTheBox: [
      ['2x', 'Speaker Unit'],
      ['2x', 'Speaker Cloth Panel'],
      ['1x', 'User Manual'],
      ['1x', '3.5mm 5m Audio Cable'],
      ['1x', '7.5m Optical Cable'],
    ],
    gallery: [
      ['product-zx7-speaker/desktop/image-gallery-1.jpg', 'random picture'],
      ['product-zx7-speaker/desktop/image-gallery-2.jpg', 'random picture'],
      ['product-zx7-speaker/desktop/image-gallery-3.jpg', 'random picture'],
    ],
    preference: [
      { url: 'product-zx9-speaker/desktop/image-product.jpg', alt: 'some awesome picture', product: 'ZX9 SPEAKER', link: '/product_detail/zx9' },
      {
        url: 'product-xx99-mark-one-headphones/desktop/image-product.jpg',
        alt: 'some awesome picture',
        product: 'XX99 MARK I',
        link: '/product_detail/xx99-mark-i',
      },
      { url: 'product-xx59-headphones/desktop/image-product.jpg', alt: 'some awesome picture', product: 'XX59', link: '/product_detail/xx59' },
    ],
  },
  {
    id: 'yx1',
    category: 'earphones',
    short: 'yx1',
    productIMG: 'product-yx1-earphones/desktop/image-product.jpg',
    feature: 'new product',
    product: 'YX1 WIRELESS EARPHONES',
    info: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    price: 599,
    featureDesc1:
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
    featureDesc2:
      'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    cartImg: 'cart/image-yx1-earphones.jpg',
    inTheBox: [
      ['2x', 'Speaker Unit'],
      ['6x', 'Multi-size Earplugs'],
      ['1x', 'User Manual'],
      ['1x', 'USB-C Charging Cable'],
      ['1x', 'Travel Pouch'],
    ],
    gallery: [
      ['product-yx1-earphones/desktop/image-gallery-1.jpg', 'random picture'],
      ['product-yx1-earphones/desktop/image-gallery-2.jpg', 'random picture'],
      ['product-yx1-earphones/desktop/image-gallery-3.jpg', 'random picture'],
    ],
    preference: [
      {
        url: 'product-xx99-mark-one-headphones/desktop/image-product.jpg',
        alt: 'some awesome picture',
        product: 'XX99 MARK I',
        link: '/product_detail/xx99-mark-i',
      },
      { url: 'product-xx59-headphones/desktop/image-product.jpg', alt: 'some awesome picture', product: 'XX59', link: '/product_detail/xx59' },
      { url: 'product-zx9-speaker/desktop/image-product.jpg', alt: 'some awesome picture', product: 'ZX9 SPEAKER', link: '/product_detail/zx9' },
    ],
  },
];