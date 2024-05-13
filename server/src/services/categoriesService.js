const axios = require('axios');

const API_CATEGORIES = 'https://api.mercadolibre.com/categories/:id';


const getExternalCategories = async (categoryId) => {
  const apiResponse = await axios.get(`${API_CATEGORIES.replace(':id', categoryId)}`);
  if (!apiResponse.data.path_from_root) {
    return [];
  };
  return apiResponse.data.path_from_root.reduce((newArray, category) => [...newArray, category.name], []);
}

module.exports = {
  getExternalCategories,
};