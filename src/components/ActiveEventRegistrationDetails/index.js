// Write your code here
import {Component} from 'react'
import Events from '../EventItem'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  state = {
    userName: 'rahul',
    password: 'rahul@2021',
    apiStatus: 'eventsList',
  }

  onClickRegister = async () => {
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  componentDidUpdate = () => {
    this.getLoginDetails()
  }

  RigistreHere = () => (
    <div className="rigistr-container">
      <img
        className="yet-reg-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to registe"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button onClick={this.onClickRegister}>Register Here</button>
    </div>
  )

  AlreadyRegitred = () => (
    <div className="rigistred">
      <img
        className="img-tick"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p>You have already registered for the event</p>
    </div>
  )

  ClosedRegistered = () => (
    <div className="ClosedRegistered">
      <img
        className="closed-img"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <p>Registrations Are Closed Now!</p>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    const api = this.AlreadyRegitred()
    return (
      <div>
        <h1>{api}</h1>
        {/* <button>{api}</button> */}
      </div>
    )
  }
}
export default ActiveEventRegistrationDetails
