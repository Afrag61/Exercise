import { useState } from 'react';

import Toast from './Toast.jsx';

function App() {
  const [isVisible, setIsVisible] = useState()

  function handleEnrol() {
    // Todo: Show toast
    setIsVisible(true)
    setTimeout(() => {
      // Todo: hide toast
      setIsVisible(false)
    }, 3000);
  }

  return (
    <div id="app">
      {/* Todo: Render <Toast /> component (conditionally) here */}
      {isVisible && <Toast message="Done !" />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
