const express = require('express');
const routerItems = express.Router();
const { getItems, getItem } = require('../controllers/itemsController');

// Routers
routerItems.get('/', getItems);
routerItems.get('/:id', getItem);

module.exports = routerItems;