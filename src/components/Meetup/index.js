import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../contexts/RegisterContext'
import {
  HomeContainer,
  Heading,
  Para,
  RegisterButton,
  Image,
} from './styledComponents'

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

const Meetup = () => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic} = value
      let modifiedName = ''
      if (name.length > 0) {
        modifiedName =
          name.charAt(0).toUpperCase() +
          name.slice((1: name.length)).toLowerCase()
      }

      const index = topicsList.findIndex(eachTopic => eachTopic.id === topic)
      const modifiedTopic = topicsList[index].displayText

      return (
        <HomeContainer>
          <Header />
          {name.length < 1 ? (
            <Heading>Welcome to MeetUp</Heading>
          ) : (
            <Heading>Hello {modifiedName}</Heading>
          )}
          {name.length < 1 ? (
            <Para>Please register for the topic</Para>
          ) : (
            <Para>Welcome to {modifiedTopic}</Para>
          )}
          {name.length < 1 ? (
            <Link to="/register">
              <RegisterButton>Register</RegisterButton>
            </Link>
          ) : null}

          <Image
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Meetup
