import { renderEntireTree } from "../render";


let state ={
    profilePage:{
        posts: [
            { id: 1, message: 'Its firs post' },
            { id: 2, message: 'Its 2 second post' },
            { id: 3, message: 'Its.....post number 3!'}
        ],
        newPostText:"DK - React study"
    },
    dialogsPage:{
        dialogs :[
            { id: 1, name: 'Den' },
            { id: 2, name: 'Ola' },
            { id: 3, name: 'Junna' },
            { id: 4, name: 'Michael' } 
        ],
        messages: [
            { id: 1, message: 'HEllo' },
            { id: 2, message: 'hi' },
            { id: 3, message: 'How are you?&' },
            { id: 4, message: 'What"s up man?' }
        ]
    }
}

export let addPost = ()=>{
    let newPost = {
        id:5,
        message:state.profilePage.newPostText
    }
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export let updateNewPostText = (newText)=>{
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}



export default state;