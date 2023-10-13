import { UseContext } from "react"
import { CustomerContext } from "../context/customerForm"

export default function helloContext() {
    const { name } = UseContext(CustomerContext)
  
    return (
    <div>
        <p> {name} </p>
    </div>
  )
}
