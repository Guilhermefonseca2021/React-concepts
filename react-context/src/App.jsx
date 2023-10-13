import { useState } from 'react'
import './App.css'
import FormCallBack from './components/formCallback'
import Hello from './components/helloContext'
import { CustomerContext } from './context/customerForm'

function App() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  function handleSubmit({name, email}) {
    console.log('dados app', {name, email})

    setName(name)
    setEmail(email)
  }

  return (
    <>
      <CustomerContext.Provider value={{name, email, submit: handleSubmit}}>
        <FormCallBack 
        />
        <Hello />
      </CustomerContext.Provider>
    </>
  )
}

export default App
