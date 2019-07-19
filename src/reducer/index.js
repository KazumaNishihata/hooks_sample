import { createStore,combineReducers } from 'redux'
import { article } from './article'

export default 
  createStore(combineReducers({
    article
  }))