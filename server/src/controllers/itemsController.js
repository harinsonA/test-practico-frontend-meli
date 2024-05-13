const { getExternalCategories } = require('../services/categoriesService');
const { getExternalItems, getExternalItem } = require('../services/itemsService');
const { getQueryParams, extractKeys, BuilderContextData, findMostMatchedKey } = require('../utils/utils');

const ALLOWED_ITEMS_KEYS = [
  'id',
  'title',
  'thumbnail',
  'price',
  'shipping',
  'condition',
  'category_id',
];

const ALLOWED_ITEM_KEYS = [
  ...ALLOWED_ITEMS_KEYS,
  'plain_text',
]

const getItems = async (request, response) => {
  try {
    const queryParams = getQueryParams(request);
    let items = await getExternalItems(queryParams);
    items = items.map(item => extractKeys(item, ALLOWED_ITEMS_KEYS));
  
    const categoryId = findMostMatchedKey(items, 'category_id');
    const categories = await getExternalCategories(categoryId);

    response.json(BuilderContextData({categories, items}));
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    response.status(404).json({ error: 'Hubo un problema al obtener los datos.' });
  }
}

const getItem = async (resquest, response) => {
  try {
    const itemID = resquest.params.id;
    let item = await getExternalItem(itemID);
    item = extractKeys(item, ALLOWED_ITEM_KEYS);

    const categories = await getExternalCategories(item.category_id);

    response.json(BuilderContextData({categories, item}));
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    response.status(404).json({ error: 'Hubo un problema al obtener los datos.' });
  }
} 

module.exports = {
  getItems,
  getItem,
}