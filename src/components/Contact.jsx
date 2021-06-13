import Axios from 'axios'
import React, { useState } from 'react'
import AkSnacksBar from '../ak-components/AkSnackBar'
import { baseUrl } from '../config/baseUrl'

import AkButton from '../ak-components/AkButton'

function Contact(props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const [open, setopen] = useState(false)
  const [failed, setfailed] = useState(false)
  const [snackMessage, setSnackMessage] = useState('Signed up!!')

  async function handleContactSave() {
    if (name !== '' && email !== '') {
      let params = {
        name: name,
        email: email,
        description: description,
      }
      setLoading(true)
      let { data } = await Axios.post(`${baseUrl}/api/v1/users`, params)
      setLoading(false)
      setName('')
      setEmail('')
      setDescription('')
      setopen(true)
      if (!data.error) {
        setfailed(false)
        setSnackMessage('Signed up!!')
      } else {
        setfailed(true)
        setSnackMessage('Error occured')
      }
    }
  }

  return (
    <div id="contact">
      <AkSnacksBar
        open={open}
        failed={failed}
        content={snackMessage}
        onClose={() => setopen(false)}
      />

      <div className="text-4xl font-bold text-center block-header">Contact</div>

      <div className="my-10 max-w-sm mx-auto rounded-xl shadow-2xl overflow-hidden md:max-w-sm">
        <div className="md:flex justify-center flex-col p-5">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold p-1">
            Newsletter Signup
          </div>
          <div className="p-1">
            <div className="pb-1">Name</div>

            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Name"
                autoComplete="off"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full	px-3 py-2 text-gray-900 border border-transparent rounded shadow focus:outline-none focus:ring-2  focus:ring-blue-300 focus:border-transparent"
              />
            </div>
          </div>

          <div className="p-1">
            <div className="pb-1">Email </div>
            <div className="mb-3 pt-0">
              <input
                type="email"
                placeholder="name@example.com"
                autoComplete="off"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full	px-3 py-2 text-gray-900 border border-transparent rounded shadow focus:outline-none focus:ring-2  focus:ring-blue-300 focus:border-transparent"
              />
            </div>
          </div>

          <div className="p-1">
            <div className="pb-1">Leave a message </div>

            <div className="mb-3 pt-0">
              <textarea
                placeholder="Leave a message"
                autoComplete="off"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="w-full	px-3 py-2 text-gray-900 border border-transparent rounded shadow focus:outline-none focus:ring-2  focus:ring-blue-300 focus:border-transparent"
              ></textarea>
            </div>
          </div>
          <AkButton
            onClick={handleContactSave}
            loading={loading}
            children={<span>Signup</span>}
          />
        </div>
      </div>
      <footer className="flex justify-center py-3" style={{ color: '#888' }}>
        © Akshay Kannan
      </footer>
    </div>
  )
}

export default Contact
