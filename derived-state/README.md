## dropdriwilling

entender os conceitos de quando o componente é renderizado.

1. devemos entender estados derivados; 






toda ves que o componente esta atualizando useeffect, de inicial podemos ditar quando useeffect renderizar usando condicionais.

ex:

useEffect(() => {
    if(search.length) {
      ...
    }
}, []) 
