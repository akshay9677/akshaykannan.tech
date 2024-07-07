"use client";

import { useCallback, useState } from "react";
import ICON_HASH from "./HoverIconList";
import { Toaster, toast } from "sonner";
import Image from "next/image";

const HoverText = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <span className="hover:text-[#0467FD] cursor-pointer transition-colors duration-200 text-content-tertiary">
        {children}
      </span>
    </>
  );
};

const SuccessSub = ({ isDanger, title, description }: any) => {
  return (
    <div className="bg-container-secondary border border-border-primary w-[340px] p-2 rounded-lg flex justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Image
            src={isDanger ? "/blog/close-circle.svg" : "/blog/tick-circle.svg"}
            width={16}
            height={16}
            alt="pros-cons"
            className="m1-1"
          />
          <div className="text-sm">{title}</div>
        </div>
        <div className="ml-6 text-xs text-content-secondary">{description}</div>
      </div>
    </div>
  );
};

const Subscribe = () => {
  const [input, setInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [response, setResponse] = useState({ isDanger: false, message: "" });

  const subscribeEmail = useCallback(async () => {
    setSaving(true);
    try {
      const response = await fetch(
        `https://api.buttondown.email/v1/subscribers`,
        {
          body: JSON.stringify({ email: input }),
          headers: {
            Authorization: `Token 0f5cfa84-7f34-457d-b10a-5a605ce1114b`,
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );
      const data = await response.json();
      let { error } = data || {};
      if (error) throw new Error(error);

      toast.custom(() => (
        <SuccessSub
          isDanger={false}
          title="Subscribed"
          description="Successfully subscribed to my newsletter!"
        />
      ));
      setInput("");
    } catch (e) {
      console.log(e);
      toast.custom(() => (
        <SuccessSub
          isDanger={true}
          title="Error Occured"
          description="Unexpected error occured while scubscribing!"
        />
      ));
    }
    setSaving(false);
  }, [input]);

  return (
    <div className="max-w-3xl w-full flex flex-col items-center justify-center pt-6 pb-16 relative">
      <div className="max-w-xl w-full px-6 lg:px-2">
        <div className="text-center text-2xl flex flex-wrap w-full gap-1.5 transition-colors tracking-tight">
          <div className="flex">For insights on</div>
          <div className="group flex">
            <HoverText>front-end designs</HoverText>

            {ICON_HASH["design"]}
          </div>
          ,
          <div className="group flex">
            <HoverText> framework</HoverText>
            {ICON_HASH["frameworks"]}
          </div>
          , and,
          <div className="group flex">
            <HoverText> build tools</HoverText>

            {ICON_HASH["build"]}
          </div>
          , subscribe to my newsletter.
        </div>

        <div className="flex items-center w-full mt-4 gap-2">
          <input
            className="text-sm bg-container-primary outline-none border-[1.6px] border-border-primary p-2 rounded-lg focus:border-[#0467FD] transition-colors w-[50%] focus:shadow-[0_0_2px_1px_#0467fd7a]"
            placeholder="tim@apple.com"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div
            // onClick={() => {
            //   toast.custom((t) => <SuccessSub />);
            // }}
            onClick={subscribeEmail}
            className="flex items-center gap-2 text-sm bg-content-primary text-container-primary rounded-lg py-2 px-3 cursor-pointer hover:-translate-y-0.5 transition active:translate-y-0 hover:shadow-lg"
          >
            {saving && (
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-container-primary animate-spin fill-[#0467FD]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
            Subscribe
          </div>
          <Toaster closeButton position="top-center" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
