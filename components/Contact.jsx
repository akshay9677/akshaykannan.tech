import React, { useState } from "react";
import Image from "next/image";
import { Input, Button, Card, Text } from "@nextui-org/react";

function Contact() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ isDanger: false, message: "" });

  const handleContactSave = async () => {
    if (email !== "") {
      setLoading(true);
      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        let { error } = data || {};
        if (error) throw new Error(error);
        setEmail("");
        setResponse({
          isDanger: false,
          message: "Successfully subscribed to my newsletter!",
        });
      } catch (error) {
        setResponse({
          isDanger: true,
          message:
            error.message || "Unexpected error occured while scubscribing",
        });
      }
      setLoading(false);
    }
  };

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
          {response.message !== "" && (
            <div className="flex items-center mt-3">
              <Image
                src={
                  !response.isDanger ? "/icons/tick.svg" : "/icons/cross.svg"
                }
                width="26px"
                height="26px"
              />
              <span className="ml-2">{response.message}</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Contact;
