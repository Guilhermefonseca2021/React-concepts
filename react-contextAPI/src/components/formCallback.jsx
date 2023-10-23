import { useState } from "react"


export default function FormCallback(onSubmit) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault()
    console.log('dados do callback', { name, email })

    onSubmit({ name, email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input 
        type="text" 
        name="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input 
        type="text"  
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      /> 

      <button type="submit">Enviar</button>
    </form>
  )
}
