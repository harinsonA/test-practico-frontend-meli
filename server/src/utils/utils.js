const getQueryParams = (request) => {
  const query = request.query;
  if (!Object.keys(query).length) {
    return '';
  }
  return query.q || '';
}

const extractKeys = (object, keys) => {
  return Object.keys(object).reduce(
    (newObject, key) => keys.includes(key) ? {...newObject, [key]: object[key]} : newObject, {});
}


const findMostMatchedKey = (objectList, key) => {
  const occurrences = objectList.reduce((counter, object) => {
    if (object[key]) {
      counter[ object[key] ] = (counter[ object[key] ] || 0) + 1;
    }
    return counter;
  }, {});

  const mostMatchedKey = Object.entries(occurrences).sort((init, end) => end[1] - init[1]);
  return mostMatchedKey ? mostMatchedKey[0][0] : null;
}


const BuilderContextData = (data) => {
  return {
    author: {
      name: "Harinson",
      lastname: "Arellan"
    },
    ...data,
  }
}

module.exports = {
  getQueryParams,
  extractKeys,
  findMostMatchedKey,
  BuilderContextData,
}