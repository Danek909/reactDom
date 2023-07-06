import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let posts = [
  { id: 1, message: 'Hi , how are you?', likeCount: 12 },
  { id: 2, message: 'Hi , Govgvjhd', likeCount: 11 },
  { id: 3, message: 'bla bla bla ', likeCount: 12 },
  { id: 4, message: 'Da da da ', likeCount: 11 },
]

let dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Danya' },
  { id: 3, name: 'Andrey' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Sasha' },
  { id: 5, name: 'Viktor' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is you it_kamasutra' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
