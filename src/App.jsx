import Logo from './components/logo/logo.jsx'
import CustomButton from './components/custom-button/custom-button.jsx'

function App() {

  return (
    <>
      <Logo />
      <CustomButton type='primary'>Primary</CustomButton>
        <CustomButton type='secondary'>Secondary</CustomButton>
    </>
  )
}

export default App
