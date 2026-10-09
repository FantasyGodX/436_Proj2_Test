export const CATEGORIES = ['All', 'Sweet', 'Tangy', 'Rare']

export const MANGOES = [
  {
    id: 'alphonso',
    name: 'Alphonso',
    origin: 'Ratnagiri, India',
    category: 'Rare',
    price: 4.75,
    sweetness: 5,
    season: 'Apr - Jun',
    blurb: 'The "king of mangoes": saffron-gold flesh, buttery texture, and a floral perfume.',
    colors: { body: '#f6b21a', blush: '#f08a24' },
    inStock: true,
  },
  {
    id: 'ataulfo',
    name: 'Ataulfo',
    origin: 'Chiapas, Mexico',
    category: 'Sweet',
    price: 2.25,
    sweetness: 5,
    season: 'Mar - Jul',
    blurb: 'Small, silky, and honey-sweet with almost no fibre. Perfect for eating with a spoon.',
    colors: { body: '#ffc928', blush: '#f9a21b' },
    inStock: true,
  },
  {
    id: 'kent',
    name: 'Kent',
    origin: 'Homestead, Florida',
    category: 'Sweet',
    price: 2.95,
    sweetness: 4,
    season: 'Jun - Sep',
    blurb: 'Plump and juicy with rich, tropical sweetness. Stays green-red even when ripe.',
    colors: { body: '#8fb339', blush: '#e0603a' },
    inStock: true,
  },
  {
    id: 'tommy-atkins',
    name: 'Tommy Atkins',
    origin: 'Oaxaca, Mexico',
    category: 'Tangy',
    price: 1.95,
    sweetness: 3,
    season: 'Apr - Aug',
    blurb: 'Firm, mild, and a little tart. Great sliced into salsas, salads, and smoothies.',
    colors: { body: '#e4572e', blush: '#f2a33a' },
    inStock: true,
  },
  {
    id: 'keitt',
    name: 'Keitt',
    origin: 'Ica, Peru',
    category: 'Tangy',
    price: 2.5,
    sweetness: 3,
    season: 'Aug - Oct',
    blurb: 'Large and lime-green even at peak ripeness, with a bright, citrusy bite.',
    colors: { body: '#7faf3c', blush: '#c9d94a' },
    inStock: true,
  },
  {
    id: 'kesar',
    name: 'Kesar',
    origin: 'Gir, Gujarat',
    category: 'Rare',
    price: 4.25,
    sweetness: 5,
    season: 'May - Jun',
    blurb: 'Saffron-colored and intensely aromatic. Our shortest, most beloved harvest.',
    colors: { body: '#f4a81d', blush: '#e9691f' },
    inStock: false,
  },
  {
    id: 'haden',
    name: 'Haden',
    origin: 'Sinaloa, Mexico',
    category: 'Tangy',
    price: 2.1,
    sweetness: 4,
    season: 'Mar - May',
    blurb: 'The classic red-blushed mango: sweet-tart, aromatic, and wonderfully juicy.',
    colors: { body: '#e8453c', blush: '#f6b63b' },
    inStock: true,
  },
  {
    id: 'carabao',
    name: 'Carabao',
    origin: 'Guimaras, Philippines',
    category: 'Sweet',
    price: 3.4,
    sweetness: 5,
    season: 'Mar - Jun',
    blurb: 'Creamy, honeyed, and nearly seedless-feeling. The beloved "Manila" mango.',
    colors: { body: '#f7d23e', blush: '#c9d94a' },
    inStock: true,
  },
]

export const PERKS = [
  {
    id: 'ripe',
    title: 'Ripened on the tree',
    text: 'We wait for the fruit to color and soften naturally, so the sugar is already there.',
  },
  {
    id: 'fresh',
    title: 'Shipped in 48 hours',
    text: 'Picked, packed, and on its way within two days, with no cold-storage detours.',
  },
  {
    id: 'farms',
    title: 'Family-run orchards',
    text: 'Every variety comes from a grower we know by name and pay a fair price.',
  },
  {
    id: 'promise',
    title: 'Ripe or replaced',
    text: 'If a mango arrives bruised or bland, tell us and we will send another.',
  },
]

export const PROMO_CODES = {
  MANGO10: 0.1,
  SUMMER15: 0.15,
}

export const FREE_SHIPPING_THRESHOLD = 40
export const SHIPPING_FEE = 6.95
export const GIFT_BOX_FEE = 4.99
export const MAX_PER_VARIETY = 12
