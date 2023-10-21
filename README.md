## React e boas praticas

<p align="center">
   <a href="#nocoes-de-algoritmo">Material de estudo</a> / 
   <a href="#insights">Insifhts</a>
</p>

## Nocoes de algoritmo

- [x] Comportamento de closures no React
- [x] Fetch API with Axios
- [x] Derived states entre componentes
   - [x] Fluxo de renderizacao
   - [x] UseEffect com condicionais (ou uma variavel para controle de renderizacao)
   - [ ] UseMemo / Usecallback
- [x] Hooks X Class
- [x] Context API
   - [x] Arvore de componentes
- [x] Comportamento de estados assincrono




## Insights

Conexao de Frontend com backend com axios pega nossos dados como JSON por padrao, podemos dar um console.log(data) e ler toda nossa api restfull.

Forma mais comun (sem axios)

```js
   useEffect(() => {
      fetch('https...')     
       .then(response =>   
           response.json())
       .then(data => {
          setRepositories(data);
       })
   }, [])
```

Com axios.

```js
   cons [data, setData] = useState([])
   useEffect(() => {
       axios.get(url)
       .then(response => {
           setData(response.data)
           })
       .finally(() => {
           setFetching(false)
       })
   }, [url])
// Criamos um hook para nossa API(para ter mais controle das propriedades)
```

setStates sao assincronos, chamar dois sets referentes no mesmo escopo pode trazer erros se nao cuidar pode nao pegar o valor atual.

errado: (ja espero colocar o valor depois de atualizar no excopo)
```js
function handleIncrement() {
    setCount(prevState => prevState +1)
    setMinhastring('guilherme tem contagem' + count + 1)  
    })
}
```

certo: (faco dentro do escopo que atualizar ser chamado o estado atualizado para nosso outro state e retorno o valor)
```js
   function handleIncrement() {
       setCount(prevState => {
         setMinhastring('guilherme tem contagem' + prevState + 1)
         return prevState +1
       })
}
```


## useEffect 

trabalhamos mais o cicl0 de vida de um componente da atualiza, vida e morte. 

```js
   (atualiza) = [tenhomMeuItem]
   (semCiclo) = []
   (morte)    = return dentro do escopo do useEffect;
   
   useEffect(() => {
       console.log('')
   
       return () => {
           console.log('holla destruction')
       }
   }, [])
```


## Arvore de uma aplicacao


<img width="1416" alt="componentes-reutilizaveis" src="https://github.com/Guilhermefonseca2021/data-fetching/assets/92196697/3a7bdf1c-a039-44e3-9d80-b52637c9ab5a">
