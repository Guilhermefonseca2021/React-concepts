import { Root } from './App'
import { AnimationLottie } from './components/lottie/index';

function App() {

  return (
    <Root>
      <button>Enviar</button>
      <button type='submit'>
        loading...
      </button>

      <div className='animation'>
        <AnimationLottie />
      </div>
    </Root>
  )
}

export default App
