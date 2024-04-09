import React, { useEffect, useRef } from "react";
import ConvHistory from "../components/Chatbot/ConvHistory";
import Conversation from "../components/Chatbot/Conversation";
import ChatInput from "../components/Chatbot/ChatInput";
import NewConvButton from "../components/Chatbot/NewConvButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ChatBot() {
  const chatRef = useRef(null);
  const convs = [
    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },
    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },
    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },
    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },
    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },
    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },

    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },
    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },
    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },
    {
      title:
        "lorem conversation-history-container lorem conversation-history-container ",
      conversation: "1-21-2012",
    },
  ];
  const demandsWithResponse = [
    {
      DateTime: "2024-03-30 10:30 AM",
      Question: "How can I create a React component?",
    },
    {
      DateTime: "2024-03-30 11:15 AM",
      Question: "What is the best way to manage state in React?",
    },
    {
      DateTime: "2024-03-30 12:00 PM",
      Question: "How do I fetch data from an API in React?",
    },
  ];

  const chat = [
    {
      date: "2024-03-30 10:30 AM",
      question: "How can I create a React component?",
      response:
        "To create a React component, you need to define a JavaScript function or class that returns a React element. You can then use this component in your application by importing it and including it in your JSX code.",
    },
    // Add a new response with code block
    {
      date: "2024-03-30 11:15 AM",
      question: "How do I use useEffect hook in React?",
      response:
        "You can use the `useEffect` hook in React to perform side effects in functional components. Here's an example of using `useEffect` to fetch data from an API:\n```javascript\nimport React, { useState, useEffect } from 'react';\n\nfunction MyComponent() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch('https://api.example.com/data')\n      .then(response => response.json())\n      .then(data => setData(data))\n      .catch(error => console.error('Error fetching data:', error));\n  }, []);\n\n  return (\n    <div>\n      {/* Render data here */}\n    </div>\n  );\n}\n```",
    },
    {
      date: "2024-03-30 12:00 PM",
      question: "How do I fetch data from an API in React?",
      response:
        "To fetch data from an API in React, you can use the Fetch API or third-party libraries like Axios. You can make asynchronous HTTP requests in React components using useEffect hook or by using async/await with fetch or Axios.",
    },
    {
      date: "2024-03-31 09:45 AM",
      question: "What are React props?",
      response:
        "React props (short for properties) are a way to pass data from parent components to child components in React. Props are read-only, meaning that child components cannot modify the props they receive from their parent components.",
    },
    {
      date: "2024-03-31 10:30 AM",
      question: "How can I handle events in React?",
      response:
        "In React, you can handle events using event handlers. You can attach event handlers to DOM elements in JSX using camelCase naming convention, such as onClick, onChange, etc. These event handlers can then call functions or update state in your React components.",
    },
  ];
  useEffect(() => {
    scrollChatToBottom();
  }, [chat]);
  function scrollChatToBottom() {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }
  return (
    <>
      <div
        className="offcanvas offcanvas-start sidebarChatBot"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header pb-0 d-flex flex-row justify-content-between align-items-center mb-3">
          <NewConvButton />
          <i
            id="sidebarclose"
            className="fa-solid fa-xmark ms-4"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body px-2">
          <ConvHistory conversationsHistory={convs} />
        </div>
      </div>
      <div className="chatbot-container px-lg-4 px-2 pt-3">
        <div className="row">
          <div className="col-md-12">
            <motion.div
              initial={{  y: -50 }}
              animate={{  y: 0 }}
              transition={{ delay: 3 }}
              className="header-motion h-10 d-flex align-items-center justify-content-between pb-2 px-2 px-lg-5"
            >
              <div
                className="d-flex align-items-center"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <h5 className="m-0 d-none d-lg-block">History</h5>
                <i className="fa-solid fa-clock-rotate-left mx-2"></i>
              </div>
              <Link to="/">
                <h5>Namodaj - ChatBot</h5>
              </Link>
              <div className="username d-flex align-items-center">
                <p className="m-0 d-none d-lg-block">
                  Zakaria <strong>SAKI</strong>
                </p>
                <i
                  type="button"
                  className="fa-solid fa-right-from-bracket ms-2"
                ></i>
              </div>
            </motion.div>
          </div>
          <div className="col-md-12">
          <div id="chat" ref={chatRef} className="chat px-3 rounded-4 pe-2">
              {chat &&
                chat.map((item, index) => (
                  <Conversation
                    key={index}
                    data={chat}
                    date={item.date}
                    question={item.question}
                    response={item.response}
                  />
                ))}
            </div>
          </div>
          <div className="col-md-12">
             <ChatInput />
          </div>
        </div>
      </div>
      <div className="modal fade " id="actionModel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered d-flex flex-column justify-content-center align-items-center">
          <div
            id="action"
            className="bg-white p-3 rounded-3 d-flex flex-column justify-content-center align-items-center text-center"
          ></div>
        </div>
      </div>
    </>
  );
}

export default ChatBot;
