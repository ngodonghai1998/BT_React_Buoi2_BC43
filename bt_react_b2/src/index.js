import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Content from './Components/Content';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <Content />
    </div>
);


