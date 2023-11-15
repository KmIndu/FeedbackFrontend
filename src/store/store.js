import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import feedbackReducer from '../reducers/feedbackReducer';

const store = createStore(feedbackReducer, applyMiddleware(thunk));

export default store;


// import { createStore } from 'redux';
// import feedbackReducer from '../reducers/feedbackReducer';

// const store = createStore(feedbackReducer);

// export default store;