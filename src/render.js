import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state.js';
import {updateNewPostText} from './redux/state.js'

export let renderEntireTree = (state)=>{
    ReactDOM.render(<App 
        state={state} 
        addPost={addPost} 
        updateNewPostText = {updateNewPostText}
        />, document.getElementById('root'));
}
