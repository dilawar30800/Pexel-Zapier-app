module.exports = {
  operation: {
    perform: {
      url: 'https://api.pexels.com/v1/photos/{{bundle.inputData.id}}',
      method: 'GET',
      params: {},
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: '{{bundle.authData.api_key}}',
      },
      body: { id: '{{bundle.inputData.id}}' },
      removeMissingValuesFrom: {},
    },
    inputFields: [
      {
        key: 'id',
        label: 'Photo Id',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      id: 1667847,
      width: 5997,
      height: 3998,
      url:
        'https://www.pexels.com/photo/man-kissing-left-cheek-of-smiling-woman-1667847/',
      photographer: 'Git Stephen Gitau',
      photographer_url: 'https://www.pexels.com/@git-stephen-gitau-302905',
      photographer_id: 302905,
      src: {
        original:
          'https://images.pexels.com/photos/1667847/pexels-photo-1667847.jpeg',
        large2x:
          'https://images.pexels.com/photos/1667847/pexels-photo-1667847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/1667847/pexels-photo-1667847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/1667847/pexels-photo-1667847.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/1667847/pexels-photo-1667847.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/1667847/pexels-photo-1667847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/1667847/pexels-photo-1667847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny:
          'https://images.pexels.com/photos/1667847/pexels-photo-1667847.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
    },
    outputFields: [
      { key: 'id' },
      { key: 'width' },
      { key: 'height' },
      { key: 'url' },
      { key: 'photographer' },
      { key: 'photographer_url' },
      { key: 'photographer_id' },
      { key: 'src__original' },
      { key: 'src__large2x' },
      { key: 'src__large' },
      { key: 'src__medium' },
      { key: 'src__small' },
      { key: 'src__portrait' },
      { key: 'src__landscape' },
      { key: 'src__tiny' },
      { key: 'liked' },
    ],
  },
  key: 'get_photo',
  noun: 'photo',
  display: {
    label: 'Get Photo',
    description: 'To get photo by its id from the pexel.',
    hidden: false,
    important: true,
  },
};
