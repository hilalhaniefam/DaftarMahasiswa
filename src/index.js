import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const globalState = {
  navOpen: false,
  listMahasiswa: [],
  mahasiswaSudahLoad: false
}


//Reducer
const rootReducer = (state = globalState, action) => {
  if(action.type === 'NAV_OPEN'){
      return{
          ...state,
          navOpen: !state.navOpen
      }
  }
  if(action.type === 'LOADING_MAHASISWA'){
      return{
          ...state,
          mahasiswaSudahLoad: true
      }
  }
  return state;
}


//store
const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
