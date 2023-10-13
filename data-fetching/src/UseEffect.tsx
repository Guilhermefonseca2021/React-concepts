import { useState } from "react"
import IsVisible from "./IsVisible"

export default function UseEffect() {
    const [isVisible, setIsVIsible] = useState(true)

  return (  
    <>
        {isVisible && <IsVisible />}
        <button onClick={() => setIsVIsible(!isVisible)}  style={{  width: 56, height: 56}}> CLique para esconder </button>
    </>
  )
}
