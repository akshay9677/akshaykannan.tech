import Axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../config/baseUrl";

import { Button, Text } from "ak-palette";
import { toast } from "ak-palette";

function Contact(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleContactSave() {
    if (email !== "") {
      let params = {
        name: name,
        email: email,
        description: description,
      };
      setLoading(true);
      let { data } = await Axios.post(`${baseUrl}/api/v1/users`, params);
      setLoading(false);
      setName("");
      setEmail("");
      setDescription("");
      if (!data.error) {
        toast.success("Signed up!!");
      } else {
        toast.danger("Error Occured");
      }
    }
  }

  return (
    <div id="contact">
      <Text size="xxxlarge" className="dark:text-white">
        Signup
      </Text>
      <div className="rounded-xl overflow-hidden md:max-w-sm pt-2 pb-8">
        <div className="md:flex justify-center flex items-center p-1">
          <input
            type="email"
            placeholder="name@example.com"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full	px-3 py-2 mr-3 text-gray-900 border border-transparent rounded shadow focus:outline-none dark:bg-gray-900 dark:text-gray-200 focus:ring-2  focus:ring-blue-300 focus:border-transparent"
          />
          <Button type="info" onClick={handleContactSave} disabled={loading}>
            <span>Signup</span>{" "}
          </Button>
        </div>
      </div>
      <footer className="flex justify-center py-3" style={{ color: "#888" }}>
        © Akshay Kannan
      </footer>
    </div>
  );
}

export default Contact;
