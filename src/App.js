import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import './App.css';
/**
 * 
 * HashRouter 대신 BrowserRouter를 사용하면 url에 #표시 없음 하지만 github page 설정 하기 어려움
 */
/**
 * 모든 라우터 들은 props를 가진다.
 * 
 */
function App(){
  return <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
  ;
}

export default App;
