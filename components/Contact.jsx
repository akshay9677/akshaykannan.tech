import Axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { toast } from "ak-palette";

import { Input, Button, Card, Text } from "@nextui-org/react";

function Contact() {
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
      Axios.post(`${baseUrl}/api/v1/users`, params);
      setTimeout(() => {
        setLoading(false);
        setName("");
        setEmail("");
        setDescription("");
        toast.success("Signed up!!");
      }, 3000);
    }
  }

  return (
    <div id="contact">
      <Card hoverable bordered shadow={false}>
        <Text h4>Subscribe to the newsletter</Text>
        <Text color="#6B7380" size="14px">
          Get emails from me about web development, tech, and early access to
          new articles.
        </Text>
        <div className="rounded-xl overflow-hidden md:max-w-md py-4">
          <div className="md:flex justify-center flex items-center p-0.5">
            <Input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              width="100%"
              bordered
              shadow
            />
            <Button
              className="ml-2"
              auto
              onClick={handleContactSave}
              disabled={loading}
            >
              Signup
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Contact;
