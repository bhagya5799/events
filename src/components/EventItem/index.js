// Write your code here
import React from 'react'
import './index.css'

const EventItem = props => {
  const {details} = props
  const {imageUrl, name, location, id, registrationStatus} = details
  console.log(id)
  return (
    <li>
      <button>
        <img src={imageUrl} alt="event" className="img" />
      </button>
      <p>{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
