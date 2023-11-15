import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Header</h1>
          {/* Other existing content, if any */}
          <FeedbackForm />
          <FeedbackList />
        </header>
      </div>
    </Provider>
  );
}

export default App;


// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import FeedbackForm from './components/FeedbackForm';
// import FeedbackList from './components/FeedbackList';

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <FeedbackForm />
//         <FeedbackList />
//       </div>
//     </Provider>
//   );
// }

// export default App;
