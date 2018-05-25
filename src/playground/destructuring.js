// const person = {
//     name: 'Srijith',
//     age: 35,
//     location: {
//         city: 'blore',
//         temp: 22
//     }
// };

// const {name='Anonymous', age} = person;

// console.log(`${name} is ${age}.`);


// const { city, temp: temperature } = person.location;
// console.log(`its ${temperature} in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName='Self Publish'} = book.publisher; 

// console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Blore', 'KA', '560043'];

const [ , city, state ] = address;

console.log(`You are in ${ city } ${ state }`);

