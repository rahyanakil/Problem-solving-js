// const cartItems = [
//   {
//     id: "p-001",
//     name: "Daraz Laptop Bag",
//     price: 1500,
//     quality: 1,
//   },
//   {
//     id: "p-002",
//     name: "Walton USB-C Cable",
//     price: 350,
//     quality: 2,
//   },
//   {
//     id: "p-003",
//     name: "Aarong Kurta",
//     price: 2200,
//     quality: 1,
//   },
// ];

// const subTotal = cartItems.reduce((subtotal, product) => {
//   console.log(subtotal, product);
//   return subtotal + product.price * product.quality;
// }, 0);

// console.log(subTotal);

const players = [
  { name: "Jamal Bhuiyan", score: 88 },
  { name: "Sheikh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
  console.log(bestPlayer, player);
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }
  return player;
}, players[0]);

console.log(bestScorer);
