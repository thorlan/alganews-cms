import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import UserView from './app/views/Users.view';
import NotFound404View from './app/views/NotFound404.view';
import ContactView from './app/views/Contact.view';
import HomeView from './app/views/Home.view';
import GlobalStyles from './core/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={HomeView} />
        <Route path={'/contato'} exact component={ContactView} />
        <Route path={'/usuario/:userId'} exact component={UserView} />
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
