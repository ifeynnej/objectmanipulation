const sculptureList = require('./data.js'); // import data.js


const sculptureListLengths = {};

for (const section of sculptureList) {
    const ObjectNew = {};
    for (const key in section){
        ObjectNew[key] = section[key].length;
    }
    sculptureListLengths[section.name] = ObjectNew;
  }
  console.log(sculptureListLengths);