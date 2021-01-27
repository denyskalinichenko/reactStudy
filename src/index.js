import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let post = [
    { id: 1, message: 'Its firs post', },
    { id: 2, message: 'Its 2 second post', },
    { id: 3, message: 'Its.....post number 3!' }
  ]
  let dialogs = [
    { id: 1, name: 'Ola' },
    { id: 2, name: 'Denis' },
    { id: 3, name: 'Junna' },
    { id: 4, name: 'Misha' },
    { id: 5, name: 'Lera' },
    { id: 6, name: 'Eba' },
    { id: 7, name: 'Alina' }
  ]
let messages = [
    { id: 1, message: 'HEllo' },
    { id: 2, message: 'hi' },
    { id: 3, message: 'How are you?&' },
    { id: 4, message: 'What"s up man?' }
]

ReactDOM.render(<App post={post} messages={messages} dialogs={dialogs}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
