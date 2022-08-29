import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './assets/styles.module.css';
import './index.css';
import './assets/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const embeddedStyles = {
  color: 'blue',
  textTransform: 'lowercase',
  textDecoration: 'underline'
};

const name = 'World';
const hello = <h1 style={{ color: 'green', textTransform: 'uppercase', textDecoration: 'underline' }}>Hello React Project!</h1>
const greet = <h1 style={embeddedStyles}>Hello, { name }!</h1>
const greetHello = (name) => {
  return ( <h1 className="greet">Greetings, { name }! Welcome to your first <span className={styles.groot}>React JS Project</span>.</h1> );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { hello }
    { greet }
    { greetHello(name) }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
