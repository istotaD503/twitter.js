'use strict'

const _ = require('lodash');

var data = [];

function add(name, text) {
    data.push({name,text})
};

function list() {
    return _.cloneDeep(data);
};

function find(props) {
    return _.cloneDeep(_.filter(data, props));
};

module.exports = {
    add, list, find
};

console.log(data);
add('Alex', 'Lodash is cool!')
console.log(data)
console.log(data === list())