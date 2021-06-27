import Axios from 'axios'
import React, { useState } from 'react'
import { baseUrl } from '../config/baseUrl'

import { Button, Text } from 'ak-palette'
import { toast } from 'ak-palette'

function Contact(props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

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
      if (!data.error) {
        toast.success('Signed up!!')
      } else {
        toast.danger('Error Occured')
      }
    }
  }

  return (
    <div id="contact">
      <Text
        size="xxxlarge"
        className="text-4xl font-bold text-center block-header dark:text-white"
      >
        Contact
      </Text>

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
          <Button type="danger" onClick={handleContactSave} disabled={loading}>
            <span>Signup</span>{' '}
          </Button>
        </div>
      </div>
      <footer className="flex justify-center py-3" style={{ color: '#888' }}>
        © Akshay Kannan
      </footer>
    </div>
  )
}

export default Contact
