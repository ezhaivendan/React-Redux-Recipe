import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore }  from 'redux';
import { BrowserRouter , Route, Switch, Link } from 'react-router-dom';
import history from './history';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecipieReducer } from './Reducer/Reducer';
import AddRecipeComponent from './Components/Add-recipe';

const store  = createStore(RecipieReducer);

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter history={history}>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route  path='/addrecipe' component={AddRecipeComponent} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
