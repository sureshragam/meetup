import {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Meetup from './components/Meetup'
import NotFound from './components/NotFound'
import Register from './components/Register'
import RegisterContext from './contexts/RegisterContext'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'ARTS_AND_CULTURE',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({topic: event.target.value})
  }

  onRegister = event => {
    event.preventDefault()

    const {name} = this.state
    if (name.length < 1) {
      this.setState({showErrorMsg: true})
    } else {
      this.setState({showErrorMsg: false})
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {name, topic, showErrorMsg, errorMsg} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          showErrorMsg,
          errorMsg,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          onRegister: this.onRegister,
        }}
      >
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Meetup} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
