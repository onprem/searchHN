import { combineReducers } from 'redux'
import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  CHANGE_SEARCH,
  CHANGE_SORT,
  CHANGE_TYPE,
  CHANGE_TIME,
  CHANGE_PAGE,
  USER_LOGIN,
  USER_LOGOUT
} from './actions'

function searchSettings(state = {
  articleType: 'story',
  timeRange: 'all',
  sort: 'byPopularity',
  query: ''
}, action) {
  switch (action.type) {
    case CHANGE_TIME:
      return Object.assign({}, state, {
        timeRange: action.timeR
      })
    case CHANGE_TYPE:
      return Object.assign({}, state, {
        articleType: action.articleType
      })
    case CHANGE_SORT:
      return Object.assign({}, state, {
        sort: action.sort
      })
    case CHANGE_SEARCH:
      return Object.assign({}, state, {
        query: action.query
      })
    default:
      return state
  }
}

function user(state = {
  name: '',
  email: '',
  isLoggedIn: false
}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return Object.assign({}, state, {
        name: action.name,
        email: action.email,
        isLoggedIn: true
      })
    case USER_LOGOUT:
      return Object.assign({}, state, {
        name: '',
        email: '',
        isLoggedIn: false
      })
    default:
      return state
  }
}

function searchResults(
  state = {
    isFetching: false,
    //didInvalidate: false,
    data: [],
    number: 0,
    timeTaken: 0,
    page: 0,
    totalPages: 0
  },
  action
) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data.hits,
        timeTaken: action.data.processingTimeMS,
        number: action.data.nbHits,
        totalPages: action.data.nbPages,
        page: action.data.page
      })
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.page,
      })
    default:
      return state
  }
}

// function postsBySubreddit(state = {}, action) {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//     case RECEIVE_POSTS:
//     case REQUEST_POSTS:
//       return Object.assign({}, state, {
//         [action.subreddit]: posts(state[action.subreddit], action)
//       })
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  user,
  searchSettings,
  searchResults
})

export default rootReducer