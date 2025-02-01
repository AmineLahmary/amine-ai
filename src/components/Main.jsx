import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BounceLoader } from "react-spinners";
import Message from "./Message";
import Navbar from "./Navbar";

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const Main = () => {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  const answerContainer = useRef(null);

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const newChatSession = model.startChat({
      generationConfig,
      history: [],
    });
    setChatSession(newChatSession);
  }, []);

  const sendBtnClickHandler = async () => {
    if (!chatSession || !input.trim()) return;

    setLoading(true);
    setConversation((prev) => [...prev, { role: "user", content: input }]);
    setInput("");

    setTimeout(
      () =>
        answerContainer.current.scrollTo({
          top: answerContainer.current.scrollHeight,
          behavior: "smooth",
        }),
      100,
    );

    const result = await chatSession.sendMessage(input);
    const aiAnswer = await result.response.text();
    setConversation((prev) => [...prev, { role: "ai", content: aiAnswer }]);
    setLoading(false);
  };

  const keyPressHandler = (e) => {
    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendBtnClickHandler();
    }
  };

  return (
    <main className="flex h-[95vh] w-full flex-col p-5">
      <Navbar />
      <div className="m-auto flex max-h-full w-full max-w-[768px] flex-col">
        <div
          ref={answerContainer}
          className="answer-container no-scrollbar relative mb-10 flex flex-col gap-8 overflow-scroll text-wrap rounded-[15px] p-2 pb-4"
        >
          {conversation ? (
            conversation.map((message, index) => (
              <Message key={index} message={message} />
            ))
          ) : (
            <h1 className="text-balance text-4xl md:text-6xl">
              Hello World,
              <br />
              Talk To{" "}
              <span className="text-red-600 drop-shadow-[0px_0px_5px_#f00]">
                <strong>AmineAI</strong>
              </span>{" "}
              Chat
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2 ml-2 inline"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  color="currentColor"
                >
                  <path d="M12 4.5a2.5 2.5 0 0 0-5 0a3 3 0 0 0-2.567 4.554a3.001 3.001 0 0 0 0 5.893A3 3 0 0 0 7 19.5a2.5 2.5 0 0 0 5-.001" />
                  <path d="M12 19.5a2.5 2.5 0 0 0 5 0a3 3 0 0 0 2.567-4.553a3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 0 0-5-.001" />
                  <path d="M10.487 7.001V8.98M7 10.501h2.052m5.971 0h2.052m-2.052 2.974h2.052M7 13.475h2.052m1.435 1.545V17m3.025-1.98V17m-.009-10v1.98m-3.45 5.989h3.971a1 1 0 0 0 1-1V9.98a1 1 0 0 0-1-1h-3.971a1 1 0 0 0-1 1v3.989a1 1 0 0 0 1 1" />
                </g>
              </svg>
            </h1>
          )}
          {loading ? (
            <div className="py-5">
              <BounceLoader size={30} color="#ffffff" />
            </div>
          ) : null}
        </div>
        <div className="flex rounded-full bg-stone-800 px-1 py-1">
          <input
            type="text"
            placeholder="Message AmineAI"
            className="flex w-full items-center bg-transparent px-5 focus:outline-none"
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={keyPressHandler}
            value={input}
          />

          <button
            onClick={sendBtnClickHandler}
            className="mr-2 bg-transparent p-2 text-3xl"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.912 12H4L2.023 4.135A.7.7 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.7.7 0 0 1 .033-.186L3.5 15"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};
export default Main;
