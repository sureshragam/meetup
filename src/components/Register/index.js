import {Component} from 'react'
import {
  RegisterContainer,
  RegisterContentContainer,
  ImageContainer,
  FormContainer,
  Image,
  Form,
  Heading,
  Label,
  Input,
  Select,
  Option,
  ErrorMsg,
} from './styledComponents'
import {RegisterButton} from '../Meetup/styledComponents'
import RegisterContext from '../../contexts/RegisterContext'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {showErrorMsg: false, errorMsg: 'Please enter your name'}

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <RegisterContext.Consumer>
        {value => {
          const {name, topic, onChangeName, onChangeTopic} = value
          const onRegister = event => {
            event.preventDefault()
            if (name.length < 1) {
              this.setState({showErrorMsg: true})
            } else {
              this.setState({showErrorMsg: false})
              const {history} = this.props
              history.replace('/')
            }
          }
          return (
            <RegisterContainer>
              <Header />
              <RegisterContentContainer>
                <ImageContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </ImageContainer>
                <FormContainer>
                  <Form onSubmit={onRegister}>
                    <Heading>Let us join</Heading>
                    <Label htmlFor="name">NAME</Label>
                    <Input
                      type="text"
                      id="name"
                      value={name}
                      onChange={onChangeName}
                    />
                    <Label htmlFor="topics">TOPICS</Label>
                    <Select value={topic} onChange={onChangeTopic} id="topics">
                      {topicsList.map(eachTopic => {
                        const {id, displayText} = eachTopic
                        return (
                          <Option key={id} value={id}>
                            {displayText}
                          </Option>
                        )
                      })}
                    </Select>
                    <RegisterButton type="submit">Register Now</RegisterButton>
                    {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
                  </Form>
                </FormContainer>
              </RegisterContentContainer>
            </RegisterContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
