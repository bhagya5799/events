// Write your code here
import {Component} from 'react'
import Events from '../EventItem'
import './index.css'

const apiStatus = {
  intial: 'notRegistred',
  success: 'Registered',
  failure: 'closedRegisterd',
}

class ActiveEventRegistrationDetails extends Component {
  state = {
    status: '',
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
    const {status} = this.state
    const {eventsList} = this.props
    return (
      <div>
        <h1>{this.ClosedRegistered}</h1>
      </div>
    )
  }
}
export default ActiveEventRegistrationDetails
