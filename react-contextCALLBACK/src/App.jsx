import { useState } from 'react';
import './App.css'
import FormCallback from './components/formCallback'
import HelloContext from './components/helloContext';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit({ name, email }) {
    console.log('dados do App', { name, email })

    setName(name);
    setEmail(email);
  }

  return (
    <>
      <HelloContext name={name} />
      <FormCallback onSubmit={handleSubmit} />
    </>
  )
}

export default App
