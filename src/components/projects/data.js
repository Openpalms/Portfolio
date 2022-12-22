import socialNetwork from '../../assets/socialNetwork.png';
import todos from '../../assets/todos.png';

const people = [
  {
    id: 1,
    image: socialNetwork,
    name: 'Social Network',
    title: 'React, Redux,Typescript, custom API and more.. ',
    quote:
      'Facebook/vk clone SPA created with React JS library, Redux for state management, TypeScript for scalability, bootstrap for beauty. Still in progress, mirgating to Typescript.  ',
  },
  {
    id: 2,
    image:
      'https://user-images.githubusercontent.com/99143587/201422108-4f08fef5-d8f3-4985-8222-fd19c065098d.png',
    name: 'Meetings',
    title: 'React, ReduxToolkit, NodeJS+MongoDB for backend',
    quote:
      'Tinder clone SPA build with ReactJS/Redux and and NodeJS+MongoDBfor backend.',
  },
  {
    id: 3,
    image: todos,
    name: 'Todo List',
    title: 'React, Firebase Realtime/Firestore/Storage',
    quote:
      "Todo List created with React JS library, Firebase for storing data. Allows you to create different projects with it's own todo lists and microtasks in it. Lists are graggable across the board. Still in progress, styling needs to be done, logic's done.",
  },
  {
    id: 4,
    image:
      'https://user-images.githubusercontent.com/99143587/196378933-50ac29cf-d0b3-400f-8d95-d66031bd098d.png',
    name: 'User Search',
    title: 'React, NodeJS for server',
    quote:
      'Simple project that filters out data coming from the backend. Built it to gain some experience in NodeJs and backend overall.',
  },
  {
    id: 5,
    image: socialNetwork,
    name: 'Realtime chat/feed app ',
    title: 'React,Typescript, firebase',
    quote:
      'Realtime chat with people, your own feed, likes and subscribers - just a part of this app. Builded with many firebase features - auth, realtime database, firestore, storage to make my app smooth. Come and check it at my github',
  },
];
export default people;
