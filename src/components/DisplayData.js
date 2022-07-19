import React from 'react'

function DisplayData(props) {
  return (
    <div>
      <h2>{props.firstName}</h2>
      <h2>{ props.lastName}</h2>
    </div>
  )
}

export default DisplayData