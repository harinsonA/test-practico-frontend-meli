const axios = require('axios');

const API_ITEMS = 'https://api.mercadolibre.com/sites/MLA/search?q=';

const API_ITEM = 'https://api.mercadolibre.com/items/';
const API_ITEM_DESCRIPTION = 'https://api.mercadolibre.com/items/__id__/description';


const getExternalItems = async (query) => {
  const apiResponse = await axios.get(`${API_ITEMS}${query}`);
  if (!apiResponse.data.results) {
    return [];
  }
  return apiResponse.data.results.slice(0, 4);
}

const getExternalItem = async (id) => {
  const [apiItemResponse, apiItemDescriptionResponse] = await Promise.all([
    axios.get(`${API_ITEM}${id}`),
    axios.get(`${API_ITEM_DESCRIPTION.replace('__id__', id)}`)
  ]);

  const itemData = {
    ...apiItemResponse.data,
    ...apiItemDescriptionResponse.data,
  }

  if (!Object.keys(itemData).length) {
    return {}
  }
  return itemData;
}

module.exports = {
  getExternalItems,
  getExternalItem
};