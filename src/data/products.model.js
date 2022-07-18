
/* REQUIRES */

const { json } = require('express');
const fs = require('fs');
const {resolve} = require('path');

/* utils */

const mapById = (data) => {
    let map = {};
    data.forEach( ( entry, index) => {
        map[entry.id] = index;
    })
    return map;
}

/* MODEL */

module.exports.getNewId = () => {
    let data = this.getData();

    let lastId = data[data.length - 1].id;

    return lastId + 1  
}

module.exports.getData = () => {
    let dir = resolve(__dirname, './productsDataBase.json');
    let file = fs.readFileSync( dir, 'utf8');
    return JSON.parse(file);
}

module.exports.getEntry = (id) => {
    return this.getData().filter( entry => entry.id == id)[0];
}


module.exports.addEntry = (obj) => {
    let dir = resolve(__dirname, './productsDataBase.json');

    obj.id = this.getNewId();
    
    let file = fs.readFileSync( dir, 'utf8');
    let data = JSON.parse(file);
    data.push(obj);
    fs.writeFileSync( dir, JSON.stringify( data, null, '\t'), 'utf8');
    
    console.log('\nEntry added successfully')
    
    return obj
}

module.exports.removeEntry = (id) => {
    let dir = resolve(__dirname, './productsDataBase.json');
    
    let file = fs.readFileSync( dir, 'utf8');
    let data = JSON.parse(file);
    data = data.filter(entry => entry.id != id);
    fs.writeFileSync( dir, JSON.stringify( data, null, '\t'), 'utf8');
    
    console.log('\nEntry removed successfully')
};


/**
 * @param  {string} id 'id of object to modify
 * @param  {object} obj 'new data for entry'
 */
module.exports.editEntry = ( id, obj) => {
    let dir = resolve(__dirname, './productsDataBase.json');
    
    let file = fs.readFileSync( dir, 'utf8');
    let data = JSON.parse(file);
    let index = mapById(data)[id];
    let entry = data[index];
    
    for ( key in obj ){
        if ( entry[key] != obj[key] ) {
            entry[key] = obj[key]
        }
    }

    data[index] = entry;
    
    fs.writeFileSync( dir, JSON.stringify( data, null, '\t'), 'utf8');
    
    console.log('\nEntry edited successfully')
};

module.exports.replaceEntry = (entry) => {

    let dir = resolve(__dirname, './productsDataBase.json');
    
    let id = entry.id
    let file = fs.readFileSync( dir, 'utf8');
    let data = JSON.parse(file);
    let index = mapById(data)[id];

    data[index] = entry;
    
    fs.writeFileSync( dir, JSON.stringify( data, null, '\t'), 'utf8');
    
    console.log('\nEntry replaced successfully')
}


/* TESTING */

// console.log(this);

// console.log(module.exports.getData());

// this.addEntry({
//     name : 'oldName',
//     stuff : 'stuff'
// })

// module.exports.removeEntry('newData');

// module.exports.editEntry('newData',{
//     name : 'newName',
//     stuff : 'newStuff',
//     newKey : 'newKeyData',
// });

// module.exports.replaceEntry({
//         id: 'newData',
//         name : 'oldName',
//         stuff : 'stuff'
//     })



