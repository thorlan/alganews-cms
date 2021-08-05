import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import UserView from './views/Users.view';
import NotFound404View from './views/NotFound404.view';
import ContactView from './views/Contact.view';
import HomeView from './views/Home.view';
import NavBar from './components/NavBar/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route path={'/'} exact component={HomeView} />
          <Route path={'/contato'} exact component={ContactView} />
          <Route path={'/usuario/:userId'} exact component={UserView} />
          <Route component={NotFound404View} />
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
