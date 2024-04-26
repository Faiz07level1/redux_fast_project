import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from "redux"
import * as actions from "./actions"
import reducer from './reducer';
import Counter from './components/Counter/Counter';






const store = createStore(reducer)

const {dispatch, getState, subscribe} = store
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args))
// }


const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
// const update = () => {

// }

// subscribe(update)
document.getElementById("inc").addEventListener("click", inc)
document.getElementById("dec").addEventListener("click", dec)
document.getElementById("rnd").addEventListener("click", () => {
  
  rnd(value)
})



ReactDOM.render(
  <React.StrictMode>
    <Counter counter={getState().value} inc={inc} dec={dec} rnd={() => {
      const value = Math.floor(Math.random() * 10) 
      rnd(value)
    }
    }/>
  </React.StrictMode>,
  document.getElementById('root')
);

