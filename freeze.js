
const bottle = { color: 'green', price: '20', isCleanded: true, capacity: 1};

const keys = Object.keys(bottle);
console.log(keys);

const values = Object.values(bottle);
console.log(values);

const pair = Object.entries(bottle);
console.log(pair); 

console.log(bottle);

// jodi seal object a bosano hoy tahole object modifie kora jay, add ba remove kora jay na.

Object.seal(bottle);

Object.freeze(bottle);
// freeze korle object a kono man change a hobe na,,ja ase tai
delete bottle.isCleanded;

bottle.price = 1000;

bottle.height = 12;
console.log(bottle);

// important enteirs, seal, freeze



