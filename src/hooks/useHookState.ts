import { useState } from "react";

export default function useHookState(nome: string) {
    const [count, setCount] = useState(0);
    const [minhastring, setMinhastring] = useState(nome)
    const countNoHook = 0;
    

    function handleIncrement() {
        setCount(prevState => {
          setMinhastring('guilherme tem contagem' + (prevState + 1))
          return prevState + 1
        })
    }  

    return { count, minhastring, countNoHook, handleIncrement, };
}
