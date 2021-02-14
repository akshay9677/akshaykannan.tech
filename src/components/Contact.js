import Axios from 'axios'
import React, { useState } from 'react'
import SnacksBar from './Snackbar'
import { baseUrl } from '../config/baseUrl'

function Contact(props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const [open, setopen] = useState(false)
  const [failed, setfailed] = useState(false)
  const [snackMessage, setSnackMessage] = useState('')

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
      <SnacksBar
        open={open}
        failed={failed}
        message={snackMessage}
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
                className="w-full	px-3 py-2 border border-transparent rounded shadow focus:outline-none focus:ring-2  focus:ring-blue-300 focus:border-transparent"
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
                className="w-full	px-3 py-2 border border-transparent rounded shadow focus:outline-none focus:ring-2  focus:ring-blue-300 focus:border-transparent"
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
                className="w-full	px-3 py-2 border border-transparent rounded shadow focus:outline-none focus:ring-2  focus:ring-blue-300 focus:border-transparent"
              ></textarea>
            </div>
          </div>
          <button
            onClick={handleContactSave}
            className="w-40 my-3 py-1 bg-red-500	text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          >
            {loading && (
              <div
                className={
                  props.dark
                    ? 'spinner-border text-dark spinner-border-sm'
                    : 'spinner-border text-light spinner-border-sm'
                }
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            )}{' '}
            Signup
          </button>
        </div>
      </div>
      <footer className="flex justify-center py-3" style={{ color: '#888' }}>
        © Akshay Kannan
      </footer>
    </div>
  )
}

export default Contact
