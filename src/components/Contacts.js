import { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

function Contacts() {
  const [data, setData] = useState({ text: '', email: '' })

  function handleFormSubmit(event) {
    event.preventDefault()
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text.target.value })
  }

  return (
    <div className="contacts">
      <h1>Send me a message</h1>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <label>
            <textarea
              className="textInput"
              onChange={(e) => handleInputChange(e, 'text')}
              value={data.text}
              type="textarea"
              placeholder="What do you want to talk about"
            />
            <input
              onChange={(e) => handleInputChange(e, 'email')}
              value={data.email}
              type="email"
              placeholder="E-mail"
            />
            <button className="contactButton" type="submit">
              Send
            </button>
          </label>
        </form>
        <div className="telegram">
          <FaTelegramPlane className="planeIcon" />
          <h2>@Svyatoslav_knyaz_Kievskiy</h2>
        </div>
      </div>
    </div>
  )
}

export default Contacts
