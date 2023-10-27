## entender o mal da performance

O principio sera entender o algoritmo de reconciliacao que gera uma DOM(arvore de elementos) que nao sao gerados diretos, 

React usa o virtual DOM (gera uma nova versao do HTML que o usuario nao consegue visualizar e comparar diferencas de HTML 'DOM' pelo algoritmo de reconciliacao.)

exemplo, sao as keys do react, ele nao reescreve toda lista o react vai pegar por si so e realocar a a posicao da key. Por isso nao usamos indece ou numero aleatorios da lista para saber qual item era qual.



## useMemo

1. Pure functional components
2. Renders too often
3. Re-render with same groups

Quando criamos funcoes ou variaveis no corpo do nosso componente, toda vez que o react entrar no corpo e criar o virtual DOM todo aquele codigo vai ser executado do zero.

(useMemo vai fazer calculos caso a informacao que eles precisam nao tenham sido alterado. 

exemplo tenho setState em um input mas no mesmo componente tenho uma lista por estar no mesmo escopo a toda vez que o input receber o valor a lista sera renderizada somente por cada digito no input)

```js
// useMemo usa o escopo da funcao e recebe um array do parametro que esta sendo atualizado
const countItemsWithOne = useMemo(() => {
    console.log('teste')

    return items.filter(item => item.includes('1')).length
  }, [items])


// se quisermos usar informacoes para o memo pelo componente filho:
export const ItemMemo = memo(Item, (oldProps, nextProps) => {
  return true; // declaramos se deve ou nao entrar no fluxo de renderizacao
});

```

se nao é uma funcao que ta dentro de constexto e naot em problema de igualdade referencial sera masi custoso usar useMemo, vale muito mais apena se mais de um componente esta usando uma propriedade.

## useCallback

Esse caso controlamos os render pelo componente filho por meio de callbacks. Aqui faz sentido quando queremos resolver um problema 

imagina passar a funcao COMO propriedade para um componente que faz parte de uma lista que vai retornar o item da lista, 

ex: uma wishList 

```js
function addItemWishList(item: string) {
    setWishList([...wishList, item])  // componente pai
  }

```

toda vez que criarmos ele vair renderizar o componente para verificar se o que ele retornar é diferente (a key)

## Com useCallback melhoramos a performance


passamos como se fossse um useEffect ja que sabemos que o comportamento é de uma funcao callback

```js
const addItemWishList = useCallback((item: string) => {
    setWishList(state => [...state, item]);
  }, [])
```

usados para resolver problemas de igualdade referencial, nao fazz uma funcao ser mais rapida, apenas evita uma funcao ser recridad a cada renderizacao.



<a href="https://youtu.be/NmU2nNehNNY?si=PKS-8e-3FISre6Je">Clique aqui para ver melhor explicacao do codigo. </a>
