const authentication = require('./authentication');
const searchPhotoCreate = require('./creates/search_photo.js');
const getPhotoCreate = require('./creates/get_photo.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [searchPhotoCreate.key]: searchPhotoCreate,
    [getPhotoCreate.key]: getPhotoCreate,
  },
};
