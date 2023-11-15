import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../actions/feedbackActions';

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState({ orderId: '', feedbackDescription: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFeedback(feedback));
    // Clear the form or perform any other necessary actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Order ID:
        <input
          type="text"
          value={feedback.orderId}
          onChange={(e) => setFeedback({ ...feedback, orderId: e.target.value })}
        />
      </label>
      <label>
        Feedback:
        <textarea
          value={feedback.feedbackDescription}
          onChange={(e) => setFeedback({ ...feedback, feedbackDescription: e.target.value })}
        />
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addFeedback } from '../actions/feedbackActions';

// const FeedbackForm = () => {
//   const dispatch = useDispatch();
//   const [feedbackDescription, setFeedbackDescription] = useState('');

//   const handleSubmit = () => {
//     // You can add additional validation or API call here
//     const feedbackData = {
//       feedbackDescription,
//       // Add other feedback properties as needed
//     };
//     dispatch(addFeedback(feedbackData));
//     setFeedbackDescription('');
//   };

//   return (
//     <div>
//       <h2>Feedback Form</h2>
//       <textarea
//         placeholder="Enter your feedback..."
//         value={feedbackDescription}
//         onChange={(e) => setFeedbackDescription(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Submit Feedback</button>
//     </div>
//   );
// };

// export default FeedbackForm;
