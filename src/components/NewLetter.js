import React, { useState } from 'react'

function NewLetter() {
  const [newsletter, setNewsletter] = useState(false);
  function handleNewsletterChange(event) {
    setNewsletter(event.target.checked)
    
  }

  return (
    <div>
      <form>
        <label htmlFor='newsletter'>Subscribe to Our Newsletter</label>
        <input type='chechbox' id='newsletter' onChange={handleNewsletterChange} checked={newsletter} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NewLetter