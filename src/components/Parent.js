import React, {useState} from 'react'
import DisplayData from './DisplayData';
import Form from './Form'

function Parent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
    console.log(handleFirstNameChange)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
    console.log(handleLastNameChange)
  }
  return (
    <div>
      <Form firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange} />
      <DisplayData firstName ={firstName} lastName={lastName}/>
    </div>
  )
}

export default Parent