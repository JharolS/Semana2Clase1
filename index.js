let array = [1,2,3,4,5];

let numbers = [1, {1: 1}, '1' ];

let ocean1 = 'Pacific';
let ocean2 = 'Atlantic';
let ocean3 = 'Indian';
let ocean4 = 'Southerm';
let ocean5 = 'Artic';

let oceans = ['Pacific','Atlantic','Indian','Southerm','Artic']

console.log(oceans[0])

let oceanDetails = [{
    name: 'Pacific',
    longitude: '-180',
    latitude: '-90',
    depth: '-1000'
},
{
    name: 'Atlantic',
    longitude: '-180',
    latitude: '-90',
    depth: '-1000'
},
{
    name: 'Indian',
    longitude: '-180',
    latitude: '-90',
    depth: '-1000'
},
{
    name: 'Southern',
    longitude: '-180',
    latitude: '-90',
    depth: '-1000'
},
{
    name: 'Arctic',
    longitude: '-180',
    latitude: '-90',
    depth: '-1000'
}];

console.log(oceanDetails[0])

let sharks = new Array(
    "Hamm",
    "Great White",
    "Tiger"
);

console.log(sharks.length)

let mixedData = [
    "string",
    42,
    true,
    [1, 2, 3, 4],
    ["1", null, false],
    {
        name: "John",
        age: 30
    }
]

let seaCreatures = [
    'Octopus', //0
    'squid', //1
    'shark', //2
    'whale', //3
    'dolphin', //4
    'fishes' //5
]

// replace
seaCreatures[1] = 'fish'

console.log(seaCreatures)
let sharkPosition = seaCreatures.indexOf('shark',2);

console.log(sharkPosition)

const lastIndex = seaCreatures.length -1;
console.log(seaCreatures[lastIndex])

let nestedArray = [
    [0,1,2], //0
    [4,5,6]  //1
]

console.log(nestedArray[0][1])

seaCreatures.push('Tiger fish');

seaCreatures.unshift('Seahorse');

//add
seaCreatures[9] ='whale';

//remove
seaCreatures.splice(8,1);

console.log(seaCreatures);

//deep copy array

//let newArray = [...seaCreatures]

//let firstArray = seaCreatures.splice (0,3);
//let secondArrya = seaCreatures.splice (4,2);

//let fullArrays = firstArray.concat(secondArrya);

//console.log('concet', fullArrays)

//remove last element
seaCreatures.pop();

//reomve first element

seaCreatures.shift();

console.log(seaCreatures)

let shellfish  = [
    'oyster',
    'clam',
    'mussel',
    'scallop',
    'lobster',
];

for (let i = 0; i < shellfish.length; i++) {
    console.log(i, shellfish[i])
}

let mammals = [
    'dolphin',
    'whale',
    'manatee'
];

// Loop through each mammal

for (let mammal of mammals) {
    console.log(mammal)
}
