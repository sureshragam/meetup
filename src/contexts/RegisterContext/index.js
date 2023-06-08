import {createContext} from 'react'

const RegisterContext = createContext({
  name: '',
  topic: '',
  onChangeName: () => {},
  onChangeTopic: () => {},
  onRegister: () => {},
})

export default RegisterContext
