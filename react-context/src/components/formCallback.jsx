import { useState, UseContext } from "react"
import { CustomerContext } from "../context/customerForm";

export default function FormCallBack() {
  const { submit } = UseContext(CustomerContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    console.log('dados componente', {name, email})
    submit({name, email})
  }

  return (
    <form onSubmit={handleSubmit}>
        <label  htmlFor="name">Name:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <label  htmlFor="name">Email:</label>
        <input 
          type="text"
          name="name"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button type="submit"> Enviar </button>
    </form>
  )
}
