const messages = [
    {
      _id: 2,
      text: 'Hello developer',
      createdAt: new Date(Date.UTC(2016, 5, 12, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 3,
      text: 'Hi! I work from home today!',
      createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
      image: 'https://placeimg.com/140/141/any',
    },
    {
      _id: 6,
      text: 'Come on!',
      createdAt: new Date(Date.UTC(2016, 5, 15, 18, 20, 0)),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 7,
      text: `Hello this is an example of 
          #react #react-native`,
      createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ];
  
  export default messages;