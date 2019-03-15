import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; 可以删掉
//引入一个app.js组件
import App from './App';
//不用管，加快react运行速度的组件
import * as serviceWorker from './serviceWorker';
//把app组件渲染到root节点上
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
