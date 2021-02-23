module.exports = {
  type: 'custom',
  test: {
    url: 'https://api.pexels.com/v1/search?query=people',
    method: 'GET',
    params: {},
    headers: { Authorization: '{{bundle.authData.api_key}}' },
    body: {},
    removeMissingValuesFrom: {},
  },
  fields: [
    { computed: false, key: 'api_key', required: true, label: 'API Key' },
  ],
  customConfig: {},
};
