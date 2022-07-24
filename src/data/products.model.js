
/* REQUIRES */

const { json } = require('express');
const fs = require('fs');
const {resolve} = require('path');

/* CONSTANTS */

const DATABASE_FILE_NAME = 'productsDataBase.json';

/* utils */

const mapById = (data) => {
    let map = {};
    data.forEach( ( entry, index) => {
        map[entry.id] = index;
    })
    return map;
}

/* MODEL */

/**
 * Gets the corresponding new id, based on the higest id in the database.
 * @returns {int} new id
 */
module.exports.getNewId = () => {
    let data = this.getData();

    let lastId = data[data.length - 1].id;

    return lastId + 1  
}

/**
 * Gets all the database as an object.
 * @returns {object} data object with all the productsDataBase information
 */
module.exports.getData = () => {
    let dir = resolve(__dirname, DATABASE_FILE_NAME );
    let file = fs.readFileSync( dir, 'utf8');
    return JSON.parse(file);
}

/**
 * Retrieves some entry from the productsDataBase
 * @param {string} id id of the product to retrieve
 * @returns {object} entry object
 */
module.exports.getEntry = (id) => {
    return this.getData().filter( entry => entry.id == id)[0];
}

/**
 * Store new entry in the productsDataBase
 * @param {object} obj data object to store
 * @returns {object} obj modified object with newly asigned id
 */
module.exports.addEntry = (obj) => {
    let dir = resolve(__dirname, DATABASE_FILE_NAME );

    obj.id = this.getNewId();
    
    let file = fs.readFileSync( dir, 'utf8');
    let data = JSON.parse(file);
    data.push(obj);
    fs.writeFileSync( dir, JSON.stringify( data, null, '\t'), 'utf8');
    
    console.log('\nEntry added successfully')
    
    return obj
}

/**
 * Delete entry from productsDataBase
 * @param {string} id id of the entry to remove
 */
module.exports.deleteEntry = (id) => {
    let dir = resolve(__dirname, DATABASE_FILE_NAME );
    
    let file = fs.readFileSync( dir, 'utf8');
    let data = JSON.parse(file);
    data = data.filter(entry => entry.id != id);
    fs.writeFileSync( dir, JSON.stringify( data, null, '\t'), 'utf8');
    
    console.log('\nEntry removed successfully')
};


/**
 * Edit some entry from productsDataBase
 * @param  {string} id id of object to modify
 * @param  {object} obj new data for entry
 */
module.exports.editEntry = ( id, obj) => {
    let dir = resolve(__dirname, DATABASE_FILE_NAME );
    
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

/**
 * Replaces whole entry from the productsDataBase
 * @param {object} entry entry object with matching id to the one to be replaced 
 */
module.exports.replaceEntry = (entry) => {

    let dir = resolve(__dirname, DATABASE_FILE_NAME );
    
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



