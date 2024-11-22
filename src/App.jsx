import React from 'react';

import Input from './components/Input.jsx';

export const userData = {
  name: '',
  email: '',
};

export default function App() {
  const name = React.useRef();
  const email = React.useRef();
  
  function handleSaveData() {
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;

    userData.name = enteredName;
    userData.email = enteredEmail;

    console.log(userData);
  }

  return (
    <div id="app">
      <Input ref={name} type="text" label="Your Name" />
      <Input ref={email} type="email" label="Your E-Mail" />
      <p id="actions">
        <button className='' onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}

