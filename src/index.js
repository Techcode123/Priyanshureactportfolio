import React from 'react'; // react is imported to use jsx element(<h1>hello world</h1>)
import ReactDOM from 'react-dom/client';// it is import to use render method
//ReactDOM.render(kya dikhana hai,kaha dikahana hai);
// import "./index.css";
import Home from './Home';
import './indexmain.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Home/>
</>
);

