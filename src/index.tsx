import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NotFound404View from './app/views/NotFound404.view';
import EditorsListView from './app/views/EditorsList.view';
import HomeView from './app/views/Home.view';
import GlobalStyles from './core/globalStyles'
import PostCreateView from './app/views/PostCreate.view';
import EditorProfileView from './app/views/EditorProfile.view';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomeView} />
        <Route path='/editores' exact component={EditorsListView} />
        <Route path='/editores/:id' exact component={EditorProfileView} />
        <Route path='/posts/criar' exact component={PostCreateView} />
        <Route component={NotFound404View} />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
