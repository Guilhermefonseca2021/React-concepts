## React callbacks

cada state(componentes) tem seus estados que nao é compartilhado, se quisermos saber oque divigitaram no formulario, seja replicado na nossa aplicacao, que iria causar renderizacao a demais componentes.

-para isso existe o conceito de estados compartilhados(react context) que podemos seguir em tais passos:

1. Por callbacks (funcoes que passam parametros que o componente pai passa para o filho por meio de props de pegar aquele argumento e executar a funcao)

-cuidados com propdrilling por callbacks, arvore de componentes que criam props excessivas para o componentes, prejudicando performance e leitura do codigo. use callbacks em casos de apenas UM filho pegar do pai e retornar dados, nada grande.


## Context api




![1_7gl-3SbI7MszLOCS1F953Q](https://github.com/Guilhermefonseca2021/data-fetching/assets/92196697/aabedbdb-a764-46bf-965e-5db5112d47fa)
